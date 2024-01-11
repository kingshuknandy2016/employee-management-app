import { Box, Container, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import WithLayout from '../hoc/hoc_withLayout';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  height: '100vh',
  position: 'sticky',
  backgroundColor: theme.palette.grey[200],
}));

const Profile = () => {
  return (
    <StyledContainer>
      <Box>
        <Typography variant="h4" color={'primary.light'}>
          Profile Page
        </Typography>
        <Divider></Divider>
      </Box>
    </StyledContainer>
  );
};

export default WithLayout(Profile);
