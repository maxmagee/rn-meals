import React from "react";
import PropTypes from "prop-types";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

import dummyData from "../data/dummy-data";

const renderGridItem = (itemData) => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = (props) => {
  return <FlatList data={dummyData.categories} renderItem={renderGridItem} numColumns={2} />;
};

CategoriesScreen.propTypes = {};

CategoriesScreen.defaultProps = {};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 15,
  },
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default CategoriesScreen;
