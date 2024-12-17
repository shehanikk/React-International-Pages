import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Pagination from '@mui/material/Pagination';

function JobList() {
    const regions = [
        'Australia',
        'Australian Capital Territory',
        'New South Wales',
        'Northern Territory',
        'Queensland',
        'South Australia',
        'Tasmania',
        'Victoria',
        'Western Australia',
    ];

    const [selectedRegion, setSelectedRegion] = useState('South Australia');
    const [checkedStates, setCheckedStates] = useState({
        mm1: true,
        mm2: false,
        mm3: false,
        mm4: false,
        mm5: false,
        mm6: false,
        mm7: false,
    });

    const handleButtonClick = (region) => {
        setSelectedRegion(region);
    };

    const handleCheckboxChange = (key) => {
        setCheckedStates((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const jobData = [
        {
            title: 'General Practitioner (VR) – $170 per hour – Mixed',
        },
        {
            title: 'VR General Practitioner – $175p/h or 70% Mixed',
        },
        {
            title: 'Occupational Therapist job in Williams Landing',
        },
        {
            title: 'VR General Practitioner ',
        },
        {
            title: 'General Practitioner',
        },
    ];

    return (
        <Box paddingTop={15}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '5.5px',
                    flexWrap: 'wrap',
                }}
            >
                {regions.map((region, index) => (
                    <Button
                        key={index}
                        variant="outlined"
                        sx={{
                            width: '140px',
                            textTransform: 'none',
                            borderColor: selectedRegion === region ? '#1C9BDD' : 'gray',
                            color: selectedRegion === region ? 'white' : 'gray',
                            backgroundColor: selectedRegion === region ? '#1C9BDD' : 'transparent',
                            '&:hover': {
                                borderColor: selectedRegion === region ? '#1C9BDD' : 'gray',
                                backgroundColor: selectedRegion === region ? '#1C9BDD' : 'transparent',
                            },
                        }}
                        onClick={() => handleButtonClick(region)}
                    >
                        {region}
                    </Button>
                ))}
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '40px',
                    gap: '100px',
                }}
            >
                <Box>
                    {[ 
                        { key: 'mm1', label: 'MM 1: Metropolitan Areas' },
                        { key: 'mm2', label: 'MM 2: Regional Centres' },
                        { key: 'mm3', label: 'MM 3: Large Rural Towns' },
                        { key: 'mm4', label: 'MM 4: Medium Rural Towns' },
                        { key: 'mm5', label: 'MM 5: Small Rural Towns' },
                        { key: 'mm6', label: 'MM 6: Remote Communities' },
                        { key: 'mm7', label: 'MM 7: Very Remote Communities' },
                    ].map(({ key, label }) => (
                        <Box
                            key={key}
                            sx={{
                                marginTop: '10px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Checkbox
                                checked={checkedStates[key]}
                                onChange={() => handleCheckboxChange(key)}
                                sx={{
                                    color: 'gray',
                                    '&.Mui-checked': {
                                        color: '#1C9BDD',
                                    },
                                }}
                            />
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: checkedStates[key] ? 'bold' : 'normal',
                                    color: '#5E5E5E',
                                }}
                            >
                                {label}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', }}>
                    {jobData.map((job, index) => (
                        <Box
                            key={index}
                            sx={{
                                flex: 1,
                                border: '3px solid #F2F2F2',
                                borderRadius: '8px',
                                paddingLeft:'20px',
                                paddingRight:'20px',
                                paddingTop:'20px',
                                paddingBottom: '80px',
                                position: 'relative',
                                width:'1000px'
                            }}
                        >
                            <Box sx={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '10px' }}>
                                <FavoriteIcon sx={{ color: 'gray', cursor: 'pointer' }} />
                                <ShareIcon sx={{ color: 'gray', cursor: 'pointer' }} />
                            </Box>

                            <Typography variant="p" sx={{ marginBottom: '12px', color: 'gray' }}>
                                General Practitioner
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#14171F',
                                    fontWeight: 'bold',
                                    paddingTop: '15px',
                                    paddingBottom: '15px',
                                }}
                            >
                                {job.title}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'gray', paddingBottom: '30px' }}>
                                <PlaceOutlinedIcon sx={{ marginRight: '8px', color: '#1C9BDD' }} />
                                <Typography variant="p">Port Macquarie, New South Wales</Typography>
                            </Box>
                            <Stack direction="row" spacing={2} paddingBottom={3}>
                                <Chip label="Permanent" sx={{ borderRadius: '5px', fontSize: '15px', color: 'gray' }} />
                                <Chip label="Full Time" sx={{ borderRadius: '5px', fontSize: '15px', color: 'gray' }} />
                                <Chip label="$93,600 - $114,400 per Annum" sx={{ borderRadius: '5px', fontSize: '15px', color: 'gray' }} />
                            </Stack>
                            <Typography variant="p" sx={{ marginBottom: '30px', marginTop: '20px', paddingBottom:'20px' }}>
                            Medfuture is actively seeking a Paediatric Occupational Therapist in Williams Landing, Australia for a conveniently <br/>  located practice in a metropolitan area. You'll be working with a group of experts..
                            </Typography>

                            <Box sx={{ position: 'absolute', bottom: '20px', left: '20px', color: 'gray' }}>
                                <Typography variant="p">Posted 1 day ago</Typography>
                            </Box>

                            <Box sx={{ position: 'absolute', bottom: '20px', right: '20px' }}>
                                <Button
                                    variant="contained"
                                    sx={{ backgroundColor: '#1C9BDD', color: '#FFFFFF', textTransform: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}
                                >
                                    View Job
                                    <ArrowRightAltIcon />
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

         
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                <Stack spacing={2}>
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>
            </Box>
        </Box>
    );
}

export default JobList;
