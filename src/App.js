import './App.css';
import DrawerAppBar from './component/dashbord';
import SecondNavBar from './component/secondNav';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PublicIcon from '@mui/icons-material/Public';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <SecondNavBar />

      <Box
        sx={{
          position: 'fixed',
          right: 0,
          bottom: '30%',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
       
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#146F99',
            color: 'white',
            minWidth: '50px',
            height: '60px',
            borderRadius: 0,
            flexDirection: 'column',
            '&:hover': { backgroundColor: '#005B9A' },
          }}
        >
          <PhoneIcon fontSize="small" />
          <Typography
            variant="caption"
            sx={{
              fontSize: '8px',
              marginTop: '2px',
              color: 'white',
              textTransform: 'none',
            }}
          >
            Hotline
          </Typography>
        </Button>

        
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#198FC7',
            color: 'white',
            minWidth: '50px',
            height: '60px',
            borderRadius: 0,
            flexDirection: 'column',
            '&:hover': { backgroundColor: '#005B9A' },
          }}
        >
          <EmailIcon fontSize="small" />
          <Typography
            variant="caption"
            sx={{
              fontSize: '8px',
              marginTop: '2px',
              color: 'white',
              textTransform: 'none',
            }}
          >
            Email
          </Typography>
        </Button>

        
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2FAAE4',
            color: 'white',
            minWidth: '50px',
            height: '60px',
            borderRadius: 0,
            flexDirection: 'column',
            '&:hover': { backgroundColor: '#005B9A' },
          }}
        >
          <WhatsAppIcon fontSize="small" />
          <Typography
            variant="caption"
            sx={{
              fontSize: '8px',
              marginTop: '2px',
              color: 'white',
              textTransform: 'none',
            }}
          >
            WhatsApp
          </Typography>
        </Button>

        
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#5CBDEA',
            color: 'white',
            minWidth: '50px',
            height: '60px',
            borderRadius: 0,
            flexDirection: 'column',
            '&:hover': { backgroundColor: '#005B9A' },
          }}
        >
          <PublicIcon fontSize="small" />
          <Typography
            variant="caption"
            sx={{
              fontSize: '8px',
              marginTop: '2px',
              color: 'white',
              textTransform: 'none',
            }}
          >
            International
          </Typography>
        </Button>
      </Box>

      
        <Box
         sx={{
          position: 'fixed',
          right: 0,
          bottom: '24%',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
        }}
        >
         
            <CancelTwoToneIcon  variant="contained" fontSize="small"  sx={{
             color: 'gray',
             minWidth: '30px',
             height: '30px',
             
           }} />
          
        </Box>

       
        <Box
          sx={{
            position: 'fixed',
          right: 0,
          bottom: '14%',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
            backgroundColor: '#0D1A3D',
            color: 'white',
            padding: '20px 16px',
            borderRadius: '8px',
            boxShadow: '0px 2px 5px rgba(0,0,0,0.2)',
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'center' }}
          >
            Hi! How can we help?
          </Typography>
        </Box>

        
        <Box
          sx={{
            position: 'fixed',
          right: 0,
          bottom: '3%',
          zIndex: 1000,
          flexDirection: 'column',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px',
            borderRadius: '50%',
            
          }}
        >
          <Badge
            color="success"
            overlap="circular"
            variant="dot"
            sx={{
              '& .MuiBadge-badge': {
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#28A745',
              },
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#0D1A3D',
                color: '#fffff',
                borderRadius: '50%',
                minWidth: '50px',
                height: '50px',
               
              }}
            >
              <ChatBubbleIcon fontSize="small" />
            </Button>
          </Badge>
        </Box>
    </div>
  );
}

export default App;
