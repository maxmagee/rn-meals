import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";

const MealDetailScreen = (props) => {
  const { navigation } = props;

  const goBackHandler = () => {
    navigation.popToTop();
  };

  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
      <Button title="Go Back to Categories" onPress={goBackHandler} />
    </View>
  );
};

MealDetailScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    popToTop: PropTypes.func.isRequired,
  }).isRequired,
};
MealDetailScreen.defaultProps = {};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default MealDetailScreen;
