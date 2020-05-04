import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import colors from "../constants/colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
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
  }
);

export default createAppContainer(MealsNavigator);
