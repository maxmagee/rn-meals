import { meals } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals";

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
    case SET_FILTERS: {
      const { filterSettings } = action;
      const matchesAllFilters = (meal) => {
        return (
          (!filterSettings.isGlutenFree || meal.isGlutenFree) &&
          (!filterSettings.isLactoseFree || meal.isLactoseFree) &&
          (!filterSettings.isVegan || meal.isVegan) &&
          (!filterSettings.isVegetarian || meal.isVegetarian)
        );
      };

      const newFilteredMeals = [...state.meals.filter(matchesAllFilters)];

      return { ...state, filteredMeals: newFilteredMeals };
    }
    default:
      return state;
  }
};

export default mealsReducer;
