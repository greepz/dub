import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Product App
        </Typography>
        <Typography variant="body1">This is the Home Page.</Typography>
      </Box>
    </Container>
  );
}

export default Home;
