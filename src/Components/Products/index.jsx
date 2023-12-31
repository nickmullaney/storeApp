import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../../App.css';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Box } from '@mui/material';
import { When } from 'react-if';
import { addToCart } from '../../store/cart.js';
import { decrementInventoryOnAdd, getProducts } from '../../store/products.js';

function Products() {
  const { activeCategory } = useSelector((state) => state.categories);
  console.log('activeCategory', activeCategory);
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log('Active Products', products); 

  const addDispatcher = (product) => {
    dispatch(addToCart(product));
    dispatch(decrementInventoryOnAdd(product));
  };

  useEffect(() => {
    dispatch(getProducts(activeCategory.name))
  }, [activeCategory]);

  return (
    
    < When condition = { activeCategory } >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <h2>Current Category: {activeCategory.name}</h2>
      <h4>{activeCategory.description}</h4>
      </Box>

      <Grid container spacing={2} width="80%" margin="auto">
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={`products${index}`}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                id="img-container"
                sx={{ height: 140 }}
                image={`https://source.unsplash.com/random/?${product.name}`}
                title="random image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Name: {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  In-Stock: {product.inStock}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => addDispatcher(product)}>
                  Add to Cart
                </Button>
                <Button size="small"component={Link}
              to={`/products/${product._id}`}> 
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </When>

  );
}

export default Products;
