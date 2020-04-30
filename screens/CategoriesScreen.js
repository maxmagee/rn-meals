import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
    </View>
  );
};

CategoriesScreen.propTypes = {};
CategoriesScreen.defaultProps = {};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default CategoriesScreen;
