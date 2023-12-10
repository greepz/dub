import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function NotFound() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', my: 4 }}>
        {/* Здесь можно добавить изображение "Not Found" */}
        <Typography variant="h4" component="h1" gutterBottom>
          Страница не найдена
        </Typography>
        <Typography variant="body1">
          Извините, мы не можем найти страницу, которую вы ищете.
        </Typography>
      </Box>
    </Container>
  );
}

export default NotFound;
