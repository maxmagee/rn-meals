import React from "react";
import PropTypes from "prop-types";
import { FlatList, StyleSheet, View } from "react-native";

import MealItem from "../components/MealItem";

import { categories, meals } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const { navigation } = props;
  const categoryId = navigation.getParam("categoryId");
  const displayedMeals = meals.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);

  const mealItemPressHandler = (itemData) => {
    navigation.navigate({ params: { mealId: itemData.item.id }, routeName: "MealDetail" });
  };

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
        imageUrl={itemData.item.imageUrl}
        onPress={mealItemPressHandler.bind(null, itemData)}
        title={itemData.item.title}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
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
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
CategoryMealsScreen.defaultProps = {};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});

export default CategoryMealsScreen;
