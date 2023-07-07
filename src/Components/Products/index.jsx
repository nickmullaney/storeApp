
import { useSelector } from 'react-redux';
import { getActiveCategory } from '../../Store/Categories';
import { getProductsByCategory } from '../../Store/Products';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Grid } from '@mui/material';

const Products = () => {
  const activeCategory = useSelector(getActiveCategory);
  const { products } = useSelector((state) => getProductsByCategory(state, activeCategory));

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt={product.name} height="140" image={product.image} />
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
