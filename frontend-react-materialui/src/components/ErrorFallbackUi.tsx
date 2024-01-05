import { Box, Button, Typography } from '@mui/material';
import theme from '../Theme';

const ErrorFallbackUI = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: theme.palette.primary.light,
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        The page you are looking for does not exist.
      </Typography>
      <Button variant="contained">Back Home</Button>
    </Box>
  );
};

export default ErrorFallbackUI;
