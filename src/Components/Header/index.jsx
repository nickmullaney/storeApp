import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Box, Button, IconButton, Modal, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCart from '../ShoppingCart'; // Import the SimpleCart component

const Header = () => {
  const { cart } = useSelector((state) => state);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            onClick={handleOpen}
          >
          </IconButton>
          <ShoppingCartIcon />
          <Button color="inherit" onClick={handleOpen}>Cart ({cart.length})</Button>
        </Toolbar>
      </AppBar>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="cart-modal"
        aria-describedby="cart-modal-description"
      >
        {/* Render the SimpleCart component */}
        <ShoppingCart />
      </Modal>
    </Box>
  );
};

export default Header;
