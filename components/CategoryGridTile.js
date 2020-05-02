import React from "react";
import PropTypes from "prop-types";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

const CategoryGridTile = (props) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  const { color, onPress, title } = props;

  return (
    <View style={styles.gridItem}>
      <TouchableComponent style={styles.touchable} onPress={onPress}>
        <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

CategoryGridTile.propTypes = {
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
CategoryGridTile.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    borderRadius: 10,
    elevation: 2,
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: "black",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.26,
    shadowRadius: 10,
  },
  gridItem: {
    borderRadius: 10,
    flex: 1,
    height: 150,
    margin: 15,
    overflow: "hidden",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "right",
  },
  touchable: {
    flex: 1,
  },
});

export default CategoryGridTile;
