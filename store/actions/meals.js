export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const toggleFavorite = (id) => {
  return {
    mealId: id,
    type: TOGGLE_FAVORITE,
  };
};
