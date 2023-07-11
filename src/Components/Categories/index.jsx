import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { activeCategory, getCategories } from '../../store/categories';
// import { changeProducts } from '../../store/products';

import electronicsBackground from '../../../assets/images/electronicsBackground.jpg';
import foodBackground from '../../../assets/images/foodBackground.jpg';
import clothingBackground from '../../../assets/images/clothingBackground.jpg';
import weaponBackground from '../../../assets/images/weaponBackground.jpg';
import gameBackground from '../../../assets/images/gameBackground.jpg';


function Categories() {

  const { categories } = useSelector((state) => state.categories);
  console.log('categories', categories);

  const dispatch = useDispatch();

  const setDispatcher = (category) => {
    dispatch(activeCategory(category));
    // dispatch(changeProducts(category));
  }

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const getCategoryBackground = (categoryName) => {
    // Determine the background image URL based on the category name
    switch (categoryName) {
      case 'electronics':
        return `url(${electronicsBackground})`;
      case 'food':
        return `url(${foodBackground})`;
      case 'clothing':
        return `url(${clothingBackground})`;
      case 'weapons':
        return `url(${weaponBackground})`;
      case 'games':
        return `url(${gameBackground})`;
      default:
        return 'none';
    }
  };

  return (
    <>
      {/* Render the heading */}
      <Typography variant="h4" component="h1" align="center">
        Categories
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        {
          categories.map((category, index) => (
            <Button
              key={`categories-${index}`}
              className='links'
              onClick={() => setDispatcher(category)}
              sx={{
                cursor: 'pointer',
                border: '1px solid #ccc',
                borderRadius: 4,
                padding: 2,
                marginRight: 2,
                width: '150px', // Set a fixed width for all category boxes
                backgroundImage: getCategoryBackground(category.name), // Apply the background image
                textAlign: 'center',
                fontSize: '1rem',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                color: '#fff', // Set text color to white for better visibility
                '& .MuiTypography-root': {
                  fontWeight: 'bold', // Make the text bold
                  fontSize: '1.1rem', // Increase the font size slightly
                },
                '&:hover': {
                  opacity: 0.8, // Slightly decrease the opacity on hover
                },
              }}
            >
              {/* Render the category display name */}
              <Typography variant="body1">{category.name}</Typography>
            </Button>
          ))
        }
        {/* <ButtonGroup variant="text" aria-label="text button group">
          {
            categories.map((category, index) => (
              <Button key={`categories-${index}`} className='links' onClick={() => categoryHandler(category)}>
                {category.displayName}
              </Button>
            ))
          }
        </ButtonGroup> */}
      </Box>
    </>
  )
}

export default Categories;