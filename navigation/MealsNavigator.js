import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from '@expo/vector-icons'; //eslint-disable-line

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import colors from "../constants/colors";

const defaultStackNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: "white",
    headerTitleContainerStyle: {
      // Work-around for truncation bug
      alignItems: Platform.OS === "ios" ? "center" : "flex-start",
      width: Platform.OS === "ios" ? "60%" : "75%",
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

const tabScreenConfig = {
  Favorites: {
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
    },
    screen: FavoritesNavigator,
  },
  Meals: {
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />;
      },
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
        },
      });

export default createAppContainer(MealFavTabNavigator);
