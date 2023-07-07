import { useDispatch, useSelector } from 'react-redux';
import { changeProducts }  from '../../store/actions';
import { Button, ButtonGroup } from '@mui/material';

function Categories () {

  const { categories } = useSelector((state) => state.categories);
  console.log('categories', categories);

  const dispatch = useDispatch();

  const categoryHandler = (category) => {  
    dispatch(changeProducts(category));
  };

    return (
        <>
            <h1>Browse Our Categories</h1>
            <ButtonGroup variant="text" aria-label="text button group">
            {
              categories.map((category, index) => (
                <Button key={`categories-${index}`} className='links' onClick={() => categoryHandler(category)}>
                  {category.displayName} 
                </Button>
              ))
            }
            </ButtonGroup>
           
        </>
    )
}

export default Categories;