import { Spacer } from "elements/layout/Spacer";
import React, { Children } from "react";
import { FlexStyle, StyleSheet, View, ViewProps } from "react-native";
import { childIsElement } from "./utls";

const styles = StyleSheet.create({
  column: {
    flexDirection: "column",
  },
});

type ColumnProps = Pick<
  FlexStyle,
  | "justifyContent"
  | "alignItems"
  | "flex"
  | "flexGrow"
  | "padding"
  | "paddingHorizontal"
  | "paddingVertical"
  | "paddingTop"
  | "paddingRight"
  | "paddingBottom"
  | "paddingLeft"
  | "margin"
  | "marginHorizontal"
  | "marginVertical"
  | "marginTop"
  | "marginRight"
  | "marginBottom"
  | "marginLeft"
  | "alignSelf"
> &
  ViewProps & {
    gap?: number;
  };

export const Column: React.FC<ColumnProps> = ({
  style,
  justifyContent,
  alignItems,
  flex,
  flexGrow,
  children,
  gap,
  padding,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  margin,
  marginHorizontal,
  marginVertical,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  alignSelf,
  ...props
}) => {
  const arr = Children.toArray(children);

  return (
    <View
      style={[
        styles.column,
        {
          justifyContent,
          alignItems,
          flex,
          flexGrow,
          padding,
          paddingHorizontal,
          paddingVertical,
          paddingTop,
          paddingRight,
          paddingBottom,
          paddingLeft,
          margin,
          marginHorizontal,
          marginVertical,
          marginTop,
          marginRight,
          marginBottom,
          marginLeft,
          alignSelf,
        },
        style,
      ]}
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <>
          {child}
          {!!gap && index < arr.length && childIsElement(child) && (
            <Spacer height={gap} />
          )}
        </>
      ))}
    </View>
  );
};
