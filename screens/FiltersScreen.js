import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const FiltersScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Filters Screen</Text>
    </View>
  );
};

FiltersScreen.propTypes = {};
FiltersScreen.defaultProps = {};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default FiltersScreen;
