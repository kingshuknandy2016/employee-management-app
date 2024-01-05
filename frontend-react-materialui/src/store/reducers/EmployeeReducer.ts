import { DummyData, Employee } from '../../pages/EmployeePage';

interface EmployeeGlobalState {
  employees: Employee[];
}

const EmployeeReducers = (
  state = { employees: DummyData } as EmployeeGlobalState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case 'ADD_EMP': {
    }
    default:
      return state;
  }
};

export default EmployeeReducers;
