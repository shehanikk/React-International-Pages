import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Grid from '@mui/material/Grid';

function FAQ() {
  const [expandedPanels, setExpandedPanels] = useState([]);

  const handleChange = (panel) => () => {
    setExpandedPanels((prevExpanded) =>
      prevExpanded.includes(panel)
        ? prevExpanded.filter((p) => p !== panel)
        : [...prevExpanded, panel] 
    );
  };

  
  const faqData = [
    { id: 1, question: 'What are the working conditions for doctors?', answer: 'Doctors are medical professionals who are trained and licensed to diagnose and treat illnesses, injuries, and medical conditions in individuals. They play a vital role in promoting and maintaining the health and well-being of their patients. ' },
    { id: 2, question: 'What are the job prospects for doctors?', answer: 'Doctors are medical professionals who are trained and licensed to diagnose and treat illnesses, injuries, and medical conditions in individuals. They play a vital role in promoting and maintaining the health and well-being of their patients. ' },
    { id: 3, question: 'What is the typical work schedule for doctors?', answer: 'Doctors often work long hours, including nights, weekends, and on-call shifts.' },
    { id: 4, question: 'What is the salary range for doctors?', answer: 'The salary range for doctors varies by specialty and location but is generally competitive.' },
    { id: 5, question: 'What skills are required to be a successful doctor?', answer: 'Doctors need strong communication skills, empathy, problem-solving abilities, and medical expertise.' },
    { id: 6, question: 'What is the job outlook for doctors in the future?', answer: 'The demand for doctors is expected to grow due to an aging population and advancements in medical care.' },
  ];

  return (
    <Box>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#191C24',
          paddingTop: '60px',
          paddingBottom: '40px',
        }}
      >
        FAQ
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        
        <Grid item xs={12} md={6}>
          {faqData.slice(0, 3).map((faq) => (
            <Accordion
              key={`panel${faq.id}`}
              sx={{
                minHeight: '90px',
                width: '100%',
                padding: '16px',
                marginBottom: '16px',
              }}
              expanded={expandedPanels.includes(`panel${faq.id}`)}
              onChange={handleChange(`panel${faq.id}`)}
            >
              <AccordionSummary
                expandIcon={
                  <Box
                    sx={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '4px',
                      backgroundColor: expandedPanels.includes(`panel${faq.id}`) ? '#1C9BDD' : '#EAF5FF',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: expandedPanels.includes(`panel${faq.id}`) ? '#fff' : '#1C9BDD',
                      fontWeight: 'bold',
                      fontSize: '20px',
                    }}
                  >
                    {expandedPanels.includes(`panel${faq.id}`) ? '-' : '+'}
                  </Box>
                }
                aria-controls={`panel${faq.id}-content`}
                id={`panel${faq.id}-header`}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#6F6C90' }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>

        
        <Grid item xs={12} md={6}>
          {faqData.slice(3, 6).map((faq) => (
            <Accordion
              key={`panel${faq.id}`}
              sx={{
                minHeight: '90px',
                width: '100%',
                padding: '16px',
                marginBottom: '16px',
              }}
              expanded={expandedPanels.includes(`panel${faq.id}`)}
              onChange={handleChange(`panel${faq.id}`)}
            >
              <AccordionSummary
                expandIcon={
                  <Box
                    sx={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '4px',
                      backgroundColor: expandedPanels.includes(`panel${faq.id}`) ? '#1C9BDD' : '#EAF5FF',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: expandedPanels.includes(`panel${faq.id}`) ? '#fff' : '#1C9BDD',
                      fontWeight: 'bold',
                      fontSize: '20px',
                    }}
                  >
                    {expandedPanels.includes(`panel${faq.id}`) ? '-' : '+'}
                  </Box>
                }
                aria-controls={`panel${faq.id}-content`}
                id={`panel${faq.id}-header`}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#6F6C90' }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default FAQ;
