import { useSelector } from 'react-redux';
import { useState } from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from '../Cart/simplecart';

const Header = () => {
  const { cartItems } = useSelector(state => state.cart);
  const [cartOpen, setCartOpen] = useState(false);

  const getTotalItems = (items) =>
    items.reduce((acc, item) => acc + item.amount, 0);

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleCartClose = () => {
    setCartOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Our Store
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleCartOpen}
          >
            <ShoppingCartIcon />
            <Typography variant="body1" component="div" sx={{ ml: 1 }}>
              {getTotalItems(cartItems)}
            </Typography>
          </IconButton>
          <Button color="inherit">Cart</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={cartOpen} onClose={handleCartClose}>
        <Cart />
      </Drawer>
    </Box>
  );
};

export default Header;
