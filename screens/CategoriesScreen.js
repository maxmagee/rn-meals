import React from "react";
import PropTypes from "prop-types";
import { FlatList, StyleSheet } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";

import dummyData from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const { navigation } = props;

  const itemPressHandler = (itemData) => {
    navigation.navigate({
      params: {
        categoryId: itemData.item.id,
      },
      routeName: "CategoryMeals",
    });
  };

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        color={itemData.item.color}
        onPress={itemPressHandler.bind(null, itemData)}
        title={itemData.item.title}
      />
    );
  };

  return <FlatList data={dummyData.categories} renderItem={renderGridItem} numColumns={2} />;
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
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
