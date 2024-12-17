import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

function Register() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 800,
          width: '100%',
          boxShadow: 3,
          borderRadius: 2,
          padding: 2,
          position: 'relative', // Ensures proper positioning for the button
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{ marginBottom: 3, textAlign: 'center' }}
          >
            Register and Reach Us
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              label="First Name"
              variant="outlined"
              sx={{ marginRight: 2, width: '48%' }}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              sx={{ width: '48%' }}
            />
          </Box>

          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}
          >
            <TextField
              label="Number"
              variant="outlined"
              sx={{ marginRight: 2, width: '48%' }}
            />
            <TextField
              label="Email"
              variant="outlined"
              sx={{ width: '48%' }}
            />
          </Box>

          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}
          >
            <FormControl variant="outlined" sx={{ marginRight: 2, width: '48%' }}>
              <InputLabel id="country-select-label">Country</InputLabel>
              <Select
                labelId="country-select-label"
                id="country-select"
                label="Country"
              >
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="Australia">Australia</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ width: '48%' }}>
              <InputLabel id="state-select-label">State</InputLabel>
              <Select
                labelId="state-select-label"
                id="state-select"
                label="State"
              >
                <MenuItem value="California">California</MenuItem>
                <MenuItem value="New York">New York</MenuItem>
                <MenuItem value="Texas">Texas</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}
          >
            <TextField
              label="Specialty"
              variant="outlined"
              sx={{ marginRight: 2, width: '48%' }}
            />
            <TextField
              label="Seniority"
              variant="outlined"
              sx={{ width: '48%' }}
            />
          </Box>

          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}
          >
            <FormControl variant="outlined" sx={{ marginRight: 2, width: '48%' }}>
              <InputLabel id="registration-type-label">Registration Type</InputLabel>
              <Select
                labelId="registration-type-label"
                id="registration-type"
                label="Registration Type"
              >
                <MenuItem value="Individual">Individual</MenuItem>
                <MenuItem value="Corporate">Corporate</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ width: '48%' }}>
              <InputLabel id="professional-status-label">Professional Status</InputLabel>
              <Select
                labelId="professional-status-label"
                id="professional-status"
                label="Professional Status"
              >
                <MenuItem value="Employed">Employed</MenuItem>
                <MenuItem value="Unemployed">Unemployed</MenuItem>
                <MenuItem value="Student">Student</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}
          >
            <TextField
              label="Upload Your CV Here"
              variant="outlined"
              sx={{ marginRight: 2, width: '48%' }}
              multiline
              rows={3}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton component="label">
                      <CloudUploadIcon />
                      <input hidden type="file" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Message"
              variant="outlined"
              sx={{ width: '48%' }}
              multiline
              rows={3}
            />
          </Box>

          {/* Checkboxes */}
          <Box sx={{ marginTop: '20px' }}>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography variant="body2">
                  I Agree to the{' '}
                  <Link href="#" underline="hover">
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link href="#" underline="hover">
                    Privacy Policy
                  </Link>
                </Typography>
              }
            />
          </Box>
          <FormControlLabel
            control={<Checkbox />}
            label="Subscribe for Job Alert"
            sx={{ marginTop: 1 }}
          />
        </CardContent>

        <Button
          variant="contained"
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            paddingX: 3,
            paddingY: 1,
            textTransform:'none',
            backgroundColor:'#20A0E2',
            color:'white'
          }}
        >
          Register Now
        </Button>
      </Card>
    </Box>
  );
}

export default Register;
