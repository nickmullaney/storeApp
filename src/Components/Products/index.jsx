import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Grid } from '@mui/material';
import { addToCart } from '../../Store/Cart';

const Products = () => {
  const { products } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    console.log('This is the product added to the cart', product);
    dispatch(addToCart(product));
  };

  return (
    <Grid container spacing={2}>
      {/* Iterate over the products and render each one */}
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={product.name}
              height="140"
              image={`https://source.unsplash.com/random/?${product.name}`}
              title="random image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {product.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
