import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "react-navigation-drawer";

import MealList from "../components/MealList";
import CustomHeaderButton from "../components/CustomHeaderButton";
import DefaultText from "../components/DefaultText";

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

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.screen}>
        <DefaultText>No Current Favorite Meals</DefaultText>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default FavoritesScreen;
