import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from '@expo/vector-icons'; //eslint-disable-line

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FiltersScreen from "../screens/FiltersScreen";

import colors from "../constants/colors";

const defaultStackNavOptions = {
  defaultNavigationOptions: {
    headerBackStyle: {
      fontFamily: "open-sans",
    },
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: "white",
    headerTitleContainerStyle: {
      // Work-around for truncation bug
      alignItems: Platform.OS === "ios" ? "center" : "flex-start",
      width: Platform.OS === "ios" ? "60%" : "75%",
    },
    headerTitleStyle: {
      fontFamily: "open-sans-bold",
    },
  },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  defaultStackNavOptions
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  defaultStackNavOptions
);

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  defaultStackNavOptions
);

const tabScreenConfig = {
  Favorites: {
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
        ) : (
          "Favorites"
        ),
    },
    screen: FavoritesNavigator,
  },
  Meals: {
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />;
      },
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
        ) : (
          "Meals"
        ),
    },
    screen: MealsNavigator,
  },
};

const MealFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: colors.secondary,
        barStyle: {
          backgroundColor: colors.primary,
        },
        order: ["Meals", "Favorites"],
      })
    : createBottomTabNavigator(tabScreenConfig, {
        order: ["Meals", "Favorites"],
        tabBarOptions: {
          activeTintColor: colors.secondary,
          labelStyle: {
            fontFamily: "open-sans-bold",
          },
        },
      });

const MainNavigator = createDrawerNavigator(
  {
    Filters: FiltersNavigator,
    MealsAndFavorites: {
      navigationOptions: {
        drawerLabel: "Categories",
      },
      screen: MealFavTabNavigator,
    },
  },
  {
    contentOptions: {
      activeTintColor: colors.secondary,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
    order: ["MealsAndFavorites", "Filters"],
  }
);

export default createAppContainer(MainNavigator);
