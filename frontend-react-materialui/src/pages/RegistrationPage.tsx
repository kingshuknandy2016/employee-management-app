/* eslint-disable react/no-unescaped-entities */
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Link,
  MenuItem,
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

const RegistrationPage = () => {
  const [department, setDepartment] = useState('');

  const handleChange = (event: any) => {
    setDepartment(event.target.value as string);
  };

  return (
    <ThemeProvider theme={theme}>
      {' '}
      <Grid container>
        <Grid item sm={6} xs={2}>
          <Box sx={{ height: '100vh', backgroundImage: `url(${cover})` }}></Box>
        </Grid>
        <Grid item sm={6} xs={10}>
          <Box
            component="form"
            autoComplete="off"
            sx={{
              padding: theme.spacing(2),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '40px',
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
              Register
            </Typography>
            <Box
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
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                type="text"
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                type="email"
                rows={5}
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                sx={{ borderRadius: '60%' }}
                // value={username}
                // onChange={onChangeHandler}
              />
              <TextField
                select
                margin="normal"
                required
                fullWidth
                id="department"
                label="Department"
                name="department"
                autoComplete="department"
                rows={5}
                sx={{ borderRadius: '60%' }}
                SelectProps={{
                  multiple: false,
                  value: department,
                  onChange: handleChange,
                }}
                // value={username}
                // onChange={onChangeHandler}
              >
                <MenuItem value={'Admin'}>Admin</MenuItem>
                <MenuItem value={'Software'}>Software</MenuItem>
                <MenuItem value={'Hardware'}>Hardware</MenuItem>
                <MenuItem value={'Marketing'}>Marketing</MenuItem>
              </TextField>
              {/* <FormControl fullWidth>
                <InputLabel id="department-id">Department</InputLabel>
                <Select
                  required
                  labelId="department-id"
                  id="department"
                  value={department}
                  label="Department"
                  onChange={handleChange}
                  // sx={{ marginTop: '0.5rem' }}
                >
                  <MenuItem value={'Admin'}>Admin</MenuItem>
                  <MenuItem value={'Software'}>Software</MenuItem>
                  <MenuItem value={'Hardware'}>Hardware</MenuItem>
                  <MenuItem value={'Marketing'}>Marketing</MenuItem>
                </Select>
              </FormControl> */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="contact-number"
                label="Contact Number"
                name="contact-number"
                autoComplete="contact-number"
                rows={5}
                type="number"
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
                id="hire-date"
                label="Hire Date"
                name="hire-date"
                autoComplete="hire-date"
                rows={5}
                type="date"
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                sx={{ borderRadius: '60%' }}
                InputLabelProps={{ shrink: true, disableAnimation: true }}
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
                id="password1"
                autoComplete="current-password"
                // value={password}
                // onChange={onChangeHandler}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirm-password"
                label="Confirm Password"
                type="password"
                id="password2"
                autoComplete="confirm-password"
                // value={password}
                // onChange={onChangeHandler}
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
                Sign Up
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
                  Or Register with
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
                Already have an account?{' '}
                <Link sx={{ textDecoration: 'none' }} href="#">
                  Sign In
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default RegistrationPage;
