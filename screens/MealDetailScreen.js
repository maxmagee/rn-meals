import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
    </View>
  );
};

MealDetailScreen.propTypes = {};
MealDetailScreen.defaultProps = {};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default MealDetailScreen;
