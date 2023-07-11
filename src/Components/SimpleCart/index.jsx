import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, Typography } from "@mui/material";
import { removeFromCart } from '../../store/actions';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../../App.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const SimpleCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '300px',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: '10px',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ShoppingCartIcon />
          <Typography variant="body1" component="div" sx={{ ml: 1 }}>
            {cart.length}
          </Typography>
        </Box>

        <Typography variant="h5" component="h2" id="cart-modal" centered>
          Cart
        </Typography>
        <Typography id="cart-modal-description">
          Your items in the cart:
        </Typography>
        {cart.map((product, index) => (
          <Box
            className="cart-items"
            key={`cart-${index}`}
            sx={{
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              margin: "auto",
            }}
          >
            <Typography>{product.name}</Typography>
            <IconButton>
              <DeleteIcon
                fontSize="small"
                onClick={() => dispatch(removeFromCart(product))}
              />
            </IconButton>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default SimpleCart;
