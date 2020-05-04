import React from "react";
import PropTypes from "prop-types";

import MealList from "../components/MealList";

import { meals } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  const { navigation } = props;
  const displayedMeals = meals.filter((meal) => meal.id === "m1" || meal.id === "m2");

  const mealItemPressHandler = (itemData) => {
    navigation.navigate({ params: { mealId: itemData.item.id }, routeName: "MealDetail" });
  };

  return <MealList meals={displayedMeals} onMealItemPress={mealItemPressHandler} />;
};

FavoritesScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
FavoritesScreen.defaultProps = {};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

export default FavoritesScreen;
