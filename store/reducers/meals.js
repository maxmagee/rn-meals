import { meals } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  favoriteMeals: [],
  filteredMeals: meals,
  meals,
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE: {
      const existingIndex = state.favoriteMeals.findIndex((meal) => meal.id === action.mealId);

      if (existingIndex >= 0) {
        const updatedFavoriteMeals = [...state.favoriteMeals];
        updatedFavoriteMeals.splice(existingIndex, 1);

        return { ...state, favoriteMeals: updatedFavoriteMeals };
      }

      const newFavoriteMeal = state.meals.find((meal) => meal.id === action.mealId);
      return { ...state, favoriteMeals: state.favoriteMeals.concat(newFavoriteMeal) };
    }
    default:
      return state;
  }
};

export default mealsReducer;
