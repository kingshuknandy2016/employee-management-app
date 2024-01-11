import {
  Autocomplete,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';
import theme from '../Theme';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Search } from '@mui/icons-material';
import { useState } from 'react';
import WithLayout from '../hoc/hoc_withLayout';
import { employeeDummyData } from '../mock_data/employeeData';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  height: '100vh',
  position: 'sticky',
}));

const TableHeaderCellStyle = styled(TableCell)(({ theme }) => ({
  height: '3rem',
  backgroundColor: grey[50],
  fontSize: '1.2rem',
  textAlign: 'center',
  fontWeight: '450',
}));

const TableCellStyle = styled(TableCell)(({ theme }) => ({
  height: '5rem',
  //   backgroundColor: grey[50],
  fontSize: '1.1rem',
  textAlign: 'center',
  fontWeight: '400',
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  width: '12rem',
  height: '3rem',
  fontSize: '1rem',
  margin: '.5rem',
  [theme.breakpoints.down('desktop')]: {
    width: '10rem',
    height: '2rem',
    fontSize: '.85rem',
  },
}));

type Department = 'Admin' | 'Hardware' | 'Software' | 'Marketing';
type UserState = 'Active' | 'Inactive';

export interface Employee {
  id: number;
  name: string;
  department: Department;
  contact?: { mobileNumber?: number; email?: string };
  hireDate: Date;
}

const filteredList = (input: string) => {
  return employeeDummyData.filter((element) => {
    if (input.trim() === '') {
      return element;
    } else {
      return element.name.toLowerCase().includes(input.trim().toLowerCase());
    }
  });
};

const EmployeeDashboard = () => {
  const [value, setValue] = useState<string | null>(null);
  const [searchWord, setSearchWord] = useState('');
  const actionIconClickHandler = () => {
    alert('clicked on action icon');
  };

  const [userState, setUserState] = useState<UserState>('Active');
  return (
    <StyledContainer>
      <Box>
        <Typography variant="h4" color={'primary.light'}>
          Employee Dashboard
        </Typography>
        <Divider></Divider>
        <TableContainer sx={{ padding: '2rem' }} component={Paper}>
          <Box
            sx={{
              height: '5rem',
              backgroundColor: grey[200],
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '3rem',
                  marginRight: theme.spacing(2),
                  marginLeft: theme.spacing(2),
                  width: '100%',
                  [theme.breakpoints.up('sm')]: {
                    marginLeft: theme.spacing(3),
                    width: 'auto',
                  },
                }}
              >
                <Autocomplete
                  disablePortal
                  freeSolo
                  id="combo-box-demo"
                  onChange={(event: any, newValue: string | null) => {
                    setValue(newValue);
                  }}
                  inputValue={searchWord}
                  onInputChange={(event, newInputValue) => {
                    setSearchWord(newInputValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        width: 350,
                        margin: '10px auto',
                      }}
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: <Search sx={{ padding: 1 }}></Search>,
                      }}
                    />
                  )}
                  options={employeeDummyData.map((ele) => ele.name)}
                ></Autocomplete>
              </Box>

              <Select
                sx={{ minWidth: 135, height: '3rem' }}
                value={userState}
                label="Age"
                onChange={(event: SelectChangeEvent) => {
                  setUserState(event.target.value as UserState);
                }}
              >
                <MenuItem value={'Active'}>Active</MenuItem>
                <MenuItem value={'Inactive'}>Inactive</MenuItem>
              </Select>
            </Box>
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <ButtonStyled variant="outlined">Add Employees</ButtonStyled>

              <ButtonStyled variant="outlined">Import Employees</ButtonStyled>
            </Box>
          </Box>
          <Table
            stickyHeader={true}
            size="medium"
            sx={{ minWidth: 800 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableHeaderCellStyle scope="header" align="center">
                  ID
                </TableHeaderCellStyle>
                <TableHeaderCellStyle>Name</TableHeaderCellStyle>
                <TableHeaderCellStyle>Department</TableHeaderCellStyle>
                <TableHeaderCellStyle>Contact</TableHeaderCellStyle>
                <TableHeaderCellStyle>Hire Date</TableHeaderCellStyle>
                <TableHeaderCellStyle>Actions</TableHeaderCellStyle>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredList(searchWord).map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCellStyle component="th" scope="row">
                    {row.id}
                  </TableCellStyle>
                  <TableCellStyle sx={{ color: theme.palette.primary.main }}>
                    {row.name}
                  </TableCellStyle>
                  <TableCellStyle>{row.department}</TableCellStyle>
                  <TableCellStyle>
                    <Stack
                      direction={'column'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <Typography>{row.contact?.mobileNumber}</Typography>
                      <Typography color={grey[500]}>
                        {row.contact?.email}
                      </Typography>
                    </Stack>
                  </TableCellStyle>
                  <TableCellStyle>
                    {row.hireDate.toISOString().split('T')[0]}
                  </TableCellStyle>
                  <TableCellStyle>
                    <IconButton onClick={actionIconClickHandler}>
                      <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                  </TableCellStyle>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </StyledContainer>
  );
};

export default WithLayout(EmployeeDashboard);
