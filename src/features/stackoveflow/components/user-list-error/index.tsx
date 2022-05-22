import { Button } from "elements/buttons/Button";
import { Column } from "elements/layout/Column";
import { Paragraph } from "elements/typography/Paragraph";
import React from "react";

type UserListErrorProps = {
  refetch: () => void;
};

export const UserListError: React.FC<UserListErrorProps> = ({ refetch }) => {
  return (
    <Column
      testID="user-list-error"
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
      gap={16}
    >
      <Paragraph>Oops! Something went wrong!</Paragraph>
      <Button title="Try again" onPress={() => refetch()} />
    </Column>
  );
};
