import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";

const CategoryMealsScreen = (props) => {
  const { navigation } = props;

  const pressHandler = () => {
    navigation.navigate({ routeName: "MealDetail" });
  };

  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
      <Button title="Go to Meals Detail" onPress={pressHandler} />
    </View>
  );
};

CategoryMealsScreen.propTypes = {
  navigation: PropTypes.shape({
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
