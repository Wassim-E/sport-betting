import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';

export default function Header() {
  const theme = useTheme();
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <AppBar position="static" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo/Brand */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              cursor: 'pointer',
              fontWeight: 700,
              color: theme.palette.primary.contrastText,
            }}
            onClick={() => handleNavigation('/')}
          >
            SportBetting
          </Typography>

          {/* Navigation Links - Only render after hydration */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button
              color="inherit"
              onClick={() => handleNavigation('/')}
              sx={{ 
                color: theme.palette.primary.contrastText,
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Home
            </Button>
            
            <Button
              color="inherit"
              onClick={() => handleNavigation('/odds')}
              sx={{ 
                color: theme.palette.primary.contrastText,
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Odds
            </Button>

            <Button
              color="inherit"
              onClick={() => handleNavigation('/analysis')}
              sx={{ 
                color: theme.palette.primary.contrastText,
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Analysis
            </Button>
          </Box>
        
        </Toolbar>
      </Container>
    </AppBar>
  );
}
