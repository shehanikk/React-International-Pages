import React from 'react';
import { Card, CardContent, Typography, Stack, Box, Avatar, Button } from '@mui/material';
import nz from '../assets/nz.png'; 
import uk from '../assets/uk.png'; 
import ireland from '../assets/ireland.png'; 
import sin from '../assets/sin.png'; 
import southAfrica from '../assets/sAf.png'; 
import spain from '../assets/spain.png'; 
import sri from '../assets/sri.png'; 
import thai from '../assets/thai.png'; 
import usa from '../assets/usa.png'; 
import belgium from '../assets/belgi.png'; 
import canada from '../assets/can.png'; 
import hong from '../assets/hong.png'; 
import malaysia from '../assets/mala.png'; 
import malta from '../assets/malta.png'; 
import nether from '../assets/nL.png'; 
import phili from '../assets/pila.png'; 
import saudi from '../assets/saudi.png'; 
import sweden from '../assets/swee.png'; 
import denmark from '../assets/den.png'; 
import norway from '../assets/norway.png'; 


const ExpeditedPathwayCards = () => {
  return (
    <>
      <Card
        sx={{
          backgroundColor: 'white',
          marginBottom: '16px',
          padding: '16px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: 'bold', marginBottom: '30px', color: '#515869' }}
          >
            Expedited Pathway Countries
          </Typography>

          <Stack direction="row" spacing={8} justifyContent="center">
            {[
              { src: nz, label: 'New Zealand' },
              { src: uk, label: 'UK' },
              { src: ireland, label: 'Ireland' },
            ].map((country, index) => (
              <Box
                key={index}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <Avatar
                  alt={country.label}
                  src={country.src}
                  sx={{
                    width: 56,
                    height: 56,
                    marginBottom: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: '#5E5F60', textAlign: 'center' }}
                >
                  {country.label}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Typography
            variant="body1"
            sx={{
              marginTop: '24px',
              marginBottom: '16px',
              color: '#5E5F60',
              textAlign: 'center',
            }}
          >
            Elevate your career as a Family Medicine Specialist with Medfuture Australia, where
            international graduates are provided with outstanding opportunities to succeed in a
            vibrant healthcare setting. Australia is known for its excellent healthcare
            infrastructure, high quality of care, and diverse patient demographics, making it a
            prime location for skilled doctors seeking to advance their careers. Medfuture is
            dedicated to linking international family medicine specialists with roles that suit
            their expertise, ambitions, and future career plans.
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#0F1D44',
                textTransform: 'none',
                color: 'white',
                ':hover': { backgroundColor: '#0C1736' },
              }}
            >
              Read more
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: '#0F1D44',
                borderColor: '#0F1D44',
                textTransform: 'none',
                ':hover': { backgroundColor: '#F1F1F1', borderColor: '#0C1736' },
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Stack direction="row" spacing={4} justifyContent="center">
       
        <Card
            sx={{
                backgroundColor: 'white',
                width: '50%', 
                padding: '16px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                textAlign: 'center',
            }}
        >
            <CardContent>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 'bold', marginBottom: '30px', color: '#515869' }}
                >
                    RACGP Recognized Countries
                </Typography>

                <Stack direction="row" spacing={3} justifyContent="center">
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={sin}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Singapore
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={southAfrica}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        South Africa
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={spain}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Spain
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={sri}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Sri Lanka
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={nz}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        New Zealand
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={thai}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Thailand
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={usa}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        USA
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={belgium}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Belgium
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={uk}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        UK
                    </Typography>
                </Box>
            </Stack>
            <Stack direction="row" spacing={3} justifyContent="center" marginTop={3}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={canada}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Canada
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={hong}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                     Hong Kong
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={ireland}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Ireland
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={malaysia}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Malaysia
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={malta}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Malta
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={nether}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Netherlands
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={phili}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Philippines
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={saudi}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        South Arabia
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={sweden}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Sweden
                    </Typography>
                </Box>
            </Stack>
                <Typography
                    variant="body1"
                    sx={{ color: '#5E5F60', marginBottom: '16px', textAlign: 'center', marginTop:'20px' }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </Typography>

                <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#0F1D44',
                textTransform: 'none',
                color: 'white',
                ':hover': { backgroundColor: '#0C1736' },
              }}
            >
              Read more
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: '#0F1D44',
                borderColor: '#0F1D44',
                textTransform: 'none',
                ':hover': { backgroundColor: '#F1F1F1', borderColor: '#0C1736' },
              }}
            >
              Contact Us
            </Button>
          </Stack>
            </CardContent>
        </Card>

      
        <Card
            sx={{
                backgroundColor: 'white',
                width: '50%', 
                padding: '16px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                textAlign: 'center',
            }}
        >
            <CardContent>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 'bold', marginBottom: '30px', color: '#515869' }}
                >
                   ACRRM Recognized Countries
                </Typography>

                <Stack direction="row" spacing={2} justifyContent="left">
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={sin}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Singapore
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={southAfrica}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        South Africa
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={spain}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Spain
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={sri}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Sri Lanka
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={sweden}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Sweden
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={thai}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Thailand
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={nz}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        New Zealand
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={usa}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        USA
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={belgium}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Belgium
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={norway}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Norway
                    </Typography>
                </Box>
            </Stack>
            <Stack direction="row" spacing={2} justifyContent="left" marginTop={3}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={denmark}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Denmark
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={hong}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                     Hong Kong
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={ireland}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Ireland
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={malaysia}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Malaysia
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={malta}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Malta
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={nether}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Netherlands
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={phili}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Philippines
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={canada}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        Canada
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={uk}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        UK
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        alt="Country 1"
                        src={saudi}
                        sx={{
                            width: 40,
                            height: 40,
                            marginBottom: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        }}
                    />
                    <Typography  sx={{ color: '#5E5F60', textAlign: 'center', fontSize:'10px' }}>
                        South Arabia
                    </Typography>
                </Box>
                
            </Stack>
                <Typography
                    variant="body1"
                    sx={{ color: '#5E5F60', marginBottom: '16px', textAlign: 'center', marginTop:'20px' }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </Typography>

                <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#0F1D44',
                textTransform: 'none',
                color: 'white',
                ':hover': { backgroundColor: '#0C1736' },
              }}
            >
              Read more
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: '#0F1D44',
                borderColor: '#0F1D44',
                textTransform: 'none',
                ':hover': { backgroundColor: '#F1F1F1', borderColor: '#0C1736' },
              }}
            >
              Contact Us
            </Button>
          </Stack>
            </CardContent>
        </Card>
    </Stack>

    </>
  );
};

export default ExpeditedPathwayCards;
