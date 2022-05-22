import { Row } from "elements/layout/Row";
import { Paragraph } from "elements/typography/Paragraph";
import { testIds } from "features/stackoveflow/test-ids";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Theme } from "theme";

const styles = StyleSheet.create({
  badge: {
    height: 8,
    width: 8,
    borderRadius: 4,
  },
});

export type UserCardReputationProps = {
  reputation: number;
  gold: number;
  silver: number;
  bronze: number;
};

export const UserCardReputation: React.FC<UserCardReputationProps> = ({
  reputation,
  gold,
  silver,
  bronze,
}) => {
  return (
    <Row marginTop={8} gap={16}>
      <Paragraph
        size="xs"
        weight="demi"
        testID={testIds.userCardReputation.reputation}
      >
        {reputation}
      </Paragraph>
      <Row>
        {gold && (
          <Row alignItems="center" gap={8}>
            <View
              style={[styles.badge, { backgroundColor: Theme.badge.gold }]}
            />
            <Paragraph
              size="xs"
              color={Theme.text.secondary}
              testID={testIds.userCardReputation.gold}
            >
              {gold}
            </Paragraph>
          </Row>
        )}

        {silver && (
          <Row alignItems="center" gap={8}>
            <View
              style={[styles.badge, { backgroundColor: Theme.badge.silver }]}
            />
            <Paragraph
              size="xs"
              color={Theme.text.secondary}
              testID={testIds.userCardReputation.silver}
            >
              {silver}
            </Paragraph>
          </Row>
        )}

        {bronze && (
          <Row alignItems="center" gap={8}>
            <View
              style={[styles.badge, { backgroundColor: Theme.badge.bronze }]}
            />
            <Paragraph
              size="xs"
              color={Theme.text.secondary}
              testID={testIds.userCardReputation.bronze}
            >
              {bronze}
            </Paragraph>
          </Row>
        )}
      </Row>
    </Row>
  );
};
