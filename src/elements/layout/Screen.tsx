import React, { PropsWithChildren } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Theme } from "theme";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  conainer: {
    backgroundColor: Theme.grey[100],
    width,
    height,
  },
});

type ScreenProps = {};

export const Screen: React.FC<PropsWithChildren<ScreenProps>> = ({
  children,
}) => {
  return <View style={styles.conainer}>{children}</View>;
};
