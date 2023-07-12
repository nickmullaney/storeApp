import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductDetails() {

  const { id } = useParams();
  const { products } = useSelector((state) => state);
  const product = products.find((product) => product._id === id);

  return (

    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
      <Card sx={{ maxWidth: 1000 }}>
        <CardMedia
          id="img-container"
          sx={
            { height: 240, width: 340 }
          }
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
          <Button size="small">Add to Cart</Button>
          <Button size="small" component={Link} to={`/`}>Go Back</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default ProductDetails;
