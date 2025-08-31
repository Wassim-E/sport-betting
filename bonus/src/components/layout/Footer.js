import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  useTheme,
} from '@mui/material';

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        mt: 'auto',
        backgroundColor: theme.palette.grey[100],
        borderTop: `1px solid ${theme.palette.grey[200]}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: 3,
          }}
        >
          {/* Company Info */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" color="primary" gutterBottom>
              SportBetting
            </Typography>
            <Typography variant="body2" color="text.secondary" maxWidth={300}>
              Your trusted platform for sports betting analysis, odds comparison, and strategic insights.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" color="text.secondary" underline="hover">
                Home
              </Link>
              <Link href="/odds" color="text.secondary" underline="hover">
                Odds
              </Link>
              <Link href="/analysis" color="text.secondary" underline="hover">
                Analysis
              </Link>
              <Link href="/about" color="text.secondary" underline="hover">
                About
              </Link>
            </Box>
          </Box>

          {/* Legal */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/privacy" color="text.secondary" underline="hover">
                Privacy Policy
              </Link>
              <Link href="/terms" color="text.secondary" underline="hover">
                Terms of Service
              </Link>
              <Link href="/disclaimer" color="text.secondary" underline="hover">
                Disclaimer
              </Link>
            </Box>
          </Box>

          {/* Contact */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              support@sportbetting.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              +1 (555) 123-4567
            </Typography>
          </Box>
        </Box>

        {/* Copyright */}
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: `1px solid ${theme.palette.grey[200]}`,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} SportBetting. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
