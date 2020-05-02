import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";

import dummyData from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const { navigation } = props;
  const categoryId = navigation.getParam("categoryId");
  const selectedCategory = dummyData.categories.find((category) => category.id === categoryId);

  const pressHandler = () => {
    navigation.navigate({ routeName: "MealDetail" });
  };

  const goBackHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button title="Go to Meals Detail" onPress={pressHandler} />
      <Button title="Go Back" onPress={goBackHandler} />
    </View>
  );
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
  },
});

export default CategoryMealsScreen;
