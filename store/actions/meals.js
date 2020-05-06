export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = (id) => {
  return {
    mealId: id,
    type: TOGGLE_FAVORITE,
  };
};

export const setFilters = (filterSettings) => {
  return {
    filterSettings,
    type: SET_FILTERS,
  };
};
