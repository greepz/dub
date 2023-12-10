import React, { useState, useEffect, useCallback } from 'react';
import { Box, Card, CardContent, Typography, Grid, Container, CircularProgress, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { products } from '../mockData';

function ProductFeed() {
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalLoaded, setTotalLoaded] = useState(0);

  const loadInitialProducts = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProducts(products.slice(0, 10));
      setTotalLoaded(10);
      setLoading(false);
    }, 2000);
  }, []);

  const loadMoreProducts = useCallback(() => {
    if (totalLoaded >= 100 || loading) return;

    setLoading(true);
    setTimeout(() => {
      const nextProducts = products.slice(totalLoaded, totalLoaded + 5);
      setVisibleProducts(prevProducts => [...prevProducts, ...nextProducts]);
      setTotalLoaded(totalLoaded + 5);
      setLoading(false);
    }, 2000);
  }, [totalLoaded, loading]);

  useEffect(() => {
    loadInitialProducts();
  }, [loadInitialProducts]);

  useEffect(() => {
    const handleScroll = () => {
      // Проверка, достиг ли пользователь нижней части списка товаров
      if (window.innerHeight + window.scrollY >= document.documentElement.offsetHeight) {
        loadMoreProducts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreProducts]);

  return (
    <Container maxWidth="sm">
      <Box sx={{ flexGrow: 1, my: 2 }}>
        <Grid container spacing={2}>
          {visibleProducts.map(product => (
            <Grid item xs={12} key={product.id}>
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card sx={{ height: 400 }}>
                  <Box sx={{
                    height: '70%',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                  <CardContent sx={{ height: '30%' }}>
                    <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                      {product.price} ₽
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      fontSize: '0.90em'
                    }}>
                      {product.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default ProductFeed;
