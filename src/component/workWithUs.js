import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import first from '../assets/1im.png';
import second from '../assets/2im.png';
import third from '../assets/3im.png';
import fourth from '../assets/4im.png'; // New image
import fifth from '../assets/5im.png';  // New image
import sixth from '../assets/6im.png';  // New image

function WhyWorkWithUs() {
    const cardData = [
        {
            imgSrc: first,
            title: 'Personalized Consultations',
        },
        {
            imgSrc: second,
            title: 'Dedicated Recruitment Consultant',
        },
        {
            imgSrc: third,
            title: 'Dedicated Documentation Specialist',
        },
    ];

    const cardData2 = [
        {
            imgSrc: fourth,
            title: 'Complete Career Guidance',
        },
        {
            imgSrc: fifth,
            title: '100+ Presecured IMG Placement Agreement',
        },
        {
            imgSrc: sixth,
            title: 'Family Settlement Guidance',
        },
    ];

    return (
        <Box>
            {/* Heading */}
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
                Why work with us
            </Typography>

            {/* First Row of Cards */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '30px',
                    marginTop: '16px',
                }}
            >
                {cardData.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            flex: 1,
                            padding: '16px',
                            backgroundColor: '#FAFAFA',
                            borderRadius: '5px',
                            height: '90px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                paddingTop: '10px',
                                paddingBottom: '10px',
                            }}
                        >
                            {/* Image */}
                            <img
                                src={item.imgSrc}
                                alt={item.title}
                                height={35}
                            />

                            {/* Text */}
                            <Typography
                                variant="p"
                                component="p"
                                sx={{
                                    color: '#0F1D44',
                                    textAlign: 'left',
                                }}
                            >
                                {item.title}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Second Row of Cards */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '30px',
                    marginTop: '16px',
                }}
            >
                {cardData2.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            flex: 1,
                            padding: '16px',
                            backgroundColor: '#FAFAFA',
                            borderRadius: '5px',
                            height: '90px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                paddingTop: '10px',
                                paddingBottom: '10px',
                            }}
                        >
                            {/* Image */}
                            <img
                                src={item.imgSrc}
                                alt={item.title}
                                height={35}
                            />

                            {/* Text */}
                            <Typography
                                variant="p"
                                component="p"
                                sx={{
                                    color: '#0F1D44',
                                    textAlign: 'left',
                                }}
                            >
                                {item.title}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default WhyWorkWithUs;
