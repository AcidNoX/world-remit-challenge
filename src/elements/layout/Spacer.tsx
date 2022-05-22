import React from "react";
import {StyleProp, View, ViewStyle} from "react-native";

export type SpacerProps = {
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
};

export const Spacer: React.FC<SpacerProps> = ({height = 0, width = 0, style}) => {
  return <View style={[{height, width}, style]} />;
};
