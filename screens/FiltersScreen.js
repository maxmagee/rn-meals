import React, { useState } from "react";
import { DrawerActions } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { StyleSheet, View } from "react-native";

import CustomHeaderButton from "../components/CustomHeaderButton";
import CustomSwitch from "../components/CustomSwitch";
import DefaultText from "../components/DefaultText";

const FiltersScreen = () => {
  const [selectedState, setSelectedState] = useState({});

  const switchChangeHandler = (newValue, key) => {
    setSelectedState((prevSelectedState) => {
      const newState = {};
      newState[key] = newValue;
      return { ...prevSelectedState, ...newState };
    });
  };

  return (
    <View style={styles.screen}>
      <DefaultText style={styles.title}>Available Filters</DefaultText>
      <CustomSwitch
        labelTitle="Gluten - Free"
        switchId="gluten"
        value={selectedState.gluten || false}
        valueChangeHandler={switchChangeHandler}
      />
      <CustomSwitch
        labelTitle="Lactose - Free"
        switchId="lactose"
        value={selectedState.lactose || false}
        valueChangeHandler={switchChangeHandler}
      />
      <CustomSwitch
        labelTitle="Vegan"
        switchId="vegan"
        value={selectedState.vegan || false}
        valueChangeHandler={switchChangeHandler}
      />
      <CustomSwitch
        labelTitle="Vegetarian"
        switchId="vegetarian"
        value={selectedState.vegetarian || false}
        valueChangeHandler={switchChangeHandler}
      />
    </View>
  );
};

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
  filterRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "100%",
  },
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    paddingVertical: 10,
  },
});

export default FiltersScreen;
