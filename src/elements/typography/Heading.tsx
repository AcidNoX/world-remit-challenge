import React, { PropsWithChildren } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { Theme } from "theme";
import {
  headingSizeMap,
  HeadingSizes,
  HeadingWeights,
  TextAlign,
  weightMap,
} from "./types";

export type HeadingProps = {
  size?: HeadingSizes;
  weight?: HeadingWeights;
  color?: string;
  style?: StyleProp<TextStyle>;
  textAlign?: TextAlign;
  testID?: string;
};

export const Heading: React.FC<PropsWithChildren<HeadingProps>> = ({
  children,
  size = "md",
  weight = "bold",
  color = Theme.grey[900],
  textAlign,
  style = {},
  testID,
}) => {
  return (
    <Text
      style={[
        { color },
        headingSizeMap[size],
        weightMap[weight],
        { textAlign },
        style,
      ]}
      testID={testID}
    >
      {children}
    </Text>
  );
};
