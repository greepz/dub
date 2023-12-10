import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ProductForm from './ProductForm';

function SellerInterface() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Размещение товара
        </Typography>
        <ProductForm />
      </Box>
    </Container>
  );
}

export default SellerInterface;
