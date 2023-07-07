import { useSelector, useDispatch } from 'react-redux';
import { selectCategory, getCategories } from '../../Store/Categories';
import { Box, Typography } from '@mui/material';
import electronicsBackground from '../../../assets/images/electronicsBackground.jpg';
import foodBackground from '../../../assets/images/foodBackground.jpg';
import clothingBackground from '../../../assets/images/clothingBackground.jpg';
import weaponsBackground from '../../../assets/images/weaponBackground.jpg';

const Categories = () => {
  const { categories } = useSelector(getCategories);
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(selectCategory(category));
  };

  const getCategoryBackground = (categoryName) => {
    switch (categoryName) {
      case 'electronics':
        return `url(${electronicsBackground})`;
      case 'food':
        return `url(${foodBackground})`;
      case 'clothing':
        return `url(${clothingBackground})`;
      case 'weapons':
        return `url(${weaponsBackground})`;
      default:
        return 'none';
    }
  };

  return (
    <div>
      <Typography variant="h4" component="h1" align="center">
        Categories
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        {categories.map((category) => (
          <Box
            key={category.id}
            onClick={() => handleCategoryClick(category)}
            sx={{
              cursor: 'pointer',
              border: '1px solid #ccc',
              borderRadius: 4,
              padding: 2,
              marginRight: 2,
              width: '150px', // Set a fixed width for all category boxes
              backgroundImage: getCategoryBackground(category.name),// Apply the background image
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
            }}
          >
            <Typography variant="body1">{category.displayName}</Typography>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default Categories;
