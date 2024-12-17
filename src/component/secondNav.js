import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import worldMap from '../assets/worldMap.png';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Stack from '@mui/material/Stack';
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';
import ExpeditedPathwayCards from './cardContent';
import WhyWorkWithUs from './workWithUs';
import JobList from './jobList';
import ausiMap from '../assets/ausiMap.png';
import WhatsAppLogo from '../assets/whatsappLogo.png';
import Register from './register';
import Testimonials from './testimonials';
import FAQ from './faq.js';

const navItems = [
  'Doctor',
  'AHP',
  'Oral Health',
  'Mental Health',
  'Nursing',
  'Healthcare Executive',
];

const StyledButton = styled(Button)({
  color: 'black',
  fontFamily: 'sans-serif',
  fontSize: '14px',
  textTransform: 'none',
  marginRight: '16px',
});

function SecondNavBar() {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '12px 40px',
        display: 'flex',
        justifyContent: 'flex-end',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        gap: '20px',
        zIndex: 1000,
        marginTop: '60px',
      }}
    >
      {navItems.map((item) => (
        <StyledButton key={item}>{item}</StyledButton>
      ))}
    </Box>
  );
}

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <SecondNavBar />
      <Box
        component="main"
        sx={{
          marginTop: '80px',
          paddingTop:'16px',
          overflowY: 'auto',
          height: 'calc(100vh - 80px)',
        }}
      >
        
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '24px',
            marginTop: '90px',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              textAlign: 'center',
              zIndex: 10,
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 'bold',
                marginBottom: '8px',
                color: '#0F1D44',
              }}
            >
              Recognized Countries for
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontWeight: 'bold',
                marginBottom: '16px',
                color: '#0F1D44',
              }}
            >
              Specialist Pathway - Family Medicine
            </Typography>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                marginBottom: '20px',
                color: '#5E5F60',
              }}
            >
              International Medical Graduate Placement in Australia
            </Typography>
            <Stack
              paddingTop={2}
              direction="row"
              alignItems="center"
              spacing={3}
              sx={{
                justifyContent: 'center',
                marginTop: '16px',
              }}
            >
              <Button
                variant="contained"
                disableElevation
                sx={{
                  textTransform: 'none',
                  height: '50px',
                  width: '150px',
                }}
              >
                Register Now
              </Button>

              <AvatarGroup max={4} sx={{ justifyContent: 'center' }}>
                <Avatar alt="Remy Sharp" src={avatar1} />
                <Avatar alt="Travis Howard" src={avatar2} />
                <Avatar alt="Cindy Baker" src={avatar3} />
              </AvatarGroup>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  fontWeight: '500',
                  color: '#808080',
                }}
              >
                1532 Placements
              </Typography>
            </Stack>
          </Box>
          <img
            src={worldMap}
            alt="World Map"
            style={{
              width: '80%',
              maxWidth: '800px',
              height: 'auto',
              opacity: 0.5,
            }}
          />
        </Box>

        <Stack
          direction="column"
          spacing={4}
          sx={{
            marginLeft: '70px',
            marginRight: '70px',
          }}
        >
          <ExpeditedPathwayCards />
          <WhyWorkWithUs />
          <JobList />

        </Stack>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '90px', backgroundColor:"#706F6F0D" }}>
            <img
              src={ausiMap}
              alt="Australia Map"
              style={{
                width: '80%',
                maxWidth: '800px',
                height: 'auto',
                paddingTop:'40px',
                paddingBottom:'40px'
               
              }}
            />
          </Box>
          <Box
             sx={{
                display: 'flex',
                justifyContent: 'center',
                background: 'linear-gradient(to right, #0D1A3D, #074C5C)',
                alignItems: 'center', marginBottom:'80px'
                 }}
                    >
                        <img
                            src={WhatsAppLogo}
                            alt="Australia Map"
                             style={{width: '30%',maxWidth: '50px',height: 'auto',paddingTop: '10px',paddingBottom: '10px',}}/>
                             <Typography 
                             sx={{ color: 'white', marginLeft: '10px', fontSize: '16px' }} 
                             variant="body1">
                               International recruitment: +61 0452 66 99 11
                                </Typography>
            </Box>

            <Stack
          direction="column"
          spacing={4}
          sx={{
            marginLeft: '70px',
            marginRight: '70px',
          }}
        >
         <Register/>

         <Testimonials/>

         <FAQ/>

         <Register/>
        </Stack>
      </Box>
    </Box>
  );
}

export default App;
