import { Spacer } from "elements/layout/Spacer";
import React, { Children } from "react";
import { FlexStyle, StyleSheet, View, ViewProps } from "react-native";
import { childIsElement } from "./utls";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});

type RowProps = Pick<
  FlexStyle,
  | "justifyContent"
  | "alignItems"
  | "flex"
  | "flexGrow"
  | "flexWrap"
  | "padding"
  | "paddingHorizontal"
  | "paddingVertical"
  | "paddingTop"
  | "paddingRight"
  | "paddingBottom"
  | "paddingLeft"
  | "zIndex"
  | "margin"
  | "marginHorizontal"
  | "marginVertical"
  | "marginTop"
  | "marginRight"
  | "marginBottom"
  | "marginLeft"
  | "height"
  | "width"
> &
  ViewProps & { gap?: number };

export const Row: React.FC<RowProps> = ({
  style,
  justifyContent,
  alignItems,
  flex,
  flexGrow,
  flexWrap,
  children,
  gap,
  padding,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  zIndex,
  margin,
  marginHorizontal,
  marginVertical,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  height,
  width,
  ...props
}) => {
  const arr = Children.toArray(children);
  return (
    <View
      style={[
        styles.row,
        {
          justifyContent,
          alignItems,
          flex,
          flexGrow,
          flexWrap,
          padding,
          paddingHorizontal,
          paddingVertical,
          paddingTop,
          paddingRight,
          paddingBottom,
          paddingLeft,
          zIndex,
          margin,
          marginHorizontal,
          marginVertical,
          marginTop,
          marginRight,
          marginBottom,
          marginLeft,
          height,
          width,
        },
        style,
      ]}
      {...props}
    >
      {Children.map(children, (child, index) => (
        <>
          {child}
          {gap && index < arr.length && childIsElement(child) && (
            <Spacer width={gap} />
          )}
        </>
      ))}
    </View>
  );
};
