import React from "react";
import PropTypes from "prop-types";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import DefaultText from "../components/DefaultText";
import { meals } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  const { navigation } = props;
  const selectedMeal = meals.find((meal) => meal.id === navigation.getParam("mealId"));

  const renderIngredientList = () => {
    return selectedMeal.ingredients.map((ingredient) => {
      return (
        <View key={ingredient} style={styles.ingredient}>
          <DefaultText>{ingredient}</DefaultText>
        </View>
      );
    });
  };

  const renderStepList = () => {
    return selectedMeal.steps.map((step, index) => {
      return (
        <View key={step} style={styles.step}>
          <DefaultText>
            <DefaultText style={{ fontFamily: "open-sans-bold" }}>{index + 1}.</DefaultText> {step}
          </DefaultText>
        </View>
      );
    });
  };

  return (
    <ScrollView>
      <Image resizeMode="cover" style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <View style={styles.mealDetails}>
        <View style={styles.mealDetailSection}>
          <DefaultText>
            {selectedMeal.complexity.toUpperCase()} - {selectedMeal.duration}m
          </DefaultText>
        </View>
        <View style={styles.mealDetailsSection}>
          <DefaultText style={{ textAlign: "right" }}>
            {selectedMeal.affordability.toUpperCase()}
          </DefaultText>
        </View>
      </View>
      <View style={styles.ingredientsAndStepsContainer}>
        <DefaultText style={styles.title}>Ingredients</DefaultText>
        {renderIngredientList()}
        <DefaultText style={styles.title}>Steps</DefaultText>
        {renderStepList()}
      </View>
    </ScrollView>
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

  const favoriteHandler = () => {};

  return {
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item iconName="ios-star-outline" onPress={favoriteHandler} title="Favorite" />
        </HeaderButtons>
      );
    },
    headerTitle: selectedMeal.title,
  };
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
  },
  ingredient: {
    paddingLeft: 10,
    paddingVertical: 5,
  },
  ingredientsAndStepsContainer: {
    paddingHorizontal: 15,
  },
  mealDetails: {
    alignItems: "center",
    backgroundColor: "#e7e7e7",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  mealDetailsSection: {
    width: "50%",
  },
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  step: {
    paddingLeft: 10,
    paddingVertical: 5,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    paddingVertical: 10,
  },
});

export default MealDetailScreen;
