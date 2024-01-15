/* eslint-disable react/no-unescaped-entities */
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Typography,
  alpha,
} from '@mui/material';
import cover from '../assets/employeeManagement.png';
import theme from '../Theme';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Google } from '@mui/icons-material';
import { useState } from 'react';
// import { mimicBackendSignInAPI } from '../utils/backendApiMock';
import { BrowserStorageService } from '../services/browser_storage_service';
import { useAppDispatch } from '../store/hooks';
import { LoggedUser, signIn } from '../store/slice/auth_slice';
import { useNavigate } from 'react-router-dom';
import { mimicBackendSignInAPI } from '../services/token_service';
import { useAuth } from '../hooks/useAuth';
import axios from 'axios';
import { APIService } from '../services/api_service';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('email') as string;
    const password = data.get('password') as string;

    // //---Mimic Backend Call-----//
    // const authDetails = mimicBackendSignInAPI(username, password);
    // if (authDetails.statusCode === 200 && authDetails.auth_token) {
    //   BrowserStorageService.put('token', authDetails.auth_token, 'auth');
    //   dispatch(signIn(authDetails.userDetails as LoggedUser));
    //   navigate('/');
    // } else {
    // }
    APIService.post('auth', 'login', {
      username,
      password,
    })
      .then((data) => {
        const responseData = data as any as {
          message: string;
          user_details: {
            id: number;
            username: string;
            role: string;
          };
          auth_token: string;
        };
        if (responseData.auth_token) {
          BrowserStorageService.put('token', responseData.auth_token, 'auth');
          dispatch(signIn(responseData.user_details as LoggedUser));
          navigate('/');
        } else {
          console.log(
            `Error Occurred. ${JSON.stringify({
              message: responseData.message,
            })}`
          );
        }
      })
      .catch((err) => {
        console.log(`${JSON.stringify(err)}`);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item sm={6} xs={2}>
          <Box sx={{ height: '100vh', backgroundImage: `url(${cover})` }}></Box>
        </Grid>
        <Grid item sm={6} xs={10}>
          <Box
            // component="form"
            // autoComplete="off"
            sx={{
              padding: theme.spacing(2),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '300px',
            }}
          >
            <Avatar
              sx={{
                margin: 1,
                bgcolor: alpha(theme.palette.primary.dark, 0.8),
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              sx={{ textAlign: 'center' }}
              component="h1"
              variant="h5"
            >
              Login
            </Typography>
            <Box
              component={'form'}
              autoComplete={'off'}
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                width: '60%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                rows={5}
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                sx={{ borderRadius: '60%' }}
                // value={username}
                // onChange={onChangeHandler}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                // value={password}
                //onChange={onChangeHandler}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  marginTop: 3,
                  marginBottom: 2,
                  width: '60%',
                  backgroundColor: '#7084e8',
                  borderRadius: '20px',
                  '&:hover': {
                    backgroundColor: '#3f5df3',
                  },
                }}
              >
                Sign In
              </Button>

              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Divider
                  variant="fullWidth"
                  sx={{
                    backgroundColor: '#7084e8',
                    height: '1px',
                    width: '35%',
                  }}
                ></Divider>
                <Typography sx={{ width: '30%', textAlign: 'center' }}>
                  Or login with
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{
                    backgroundColor: '#7084e8',
                    height: '1px',
                    width: '35%',
                  }}
                ></Divider>
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  marginTop: 3,
                  marginBottom: 2,
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  color: '#7084e8',
                  '&:hover': {
                    backgroundColor: '#dfe3f7',
                    color: '#959dbc',
                  },
                }}
              >
                <Google></Google>
                <Typography
                  sx={{
                    marginLeft: '5px',
                  }}
                  variant="button"
                >
                  Login With Google
                </Typography>
              </Button>
              <Typography>
                Don't have an account?{' '}
                <Link sx={{ textDecoration: 'none' }} href="#">
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default LoginPage;
