import { AccountCircle } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

interface NavbarProps {
  name: string;
}
const NavBar = ({ name }: NavbarProps) => {
  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          flex: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography>Welcome {`${name}`} </Typography>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          sx={{ color: 'white' }}
        >
          <AccountCircle />
          {/* <Avatar alt="Kingshuk" src={image1} /> */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
