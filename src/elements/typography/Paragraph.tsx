import React, { PropsWithChildren } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { Theme } from "theme";
import {
  ParagraphSizes,
  ParagraphWeights,
  sizeMap,
  TextAlign,
  weightMap,
} from "./types";

export type ParagraphProps = {
  size?: ParagraphSizes;
  weight?: ParagraphWeights;
  color?: string;
  style?: StyleProp<TextStyle>;
  textAlign?: TextAlign;
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through"
    | undefined;
  numberOfLines?: number | undefined;
  ellipsizeMode?: "head" | "middle" | "tail" | "clip" | undefined;
  onPress?: () => void;
  testID?: string;
};

export const Paragraph: React.FC<PropsWithChildren<ParagraphProps>> = ({
  children,
  size = "md",
  weight = "regular",
  color = Theme.grey[900],
  textAlign,
  textDecorationLine,
  numberOfLines,
  ellipsizeMode,
  onPress,
  style = {},
  testID,
}) => {
  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[
        { color },
        sizeMap[size],
        weightMap[weight],
        { textAlign },
        { textDecorationLine },
        style,
      ]}
      testID={testID}
    >
      {children}
    </Text>
  );
};
