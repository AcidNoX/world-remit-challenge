import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Theme } from "theme";

const AVATAR_HEIGHT = 60;
const AVATAR_BORDER_WIDTH = 3;
const AVATAR_PADDING = 4;
const AVATAR_IMAGE_HEIGHT =
  AVATAR_HEIGHT - AVATAR_BORDER_WIDTH * 2 - AVATAR_PADDING * 2;
const AVATAR_IMAGE_RADIUS = AVATAR_IMAGE_HEIGHT * 0.5;

const styles = StyleSheet.create({
  container: {
    borderWidth: AVATAR_BORDER_WIDTH,
    borderColor: Theme.primary[500],
    padding: AVATAR_PADDING,
    height: AVATAR_HEIGHT,
    width: AVATAR_HEIGHT,
    borderRadius: AVATAR_HEIGHT * 0.5,
  },
  image: {
    height: AVATAR_IMAGE_HEIGHT,
    width: AVATAR_IMAGE_HEIGHT,
    borderRadius: AVATAR_IMAGE_RADIUS,
  },
});

type UserCardAvatarProps = {
  uri: string;
};

export const UserCardAvatar: React.FC<UserCardAvatarProps> = ({ uri }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
};
