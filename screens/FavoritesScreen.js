import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "react-navigation-drawer";

import MealList from "../components/MealList";
import CustomHeaderButton from "../components/CustomHeaderButton";

const FavoritesScreen = (props) => {
  const { navigation } = props;
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  const mealItemPressHandler = (itemData) => {
    navigation.navigate({
      params: {
        mealId: itemData.item.id,
        mealTitle: itemData.item.title,
      },
      routeName: "MealDetail",
    });
  };

  return <MealList meals={favoriteMeals} onMealItemPress={mealItemPressHandler} />;
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
