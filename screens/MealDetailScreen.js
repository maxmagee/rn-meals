import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import { meals } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  const { navigation } = props;
  const selectedMeal = meals.find((meal) => meal.id === navigation.getParam("mealId"));

  const goBackHandler = () => {
    navigation.popToTop();
  };

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button title="Go Back to Categories" onPress={goBackHandler} />
    </View>
  );
};

MealDetailScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    popToTop: PropTypes.func.isRequired,
  }).isRequired,
};
MealDetailScreen.defaultProps = {};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = meals.find((meal) => meal.id === mealId);

  const favoriteHandler = () => {
    console.log("Favorite Pressed!");
  };

  return {
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item iconName="ios-star" onPress={favoriteHandler} title="Favorite" />
        </HeaderButtons>
      );
    },
    headerTitle: selectedMeal.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default MealDetailScreen;
