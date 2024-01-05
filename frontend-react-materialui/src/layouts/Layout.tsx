import { Grid } from '@mui/material';
import NavBar from './Navbar';
import SideBar from './Sidebar';
import ApplicationRouter from '../routes/Routes';
import SideBarRoleBased from './SidebarRoleBased';

const Layout = () => {
  return (
    <>
      <NavBar name={'Kingshuk Nandy'}></NavBar>
      <Grid container>
        <Grid item sm={3}>
          <SideBarRoleBased></SideBarRoleBased>
          {/* <SideBar></SideBar> */}
        </Grid>
        <Grid item sm={9}>
          <ApplicationRouter></ApplicationRouter>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
