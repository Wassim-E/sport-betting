import React from 'react';
import Head from 'next/head';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  useTheme,
} from '@mui/material';

export default function AnalysisPage() {
  const theme = useTheme();

  // Mock analysis data
  const analysisData = [
    {
      id: 1,
      title: 'Goal Scoring Trends',
      description: 'Analysis of goal scoring patterns across major leagues',
      confidence: 85,
      trend: 'increasing',
      color: theme.palette.primary.main,
    },
    {
      id: 2,
      title: 'Home Advantage Impact',
      description: 'Statistical analysis of home team performance',
      confidence: 72,
      trend: 'stable',
      color: theme.palette.secondary.main,
    },
    {
      id: 3,
      title: 'Weather Effects',
      description: 'Impact of weather conditions on match outcomes',
      confidence: 68,
      trend: 'decreasing',
      color: theme.palette.warning.main,
    },
    {
      id: 4,
      title: 'Injury Impact',
      description: 'Correlation between team injuries and results',
      confidence: 91,
      trend: 'increasing',
      color: theme.palette.success.main,
    },
    {
      id: 5,
      title: 'Market Movement',
      description: 'Odds movement patterns and betting volume',
      confidence: 78,
      trend: 'stable',
      color: theme.palette.info?.main || theme.palette.primary.light,
    },
    {
      id: 6,
      title: 'Historical Performance',
      description: 'Head-to-head statistics and historical trends',
      confidence: 88,
      trend: 'increasing',
      color: theme.palette.error.main,
    },
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing':
        return '📈';
      case 'decreasing':
        return '📉';
      case 'stable':
        return '➡️';
      default:
        return '❓';
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 80) return theme.palette.success.main;
    if (confidence >= 60) return theme.palette.warning.main;
    return theme.palette.error.main;
  };

  return (
    <>
      <Head>
        <title>Analysis | Sport Betting</title>
        <meta name="description" content="Advanced betting analysis and insights" />
      </Head>

      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{ 
              color: theme.palette.primary.main,
              fontWeight: 700,
              mb: 2,
            }}
          >
            Betting Analysis
          </Typography>
          
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ mb: 6 }}
          >
            Data-driven insights to help you make informed betting decisions
          </Typography>

          <Grid container spacing={3}>
            {analysisData.map((item) => (
              <Grid item xs={12} md={6} lg={4} key={item.id}>
                <Card 
                  sx={{ 
                    height: '100%',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <CardContent>
                    {/* Header */}
                    <Box sx={{ mb: 2 }}>
                      <Typography 
                        variant="h6" 
                        component="h3" 
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {item.description}
                      </Typography>
                    </Box>

                    {/* Confidence Score */}
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          Confidence
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 600,
                            color: getConfidenceColor(item.confidence),
                          }}
                        >
                          {item.confidence}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={item.confidence}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: theme.palette.grey[200],
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: getConfidenceColor(item.confidence),
                          },
                        }}
                      />
                    </Box>

                    {/* Trend */}
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1,
                      pt: 2,
                      borderTop: `1px solid ${theme.palette.grey[200]}`,
                    }}>
                      <Typography variant="body2" color="text.secondary">
                        Trend:
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {getTrendIcon(item.trend)} {item.trend}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Summary Section */}
          <Box sx={{ mt: 8, p: 4, backgroundColor: theme.palette.grey[50], borderRadius: 2 }}>
            <Typography 
              variant="h5" 
              component="h2" 
              gutterBottom
              sx={{ color: theme.palette.text.primary }}
            >
              Analysis Summary
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Based on our comprehensive analysis, the current betting landscape shows:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" variant="body1" color="text.secondary">
                Strong confidence in historical performance patterns (88% confidence)
              </Typography>
              <Typography component="li" variant="body1" color="text.secondary">
                High reliability in injury impact analysis (91% confidence)
              </Typography>
              <Typography component="li" variant="body1" color="text.secondary">
                Stable home advantage trends (72% confidence)
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
