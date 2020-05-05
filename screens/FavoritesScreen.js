import React from "react";
import PropTypes from "prop-types";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "react-navigation-drawer";

import MealList from "../components/MealList";
import CustomHeaderButton from "../components/CustomHeaderButton";

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

FavoritesScreen.navigationOptions = (navigationData) => {
  const menuPressHandler = () => {
    navigationData.navigation.dispatch(DrawerActions.openDrawer());
  };

  return {
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item iconName="ios-menu" onPress={menuPressHandler} title="Menu" />
        </HeaderButtons>
      );
    },
    headerTitle: "Your Favorites",
  };
};

export default FavoritesScreen;
