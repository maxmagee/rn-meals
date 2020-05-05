import React from "react";
import PropTypes from "prop-types";
import { DrawerActions } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { StyleSheet, Text, View } from "react-native";

import CustomHeaderButton from "../components/CustomHeaderButton";

const FiltersScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Filters Screen</Text>
    </View>
  );
};

FiltersScreen.propTypes = {};
FiltersScreen.defaultProps = {};

FiltersScreen.navigationOptions = (navigationData) => {
  const menuPressHandler = () => {
    navigationData.navigation.dispatch(DrawerActions.openDrawer());
  };

  return {
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item iconName="ios-menu" onPress={menuPressHandler} title="Menu" />
        </HeaderButtons>
      );
    },
    headerTitle: "Filter Meals",
  };
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default FiltersScreen;
