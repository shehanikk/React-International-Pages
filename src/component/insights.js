import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import insi1 from '../assets/insi1.jpeg';
import insi2 from '../assets/insi2.jpeg';
import insi3 from '../assets/insi3.jpeg';

function Insights() {
  const insightsData = [
    {
      image: insi1,
      title: 'The Challenges of Medical Recruitment in Australia',
      description: 'This article will explore the key factors contributing to these health disparities and discuss strategies and action plans for closing the gap. By addressing the social determinants of health,...',
      link: '#',
    },
    {
      image: insi2,
      title: 'An Overview of the Different Career Paths Available to Psychiatrists',
      description: 'Explore the various career opportunities available for psychiatrists and the evolving landscape of mental health practices in today’s world.',
      link: '#',
    },
    {
      image: insi3,
      title: 'Building Your Speech Pathology Career in New Zealand',
      description: 'A guide for aspiring speech pathologists looking to establish their careers in New Zealand’s healthcare system, including tips and opportunities.',
      link: '#',
    },
  ];

  return (
    <Box sx={{ padding: '20px' }}>
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
        Insights
      </Typography>

      
      <Grid container spacing={5}>
        {insightsData.map((insight, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box
              component="img"
              src={insight.image}
              alt={insight.title}
              sx={{
                width: '100%',
                height: '250px', 
                objectFit: 'cover', 
                borderRadius: '8px', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                marginBottom: '16px', 
              }}
            />
            <Typography
              variant="h5"
              component="h3"
              sx={{
                color: '#191C24',
                marginBottom: '15px',
              }}
            >
              {insight.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#6F6C90',
                marginBottom: '10px',
              }}
            >
              {insight.description}
            </Typography>
            <Link
              href={insight.link}
              underline="none"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#1C9BDD',
                fontSize: '14px',
                marginTop: '30px',
                marginBottom:'80px'
              }}
            >
              Find out more <ArrowForwardIcon sx={{ fontSize: '18px', marginLeft: '5px' }} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Insights;
