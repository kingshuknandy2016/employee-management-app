import { Box, Container, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import WithLayout from '../hoc/hoc_withLayout';
import Layout from '../layouts/Layout';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  height: '100vh',
  position: 'sticky',
  backgroundColor: theme.palette.grey[200],
}));

const Home = () => {
  return (
    <StyledContainer>
      <Box>
        <Typography variant="h4" color={'primary.light'}>
          Home Page
        </Typography>
        <Divider></Divider>
      </Box>
    </StyledContainer>
  );
};

export default WithLayout(Home);
