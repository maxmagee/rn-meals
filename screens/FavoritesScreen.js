import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const FavoritesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Favorites Screen</Text>
    </View>
  );
};

FavoritesScreen.propTypes = {};
FavoritesScreen.defaultProps = {};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default FavoritesScreen;
