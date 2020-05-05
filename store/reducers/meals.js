import { meals } from "../../data/dummy-data";

const initialState = {
  favoriteMeals: [],
  filteredMeals: meals,
  meals,
};

const mealsReducer = (state = initialState, action) => {
  return state;
};

export default mealsReducer;
