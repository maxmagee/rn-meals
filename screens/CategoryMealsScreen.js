import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";

import { categories } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const { navigation } = props;
  const categoryId = navigation.getParam("categoryId");
  const filteredMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = filteredMeals.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);

  const mealItemPressHandler = (itemData) => {
    navigation.navigate({
      params: {
        mealId: itemData.item.id,
        mealTitle: itemData.item.title,
      },
      routeName: "MealDetail",
    });
  };

  return <MealList meals={displayedMeals} onMealItemPress={mealItemPressHandler} />;
};

// navigationOptions can be an object for static data, or function for dynamic options
CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = categories.find((category) => category.id === categoryId);

  return {
    headerTitle: selectedCategory.title,
  };
};

CategoryMealsScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
CategoryMealsScreen.defaultProps = {};

export default CategoryMealsScreen;
