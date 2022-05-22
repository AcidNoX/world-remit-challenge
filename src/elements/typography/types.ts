import { StyleProp, TextStyle } from "react-native";

export type ParagraphSizes = "lg" | "md" | "sm" | "xs" | "tabBar";
export type ParagraphWeights = "regular" | "demi" | "bold" | "heavy";
export type HeadingSizes = "2xl" | "xl" | "lg" | "md" | "sm" | "xs";
export type HeadingWeights = "regular" | "demi" | "bold" | "heavy";

export type TextAlign =
  | "auto"
  | "left"
  | "right"
  | "center"
  | "justify"
  | undefined;

export const headingSizeMap: {
  [Property in HeadingSizes]: StyleProp<TextStyle>;
} = {
  "2xl": { fontSize: 72, lineHeight: 88 },
  xl: { fontSize: 56, lineHeight: 64 },
  lg: { fontSize: 48, lineHeight: 56 },
  md: { fontSize: 40, lineHeight: 48 },
  sm: { fontSize: 32, lineHeight: 40 },
  xs: { fontSize: 24, lineHeight: 32 },
};

export const sizeMap: { [Property in ParagraphSizes]: StyleProp<TextStyle> } = {
  lg: { fontSize: 18, lineHeight: 24 },
  md: { fontSize: 16, lineHeight: 24 },
  sm: { fontSize: 14, lineHeight: 20 },
  xs: { fontSize: 12, lineHeight: 16 },
  tabBar: { fontSize: 11, lineHeight: 16 },
};

export const weightMap: {
  [Property in ParagraphWeights]: StyleProp<TextStyle>;
} = {
  regular: { fontFamily: "Inter Regular" },
  demi: { fontFamily: "Inter SemiBold" },
  bold: { fontFamily: "Inter Bold" },
  heavy: { fontFamily: "Inter Black" },
};
