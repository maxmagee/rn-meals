import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";

const CategoriesScreen = (props) => {
  const { navigation } = props;

  const pressHandler = () => {
    navigation.navigate({ routeName: "CategoryMeals" });
  };

  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button title="Go To Meals!" onPress={pressHandler} />
    </View>
  );
};

CategoriesScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

CategoriesScreen.defaultProps = {};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default CategoriesScreen;
