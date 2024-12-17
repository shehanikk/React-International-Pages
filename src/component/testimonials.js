import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';
import testim from '../assets/testiIm.jpeg';

function Testimonials() {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: 'left',
          fontWeight: 'bold',
          color: '#191C24',
          paddingTop: '60px',
          paddingBottom: '40px',
        }}
      >
        Testimonials
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center',
          gap: 4, 
          padding: 4,
        }}
      >
        <Box sx={{ display: 'flex', gap: 3, flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
  <Box sx={{ display: 'flex', gap: 3 }}>
    <Card
      sx={{
        width: 280,
        textAlign: 'center',
        boxShadow: 3,
        borderRadius: 3,
        padding: 2,
        backgroundColor: '#f0f0f0',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px)',
          backgroundColor: 'white',
          boxShadow: 6,
        },
      }}
    >
      <Typography variant="h3" color="black">
        ❝
      </Typography>
      <Typography variant="h5" sx={{ color: '#FFD700' }}>
        ★★★★★
      </Typography>
      <Typography variant="body2" sx={{ marginY: 1, marginBottom: '20px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla
      </Typography>
      <Avatar src={avatar1} sx={{ width: 70, height: 70, margin: '10px auto' }} />
      <Typography variant="subtitle1" fontWeight="bold">
        Lora Smith
      </Typography>
    </Card>

    <Card
      sx={{
        width: 280,
        textAlign: 'center',
        boxShadow: 3,
        borderRadius: 3,
        padding: 2,
        backgroundColor: '#f0f0f0',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px)',
          backgroundColor: 'white',
          boxShadow: 6,
        },
      }}
    >
      <Typography variant="h3" color="black">
        ❝
      </Typography>
      <Typography variant="h5" sx={{ color: '#FFD700' }}>
        ★★★★★
      </Typography>
      <Typography variant="body2" sx={{ marginY: 1, marginBottom: '20px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla
      </Typography>
      <Avatar src={avatar3} sx={{ width: 70, height: 70, margin: '10px auto' }} />
      <Typography variant="subtitle1" fontWeight="bold">
        Lora Smith
      </Typography>
    </Card>

    <Card
      sx={{
        width: 280,
        textAlign: 'center',
        boxShadow: 3,
        borderRadius: 3,
        padding: 2,
        backgroundColor: '#f0f0f0',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px)',
          backgroundColor: 'white',
          boxShadow: 6,
        },
      }}
    >
      <Typography variant="h3" color="black">
        ❝
      </Typography>
      <Typography variant="h5" sx={{ color: '#FFD700' }}>
        ★★★★★
      </Typography>
      <Typography variant="body2" sx={{ marginY: 1, marginBottom: '20px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla
      </Typography>
      <Avatar src={avatar2} sx={{ width: 70, height: 70, margin: '10px auto' }} />
      <Typography variant="subtitle1" fontWeight="bold">
        Lora Smith
      </Typography>
    </Card>
  </Box>

    <Typography
    sx={{
      marginTop: 2,
      color:'#1C9BDD',
      textAlign: 'center',
      fontSize: '1rem',
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
      },
    }}
  >
    View more...
  </Typography>
</Box>


        
        <Box
          sx={{
            flex: 0.5,
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            width: '90%',
          }}
        >
          <img
            src={testim}
            alt="Doctor"
            style={{ width: '90%', height: 'auto', objectFit: 'cover' }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 20,
              width: '90%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(13, 26, 61, 0.8))',
              zIndex: 1,
            }}
          />
                  
                   <Box
            sx={{
              position: 'absolute',
              bottom: '8%',
              left: '10%',
              right: '10%',
              zIndex: 2,
              color: 'white',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column', 
              alignItems: 'center',
            }}
          >
            <Typography
              variant="p"
              sx={{
                marginBottom: 2,
                fontSize: '1.2rem', 
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '##20A0E2',
                color: 'white',
                paddingX: 3,
                paddingY: 1.5,
                textTransform: 'none',
                width: '250px',
                '&:hover': {
                  backgroundColor: '##20A0E2',
                },
              }}
            >
              Register
            </Button>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}

export default Testimonials;
