import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  Container,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import { getOdds } from '@/api/api-odds';
import BetCard from '@/components/BetCard';

export default function OddsPage() {
  
  const [odds, setOdds] = useState([]);
  const handleGetOdds = async () => {
    const response = await getOdds();
    console.log(response);
    if (response.data) {
      setOdds(response.data);
    }
  };
  useEffect(() => {
    if (odds.length === 0) {
      handleGetOdds();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Live Odds | Sport Betting</title>
        <meta name="description" content="Live betting odds from top bookmakers" />
      </Head>
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{ 
              color: '#1976d2',
              fontWeight: 700,
              mb: 4,
            }}
          >
            Live Odds
          </Typography>
          <Grid container spacing={3}>
            {odds.length === 0 ? (
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant="h6" color="text.secondary">
                  No matches available at the moment
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Check back later for live odds
                </Typography>
              </Box>
            ) : (
              odds.map((match) => (
                <Grid item xs={12} md={6} lg={4} key={match.event_id}>
                  <BetCard match={match} />
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
