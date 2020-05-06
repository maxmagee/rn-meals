import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";

import CustomHeaderButton from "../components/CustomHeaderButton";
import DefaultText from "../components/DefaultText";

import { toggleFavorite } from "../store/actions/meals";

const MealDetailScreen = (props) => {
  const { navigation } = props;
  const meals = useSelector((state) => state.meals.meals);
  const selectedMeal = meals.find((meal) => meal.id === navigation.getParam("mealId"));
  const currentMealIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === selectedMeal.id)
  );

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(selectedMeal.id));
  }, [dispatch, selectedMeal]);

  useEffect(() => {
    navigation.setParams({ toggleFavorite: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams({ isFavorite: currentMealIsFavorite });
  }, [currentMealIsFavorite]);

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
    setParams: PropTypes.func.isRequired,
  }).isRequired,
};
MealDetailScreen.defaultProps = {};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavoriteHandler = navigationData.navigation.getParam("toggleFavorite");
  const isFavorite = navigationData.navigation.getParam("isFavorite");
  const iconName = isFavorite ? "ios-star" : "ios-star-outline";

  return {
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item iconName={iconName} onPress={toggleFavoriteHandler} title="Favorite" />
        </HeaderButtons>
      );
    },
    headerTitle: mealTitle,
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
