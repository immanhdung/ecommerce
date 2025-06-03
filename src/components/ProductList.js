// src/components/ProductList.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={3} key={product._id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography>{product.price} VND</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
