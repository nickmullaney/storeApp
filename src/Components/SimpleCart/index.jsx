import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Badge, Box, IconButton, Typography } from "@mui/material";
import { removeFromCart } from '../../store/cart';
import { incrementInventoryOnRemove } from '../../store/products';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../../App.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const SimpleCart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeDispatcher = (product) => {
    dispatch(removeFromCart(product));
    dispatch(incrementInventoryOnRemove(product));
  };

  const getProductQuantity = (product) => {
    return cart.filter((item) => item.name === product.name).length;
  };

  const getUniqueProducts = (cart) => {
    return cart.filter((product, index, self) => {
      return (
        index === self.findIndex((p) => p.name === product.name)
      );
    });
  };

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', float: 'right' }}>
          <Badge badgeContent={cart.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </Box>

        <Typography variant="h5" component="h2" id="cart-modal" centered>
          Cart
        </Typography>
        <Typography id="cart-modal-description">
          Your items in the cart:
        </Typography>
        {getUniqueProducts(cart).map((product, index) => (
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
            <Avatar src={`https://source.unsplash.com/random/?${product.name}`} alt={product.name} />
            <Typography>
              <Badge badgeContent={getProductQuantity(product)} color="primary" />
            </Typography>
            <Typography>
              {product.name}
            </Typography>
            <Typography>${product.price * getProductQuantity(product)}</Typography>
            <IconButton>
              <DeleteIcon
                fontSize="small"
                onClick={() => dispatch(removeDispatcher(product))}
                className="remove"
              />
            </IconButton>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default SimpleCart;
