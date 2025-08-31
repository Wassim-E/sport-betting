import { Box, Typography, Card, CardContent, Grid, Chip } from '@mui/material';

export default function BetCard({ match }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 5: // Assuming status 5 means 'Live' from time.status
        return '#d32f2f';
      default:
        return '#757575';
    }
  };

  return (
    <Card 
      sx={{ 
        height: '100%',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        },
      }}
    >
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Chip
            label={match.path.League}
            size="small"
            sx={{ backgroundColor: '#e0e0e0', color: '#212121', mb: 1 }}
          />
          <Chip
            label={match.time.status === 5 ? 'LIVE' : 'FINISHED'}
            size="small"
            sx={{ backgroundColor: getStatusColor(match.time.status), color: 'white', ml: 1 }}
          />
        </Box>
        <Typography variant="h6" component="h2" gutterBottom>
          {match.team_a} vs {match.team_b}
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {match.markets[0]?.outcomes.map((outcome) => (
              <Grid item xs={4} key={outcome.outcome_id}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    {outcome.description}
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 600 }}>
                    {outcome.price}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid #e0e0e0' }}>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            Time: {match.time.m}:{match.time.s}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}