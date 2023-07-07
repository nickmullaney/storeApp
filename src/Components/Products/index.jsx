import { useSelector } from 'react-redux';
import { getActiveCategory } from '../../Store/Categories';
import { getProductsByCategory } from '../../Store/Products';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Grid } from '@mui/material';

const Products = () => {
  // Retrieve the active category from the Redux store
  const activeCategory = useSelector(getActiveCategory);
  console.log('Product Active Category ', activeCategory);

  // Get the products for the active category from the Redux store
  const { products } = useSelector((state) => getProductsByCategory(state, activeCategory));

  return (
    <Grid container spacing={2}>
      {/* Iterate over the products and render each one */}
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
            {/* Display the product image */}
            <CardMedia component="img" alt={product.name} height="140" image={product.image} />
            <CardContent>
              {/* Display the product name */}
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              {/* Display the product description */}
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              {/* Display the product price */}
              <Typography variant="body2" color="text.secondary">
                Price: {product.price}
              </Typography>
            </CardContent>
            <CardActions>
              {/* Render action buttons */}
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
