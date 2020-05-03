import React from "react";
import PropTypes from "prop-types";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MealItem = (props) => {
  const { affordability, complexity, duration, imageUrl, onPress, title } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.mealItem}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground source={{ uri: imageUrl }} style={styles.backgroundImage}>
            <View style={styles.titleContainer}>
              <Text numberOfLines={1} style={styles.title}>
                {title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <View style={styles.mealDetailSection}>
            <Text>
              {complexity.toUpperCase()} - {duration}m
            </Text>
          </View>
          <View style={styles.mealDetailSection}>
            <Text style={{ textAlign: "right" }}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

MealItem.propTypes = {
  affordability: PropTypes.string.isRequired,
  complexity: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

MealItem.defaultProps = {};

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    justifyContent: "flex-end",
    width: "100%",
  },
  mealDetail: {
    alignItems: "center",
    height: "15%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  mealDetailSection: {
    width: "50%",
  },
  mealHeader: {
    height: "85%",
  },
  mealItem: {
    backgroundColor: "#e7e7e7",
    borderRadius: 10,
    height: 200,
    marginBottom: 15,
    overflow: "hidden",

    width: "100%",
  },
  mealRow: {
    flexDirection: "row",
  },
  title: {
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 20,

    textAlign: "center",
  },
  titleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
});

export default MealItem;
