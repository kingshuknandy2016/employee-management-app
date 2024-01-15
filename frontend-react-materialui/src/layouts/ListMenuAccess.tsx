import { ReactNode } from 'react';
import { Role } from '../services/token_service';
import {
  Dashboard,
  Home,
  Person,
  PhotoCamera,
  PostAdd,
  SettingsAccessibility,
} from '@mui/icons-material';

interface ListItemInterface {
  key: string;
  path: string;
  menuItemLabel: string;
  accessibleToRoles: Role[];
  icon: (sxIcon: any) => ReactNode;
}
export const listItemsYourApps: ListItemInterface[] = [
  {
    key: 'home',
    path: '/home',
    menuItemLabel: 'Homepage',
    accessibleToRoles: ['ADMIN', 'DEV', 'USER'],
    icon: (sxIcon: any) => <Home sx={sxIcon}></Home>,
  },
  {
    key: 'employee-dashboard',
    path: '/employee',
    menuItemLabel: 'Employee Dashboard',
    accessibleToRoles: ['ADMIN', 'DEV'],
    icon: (sxIcon: any) => <Dashboard sx={sxIcon}></Dashboard>,
  },
];

export const listItemsPersonal: ListItemInterface[] = [
  {
    key: 'Profile',
    path: '/profile',
    menuItemLabel: 'Profile',
    accessibleToRoles: ['ADMIN', 'DEV', 'USER'],
    icon: (sxIcon: any) => (
      <SettingsAccessibility sx={sxIcon}></SettingsAccessibility>
    ),
  },
  {
    key: 'Posts',
    path: '/posts',
    menuItemLabel: 'Posts',
    accessibleToRoles: ['ADMIN', 'DEV'],
    icon: (sxIcon: any) => <PostAdd sx={sxIcon}></PostAdd>,
  },
];
