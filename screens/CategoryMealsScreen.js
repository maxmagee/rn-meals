import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
    </View>
  );
};

CategoryMealsScreen.propTypes = {};
CategoryMealsScreen.defaultProps = {};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default CategoryMealsScreen;
