import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Switch, View } from "react-native";

import DefaultText from "./DefaultText";

import colors from "../constants/colors";

const CustomSwitch = (props) => {
  const { labelTitle, switchId, value, valueChangeHandler } = props;

  return (
    <View style={styles.filterRow}>
      <DefaultText>{labelTitle}</DefaultText>
      <Switch
        onValueChange={(newValue) => valueChangeHandler(newValue, switchId)}
        value={value}
        trackColor={{ true: colors.primary }}
      />
    </View>
  );
};

CustomSwitch.propTypes = {
  labelTitle: PropTypes.string,
  switchId: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  valueChangeHandler: PropTypes.func.isRequired,
};
CustomSwitch.defaultProps = {
  labelTitle: "",
};

const styles = StyleSheet.create({
  filterRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "100%",
  },
});

export default CustomSwitch;
