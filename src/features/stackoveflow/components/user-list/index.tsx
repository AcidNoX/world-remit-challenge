import { useUserQuery } from "features/stackoveflow/hooks/use-user-query";
import { UserModel } from "features/stackoveflow/types/user.model";
import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import { UserCard } from "../user-card";
import { UserListError } from "../user-list-error";
import { UserListLoading } from "../user-list-loading";

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
  },
  contentStyle: {
    paddingTop: 8,
  },
});

type UserListProps = {};

export const UserList: React.FC<UserListProps> = ({}) => {
  const { isLoading, data, error, refetch } = useUserQuery();

  if (isLoading) {
    return <UserListLoading />;
  }

  if (error) {
    return <UserListError refetch={refetch} />;
  }

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.contentStyle}
      data={data?.items}
      keyExtractor={(item) => item.user_id.toString()}
      renderItem={({ item }: ListRenderItemInfo<UserModel>) => (
        <UserCard user={item} />
      )}
    />
  );
};
