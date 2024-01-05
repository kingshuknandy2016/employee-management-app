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
import { useReduxSelector } from '../hooks/useReduxSelector';
import {
  listItems,
  listItemsPersonal,
  listItemsYourApps,
} from './ListMenuAccess';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(7),
  //   backgroundColor: alpha(theme.palette.primary.light, 0.2),
  backgroundColor: 'white',
  height: '100vh',
  position: 'sticky',
  boxShadow: '1px 2px 2px 2px rgba(0, 0, 0, 0.2)',
}));

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

export const sxIcon = {
  marginRight: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem',
  },
  color: 'primary.dark',
};

const SideBarRoleBased = () => {
  const auth = useReduxSelector('auth');
  const role = auth.user.role;
  return (
    <StyledContainer sx={{}}>
      <StyledTypographyHead>Your Apps</StyledTypographyHead>
      <List>
        {listItemsYourApps
          .filter((item) => item.accessibleToRoles.includes(role))
          .map((item) => (
            <StyledListItem key={item.key}>
              <ListItemButton component={Link} to={item.path}>
                {item.icon(sxIcon)}
                <StyledTypography>{item.menuItemLabel}</StyledTypography>
              </ListItemButton>
            </StyledListItem>
          ))}
      </List>
      <StyledTypographyHead sx={{ marginTop: '1rem' }}>
        Personal
      </StyledTypographyHead>
      <List>
        {listItemsPersonal
          .filter((item) => item.accessibleToRoles.includes(role))
          .map((item) => (
            <StyledListItem key={item.key}>
              <ListItemButton component={Link} to={item.path}>
                {item.icon(sxIcon)}
                <StyledTypography>{item.menuItemLabel}</StyledTypography>
              </ListItemButton>
            </StyledListItem>
          ))}
      </List>
    </StyledContainer>
  );
};

export default SideBarRoleBased;
