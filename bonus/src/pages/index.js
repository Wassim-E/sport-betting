import * as React from "react";
import Head from "next/head";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import { useAppContext } from "@/lib/Context";
import { getOdds } from "@/api/api-odds";

export default function HomePage() {
  const theme = useTheme();
  const router = useRouter();
  const { showNotification } = useAppContext();

  const handleGetStarted = () => {
    showNotification('success', 'Welcome to SportBetting! Let\'s get started.');
    router.push('/odds');
  };

  const handleGetOdds = async () => {
    const odds = await getOdds();
    console.log(odds);
  };
  handleGetOdds();

  const features = [
    {
      title: 'Live Odds',
      description: 'Get real-time betting odds from multiple bookmakers',
      action: 'View Odds',
      route: '/odds',
      color: theme.palette.primary.main,
    },
    {
      title: 'Data Analysis',
      description: 'Advanced analytics and insights for informed decisions',
      action: 'Analyze',
      route: '/analysis',
      color: theme.palette.secondary.main,
    },
    {
      title: 'Market Trends',
      description: 'Track betting market movements and patterns',
      action: 'Explore',
      route: '/trends',
      color: theme.palette.success.main,
    },
  ];

  return (
    <>
      <Head>
        <title>Welcome | Sport Betting</title>
        <meta name="description" content="Explore sport betting odds, tips, and insights." />
      </Head>
      
      {/* Hero Section */}
      <Box sx={{ py: 8, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 3,
            }}
          >
            Welcome to SportBetting
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ mb: 4, lineHeight: 1.6 }}
          >
            Your trusted platform for sports betting analysis, odds comparison, and strategic insights.
            Make informed decisions with comprehensive data and advanced analytics.
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            onClick={handleGetStarted}
            sx={{ 
              px: 4, 
              py: 1.5,
              fontSize: '1.1rem',
              backgroundColor: theme.palette.primary.main,
              '&:hover': { backgroundColor: theme.palette.primary.dark }
            }}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.grey[50] }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            textAlign="center" 
            gutterBottom
            sx={{ mb: 6, color: theme.palette.text.primary }}
          >
            Key Features
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        backgroundColor: feature.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px',
                      }}
                    >
                      <Typography variant="h4" color="white" fontWeight="bold">
                        {index + 1}
                      </Typography>
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                    <Button 
                      variant="outlined" 
                      onClick={() => router.push(feature.route)}
                      sx={{ 
                        borderColor: feature.color,
                        color: feature.color,
                        '&:hover': { 
                          borderColor: feature.color,
                          backgroundColor: `${feature.color}10`,
                        }
                      }}
                    >
                      {feature.action}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to Start?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Explore our comprehensive betting analysis tools and start making informed decisions.
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            onClick={() => router.push('/odds')}
            sx={{ 
              px: 4, 
              py: 1.5,
              fontSize: '1.1rem',
              backgroundColor: theme.palette.secondary.main,
              '&:hover': { backgroundColor: theme.palette.secondary.dark }
            }}
          >
            Explore Odds
          </Button>
        </Container>
      </Box>
    </>
  );
}


