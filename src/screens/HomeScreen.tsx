import { Screen } from "elements/layout/Screen";
import { ScreenHeader } from "elements/layout/ScreenHeader";
import { UserList } from "features/stackoveflow";
import React from "react";

export const HomeScreen: React.FC = ({}) => {
  return (
    <Screen>
      <ScreenHeader title="Top users" />
      <UserList />
    </Screen>
  );
};
