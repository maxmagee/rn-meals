import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, FlatList, View } from "react-native";

import MealItem from "./MealItem";

const MealList = (props) => {
  const { meals, onMealItemPress } = props;

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
        imageUrl={itemData.item.imageUrl}
        onPress={onMealItemPress.bind(null, itemData)}
        title={itemData.item.title}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

MealList.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.shape({
        affordability: PropTypes.string.isRequired,
        complexity: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  onMealItemPress: PropTypes.func.isRequired,
};
MealList.defaultProps = {};

const styles = StyleSheet.create({
  list: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});

export default MealList;
