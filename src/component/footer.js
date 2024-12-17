import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import medLogo from '../assets/medLogo.png';
import uae from '../assets/uae.png';
import ukmap from '../assets/ukmap.png';
import nzmap from '../assets/nzmap.png';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#0A1733',
        color: 'white',
        py: 6,
        px: { xs: 2, sm: 8 },
        mt: 'auto',
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} sm={3}>
          <Box
            component="img"
            src={medLogo}
            alt="Medfuture Logo"
            sx={{ width: 200 }}
          />
          <Box sx={{ mt: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Box
                component="img"
                src={nzmap}
                alt="New Zealand"
                sx={{ width: 40, height: 60, mr: 1 }}
              />
              <Typography sx={{ fontSize: '14px', color: '#EBEDEFCF' }}>
                New Zealand
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Box
                component="img"
                src={ukmap}
                alt="United Kingdom"
                sx={{ width: 40, height: 60, mr: 1 }}
              />
              <Typography sx={{ fontSize: '14px', color: '#EBEDEFCF' }}>
                United Kingdom
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '30px' }}>
              <Box
                component="img"
                src={uae}
                alt="United Arab Emirates"
                sx={{ width: 40, height: 30, mr: 1 }}
              />
              <Typography sx={{ fontSize: '14px', color: '#EBEDEFCF' }}>
                United Arab Emirates
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Typography variant="h5" gutterBottom paddingBottom={4} marginTop={2}>
            Information
          </Typography>
          {['About', 'News', 'Policies', 'Terms of Use', 'Compliance'].map(
            (text, index) => (
              <Link key={index} href="#" color="inherit" underline="none">
                <Typography
                  sx={{ fontSize: '14px', color: '#EBEDEFCF', paddingBottom: '15px' }}
                >
                  {text}
                </Typography>
              </Link>
            )
          )}
        </Grid>

        <Grid item xs={6} sm={2}>
          <Typography variant="h5" gutterBottom paddingBottom={4} marginTop={2}>
            Support
          </Typography>
          {['Contact Us', 'Create an Account', 'Register for Job Alerts'].map(
            (text, index) => (
              <Link key={index} href="#" color="inherit" underline="none">
                <Typography
                  sx={{ fontSize: '14px', color: '#EBEDEFCF', paddingBottom: '15px' }}
                >
                  {text}
                </Typography>
              </Link>
            )
          )}
        </Grid>

        <Grid item xs={12} sm={3}>
          <Typography variant="h5" gutterBottom paddingBottom={4} marginTop={2}>
            Jobs
          </Typography>
          {[
            'New South Wales',
            'Queensland',
            'South Australia',
            'Tasmania',
            'Victoria',
            'Western Australia',
            'Australian Capital Territory',
            'Northern Territory',
          ].map((region, index) => (
            <Typography
              key={index}
              sx={{ fontSize: '14px', color: '#EBEDEFCF', paddingBottom: '15px' }}
            >
              {region}
            </Typography>
          ))}
        </Grid>
      </Grid>

      <Divider sx={{ backgroundColor: '#EBEDEFCF', my: 4 }} />

      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="body2" sx={{ fontSize: '14px', color: '#EBEDEFCF' }}>
            Copyrights © 2023 Medfuture
          </Typography>
        </Grid>

        <Grid item>
          <Box>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <FacebookIcon fontSize="large" />
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <InstagramIcon fontSize="large" />
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <TwitterIcon fontSize="large" />
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <YouTubeIcon fontSize="large" />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
