import { Heading } from "elements/typography/Heading";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Theme } from "theme";
import { Row } from "./Row";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.secondary[500],
  },
});

type ScreenHeaderProps = {
  title: string;
};

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Row padding={16} justifyContent="center">
        <Heading textAlign="center" size="sm" color={Theme.base.white}>
          {title}
        </Heading>
      </Row>
    </View>
  );
};
