import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import theme from '../Theme';
import {
  Dashboard,
  Home,
  Person,
  PhotoCamera,
  PostAdd,
  SettingsAccessibility,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(7),
  //   backgroundColor: alpha(theme.palette.primary.light, 0.2),
  backgroundColor: 'white',
  height: '100vh',
  position: 'sticky',
  boxShadow: '1px 2px 2px 2px rgba(0, 0, 0, 0.2)',
}));
// const StyledItemBox = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   marginBottom: theme.spacing(4),
//   marginLeft: theme.spacing(3),
//   [theme.breakpoints.down('sm')]: {
//     marginBottom: theme.spacing(3),
//     cursor: 'pointer',
//   },
// }));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(3),
    cursor: 'pointer',
  },
}));

const StyledTypographyHead = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '1.15rem',
  marginLeft: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  marginBottom: '1rem',
}));
const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '1.15rem',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  marginLeft: '.5rem',
}));

const sxIcon = {
  marginRight: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem',
  },
  color: 'primary.dark',
};

const SideBar = () => {
  return (
    <StyledContainer sx={{}}>
      <StyledTypographyHead>Your Apps</StyledTypographyHead>
      <List>
        <StyledListItem key={'home'}>
          <ListItemButton component={Link} to="/home">
            {/* <StyledItemBox> */}
            <Home sx={sxIcon}></Home>
            <StyledTypography>Homepage</StyledTypography>
            {/* </StyledItemBox> */}
          </ListItemButton>
        </StyledListItem>
        <StyledListItem key={'employee-dashboard'}>
          {/* <Link to={`/employee`}> */}
          <ListItemButton component={Link} to={'/employee'}>
            {/* <StyledItemBox> */}
            <Dashboard sx={sxIcon}></Dashboard>
            <StyledTypography>Employee Dashboard</StyledTypography>
            {/* </StyledItemBox> */}
          </ListItemButton>
          {/* </Link> */}
        </StyledListItem>
      </List>
      <StyledTypographyHead sx={{ marginTop: '1rem' }}>
        Personal
      </StyledTypographyHead>
      <List>
        <StyledListItem key={'Profile'}>
          <ListItemButton component={Link} to={'/profile'}>
            {/* <StyledItemBox> */}
            <SettingsAccessibility sx={sxIcon}></SettingsAccessibility>
            <StyledTypography>Profile</StyledTypography>
            {/* </StyledItemBox> */}
          </ListItemButton>
        </StyledListItem>
        <StyledListItem key={'Posts'}>
          <ListItemButton component={Link} to={'/posts'}>
            {/* <StyledItemBox> */}
            <PostAdd sx={sxIcon}></PostAdd>
            <StyledTypography>Posts</StyledTypography>
            {/* </StyledItemBox> */}
          </ListItemButton>
        </StyledListItem>
      </List>
      {/* <StyledItemBox>
        <Home sx={sxIcon}></Home>
        <StyledTypography>Homepage</StyledTypography>
      </StyledItemBox>
      <StyledItemBox>
        <Person sx={sxIcon}></Person>
        <StyledTypography>Friends</StyledTypography>
      </StyledItemBox>
      <StyledTypographyHead>Your Company Apps</StyledTypographyHead>
      <StyledItemBox>
        <PhotoCamera sx={sxIcon}></PhotoCamera>
        <StyledTypography>Photo Camera</StyledTypography>
      </StyledItemBox> */}
      {/* <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 360,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar></Toolbar>
        <Divider></Divider>
        <StyledTypographyHead>Your Apps</StyledTypographyHead>
        <List>
          <ListItem>
            <ListItemButton>
              <StyledItemBox>
                <Home sx={sxIcon}></Home>
                <StyledTypography>Homepage</StyledTypography>
              </StyledItemBox>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer> */}
    </StyledContainer>
  );
};

export default SideBar;
