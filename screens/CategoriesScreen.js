import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "react-navigation-drawer";

import CategoryGridTile from "../components/CategoryGridTile";
import CustomHeaderButton from "../components/CustomHeaderButton";

import { categories } from "../data/dummy-data";

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

  return <FlatList data={categories} renderItem={renderGridItem} numColumns={2} />;
};

CategoriesScreen.navigationOptions = (navigationData) => {
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
    headerTitle: "Meal Categories",
  };
};

CategoriesScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

CategoriesScreen.defaultProps = {};

export default CategoriesScreen;
