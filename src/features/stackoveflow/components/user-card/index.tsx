import { Button } from "elements/buttons/Button";
import { Column } from "elements/layout/Column";
import { Row } from "elements/layout/Row";
import { Paragraph } from "elements/typography/Paragraph";
import { useIsBlocked } from "features/stackoveflow/hooks/use-is-blocked";
import { useIsFollowed } from "features/stackoveflow/hooks/use-is-followed";
import { useStackoverflowStore } from "features/stackoveflow/stores/stackoverflow.store";
import { testIds } from "features/stackoveflow/test-ids";
import { UserModel } from "features/stackoveflow/types/user.model";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Theme } from "theme";
import { UserCardAvatar } from "./UserCardAvatar";
import { UserCardReputation } from "./UserCardReputation";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.base.white,
  },
  followed: {
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderColor: Theme.primary[500],
    borderRadius: 4,
  },
  blocked: {
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderColor: Theme.grey[500],
    borderRadius: 4,
  },
});

type UserCardProps = {
  user: UserModel;
};

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [showActions, setShowActions] = useState<boolean>(false);

  const store = useStackoverflowStore();
  const isFollowed = useIsFollowed(user.user_id);
  const isBlocked = useIsBlocked(user.user_id);

  const handleFollow = () => {
    store.follow(user.user_id);
    setShowActions(false);
  };

  const handleUnfollow = () => {
    store.unfollow(user.user_id);
    setShowActions(false);
  };

  const handleBlock = () => {
    store.block(user.user_id);
    store.unfollow(user.user_id);
    setShowActions(false);
  };

  return (
    <Column
      marginBottom={8}
      paddingHorizontal={16}
      paddingVertical={8}
      style={[styles.container, isBlocked && { opacity: 0.5 }]}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setShowActions((prev) => !prev)}
        disabled={isBlocked}
        testID={testIds.userCard.pressable}
      >
        <Row gap={16} alignItems="center">
          <UserCardAvatar uri={user.profile_image} />
          <Column>
            <Row alignItems="center" gap={16}>
              <Paragraph size="lg" weight="demi" testID={testIds.userCard.name}>
                {user.display_name}
              </Paragraph>
              {isFollowed && (
                <Paragraph
                  size="xs"
                  color={Theme.primary[500]}
                  style={styles.followed}
                  weight="demi"
                  testID={testIds.userCard.followed}
                >
                  followed
                </Paragraph>
              )}
              {isBlocked && (
                <Paragraph
                  size="xs"
                  color={Theme.grey[500]}
                  style={styles.blocked}
                  weight="demi"
                  testID={testIds.userCard.blocked}
                >
                  blocked
                </Paragraph>
              )}
            </Row>
            <Paragraph
              size="sm"
              color={Theme.text.secondary}
              testID={testIds.userCard.location}
            >
              {user.location}
            </Paragraph>
            <UserCardReputation
              reputation={user.reputation}
              {...user.badge_counts}
            />
          </Column>
        </Row>
      </TouchableOpacity>
      {showActions && (
        <Row gap={8} paddingTop={16} testID={testIds.userCard.actions}>
          {!isFollowed && (
            <Button
              title="Follow"
              onPress={handleFollow}
              testID={testIds.userCard.follow}
            />
          )}
          {isFollowed && (
            <Button
              title="Unfollow"
              onPress={handleUnfollow}
              testID={testIds.userCard.unfollow}
            />
          )}
          <Button
            title="Block"
            variant="secondary"
            onPress={handleBlock}
            testID={testIds.userCard.block}
          />
        </Row>
      )}
    </Column>
  );
};
