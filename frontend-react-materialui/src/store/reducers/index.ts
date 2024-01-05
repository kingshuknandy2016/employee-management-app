import { combineReducers } from '@reduxjs/toolkit';
import EmployeeReducers from './EmployeeReducer';

const rootReducer = combineReducers({ employee: EmployeeReducers });
export default rootReducer;
