import { Grid } from '@mui/material';
import NavBar from './Navbar';
import SideBarRoleBased from './SidebarRoleBased';
import { ReactNode } from 'react';

export interface LayoutProps {
  children?: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar name={'Kingshuk Nandy'}></NavBar>
      <Grid container>
        <Grid item sm={3}>
          <SideBarRoleBased></SideBarRoleBased>
          {/* <SideBar></SideBar> */}
        </Grid>
        <Grid item sm={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
