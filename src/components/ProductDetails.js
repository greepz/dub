// ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Container, Button } from '@mui/material';
import Slider from 'react-slick'; // Импортируем Slider
import 'slick-carousel/slick/slick.css'; // Базовые стили
import 'slick-carousel/slick/slick-theme.css'; // Тема
import { products } from '../mockData';

function ProductDetails() {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <Typography variant="h5" component="h2">Товар не найден</Typography>;
  }

  // Настройки для карусели
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        {/* Карусель изображений */}
        <Slider {...settings}>
          {product.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`${product.name} - изображение ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </Slider>

        <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
          {product.price} ₽
        </Typography>
        <Typography gutterBottom variant="h5" component="h1" sx={{ mt: 2 }}>
          {product.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {product.description}
        </Typography>
        
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Купить
        </Button>
      </Box>
    </Container>
  );
}

export default ProductDetails;
