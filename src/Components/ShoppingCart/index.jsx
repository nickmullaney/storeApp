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
      return index === self.findIndex((p) => p.name === product.name);
    });
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price ;
    });
    return total.toFixed(2);
  };

  return (
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

      <Typography variant="h5" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
        Your Cart
      </Typography>

      <Box sx={{ borderBottom: '1px solid #ccc', paddingBottom: 1 }}>
        {getUniqueProducts(cart).map((product, index) => (
          <Box
            className="cart-items"
            key={`cart-${index}`}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              margin: "auto",
              mb: 2,
              bgcolor: '#f7f7f7',
              borderRadius: '4px',
              padding: '8px',
            }}
          >
            <Avatar src={`https://source.unsplash.com/random/?${product.name}`} alt={product.name} />
            <Box sx={{ ml: 2 }}>
              <Badge badgeContent={getProductQuantity(product)} color="primary">
                <Typography variant="subtitle1">{product.name}</Typography>
                </Badge>
            </Box>
            <Typography variant="body2" sx={{ ml: 'auto' }}>
              ${product.price.toFixed(2) * getProductQuantity(product)}
            </Typography>
            <IconButton sx={{ ml: 2 }}>
              <DeleteIcon
                fontSize="small"
                onClick={() => dispatch(removeDispatcher(product))}
                className="remove"
              />
            </IconButton>
          </Box>
        ))}
      </Box>

      <Typography variant="h6" component="div" sx={{ mt: 2, textAlign: 'right' }}>
        Total: ${calculateTotal()}
      </Typography>
    </Box>
  );
};

export default SimpleCart;
