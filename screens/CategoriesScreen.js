import React from "react";
import PropTypes from "prop-types";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../constants/colors";
import dummyData from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const { navigation } = props;

  const itemPressHandler = () => {
    navigation.navigate({ routeName: "CategoryMeals" });
  };

  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity style={styles.gridItem} onPress={itemPressHandler}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return <FlatList data={dummyData.categories} renderItem={renderGridItem} numColumns={2} />;
};

CategoriesScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: "white",
  headerTitle: "Meal Categories",
};

CategoriesScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

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
