import { useSelector } from 'react-redux';
import { AppBar, Box, Button, IconButton, Toolbar, Typography,} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const { cart } = useSelector((state) => state.cart);

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
          >
            <ShoppingCartIcon />
            <Typography variant="body1" component="div" sx={{ ml: 1 }}>
            </Typography>
          </IconButton>
          <Button color="inherit">Cart ({cart.length})</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
