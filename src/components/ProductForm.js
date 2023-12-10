import React, { useState } from 'react';
import { TextField, Button, Box, Container, Grid } from '@mui/material';

function ProductForm() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    images: []
  });

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, images: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    // Здесь должна быть логика отправки данных на сервер
  };

  return (
    <Container maxWidth="sm"> {/* Ограничение ширины контейнера */}
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Grid container spacing={2}> {/* Использование сетки для отступов */}
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="name"
              label="Название товара"
              name="name"
              autoFocus
              value={product.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="description"
              label="Описание товара"
              name="description"
              multiline
              rows={4}
              value={product.description}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="price"
              label="Цена"
              name="price"
              value={product.price}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="raised-button-file"
              multiple
              type="file"
              name="images"
              onChange={handleFileChange}
            />
            <label htmlFor="raised-button-file">
              <Button variant="contained" component="span" fullWidth>
                Загрузка изображений
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
            >
              Опубликовать товар
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ProductForm;
