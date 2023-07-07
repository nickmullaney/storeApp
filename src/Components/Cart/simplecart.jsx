import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { removeFromCart } from '../../Store/Cart';

const Cart = () => {
  const { cartItems } = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345 }}>
          <CardMedia component="img" alt={item.title} height="140" image={item.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${item.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total: ${(item.amount * item.price).toFixed(2)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </Button>
          </CardActions>
        </Card>
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </div>
  );
}

export default Cart;
