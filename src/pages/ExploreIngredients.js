import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IngredientCard from '../components/IngredientCard';
import { fetchMealIngredients, fetchMealByIngredients } from '../services/fetchMeals';
import { fetchDrinkIngredients, fetchDrinkByIngredients } from '../services/fetchDrinks';
import RecipesContext from '../context/RecipesContext';

function ExploreIngredients({ history, location }) {
  const [allIngredients, setAllIngredients] = useState([]);
  const { setNewRecipes } = useContext(RecipesContext);

  const URL = location.pathname;
  const NOT_FOUND = -1;
  const foodCondition = URL.indexOf('foods') !== NOT_FOUND;

  useEffect(() => {
    const loadAllIngredients = async () => {
      if (foodCondition) {
        const ingredients = await fetchMealIngredients();
        setAllIngredients(ingredients);
      } else {
        const ingredients = await fetchDrinkIngredients();
        setAllIngredients(ingredients);
      }
    };
    loadAllIngredients();
  }, [foodCondition]);

  const showRecipesByIngredient = async (name) => {
    if (foodCondition) {
      const ingredients = await fetchMealByIngredients(name);
      setNewRecipes(ingredients);
      history.push('/foods');
    } else {
      const ingredients = await fetchDrinkByIngredients(name);
      setNewRecipes(ingredients);
      history.push('/drink');
    }
  };

  return (
    <div>
      <Header location={ URL } history={ history } />
      <main>
        { allIngredients.map(({ strIngredient1: name, strIngredient }, index) => (
          <IngredientCard
            onClick={ foodCondition
              ? () => showRecipesByIngredient(strIngredient)
              : () => showRecipesByIngredient(name) }
            src={ foodCondition
              ? `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png`
              : `https://www.thecocktaildb.com/images/ingredients/${name}-Small.png` }
            key={ foodCondition ? strIngredient : name }
            name={ foodCondition ? strIngredient : name }
            index={ index }
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

ExploreIngredients.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default ExploreIngredients;