import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import { Typography, Box, Stack, Button } from '@mui/material';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  const onRegistration = (event) => {
    history.push('/registration');
  };

  return (
    <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: 0 }}>
      <Stack spacing={2} alignItems='center' justifyContent='center'>
        
        <Typography variant='h4' align='center'>
          Welcome
        </Typography>
        
        <Typography variant='h5' align='center'>
          to <br /> 'logo here'
        </Typography >
        
        <Button
          variant='contained'
          sx={{ width: '100px' }}
          onClick={onLogin}
        >
          Log In
        </Button>
        <Button
          variant='contained'
          sx={{ bgcolor: 'success.main', color: 'secondary.light', width: '100px' }}
          onClick={onRegistration}
        >
          Sign Up
        </Button>
      </Stack>
    </Box>
  )
}

export default LandingPage;
