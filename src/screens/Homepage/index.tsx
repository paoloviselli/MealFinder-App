import { useEffect, useState } from 'react';
import FoodItem from '../../components/FoodItem';
import Text from '../../components/shared/Text';
import { Meal } from '../../types/meals';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

interface HomepageProps {}

const Homepage: React.FunctionComponent<HomepageProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState<Meal[]>();

  const DUMMY_MEAL = {
    id: 33,
    title: 'Carbonara 69',
    image: 'https://spoonacular.com/recipeImages/716426-312x231.jpg',
    imageType: 'jpg',
  };

  useEffect(() => {
    const fetchHandler = async () => {
      setIsLoading(true);
      const response = await fetch(
        'https://api.spoonacular.com/recipes/complexSearch?apiKey=03fede8675cd482c8d3496b0371b6d99'
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      const results = data.results;
      // console.log(results);
      setIsLoading(false);

      setMeals(results);
    };

    fetchHandler();
  }, []);

  console.log(meals);

  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Text fontSize={18} color="primary" underline={true}>
        Welcome
      </Text>
      <Grid container spacing={6}>
        {meals?.map((el) => {
          return (
            <Grid key={el.id} item xs={4}>
              <FoodItem meal={el}></FoodItem>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Homepage;
