import { Paragraph } from "elements/typography/Paragraph";
import React, { PropsWithChildren } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Theme } from "theme";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 38,
    height: 44,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonPrimary: {
    backgroundColor: Theme.primary[500],
  },
  buttonTextPrimary: {
    color: Theme.base.white,
  },
  buttonSecondary: {
    backgroundColor: Theme.base.white,
    borderWidth: 2,
    borderColor: Theme.primary[500],
  },
  buttonTextSecondary: {
    color: Theme.primary[500],
  },
});

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  testID?: string;
};

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  title,
  onPress,
  variant = "primary",
  testID,
}) => {
  const buttonStyle =
    variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary;
  const textStyle =
    variant === "primary"
      ? styles.buttonTextPrimary
      : styles.buttonTextSecondary;

  return (
    <TouchableOpacity
      style={[styles.container, buttonStyle]}
      onPress={onPress}
      activeOpacity={0.8}
      testID={testID}
    >
      <Paragraph style={textStyle} weight="demi">
        {title}
      </Paragraph>
    </TouchableOpacity>
  );
};
