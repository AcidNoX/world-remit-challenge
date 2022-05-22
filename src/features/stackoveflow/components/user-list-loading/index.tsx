import { Column } from "elements/layout/Column";
import { Paragraph } from "elements/typography/Paragraph";
import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({});

type UserListLoadingProps = {};

export const UserListLoading: React.FC<UserListLoadingProps> = ({}) => {
  return (
    <Column
      testID="user-list-loading"
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
    >
      <Paragraph>Loading...</Paragraph>
    </Column>
  );
};
