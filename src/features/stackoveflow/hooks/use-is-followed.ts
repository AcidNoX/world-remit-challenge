import { useMemo } from "react";
import { useStackoverflowStore } from "./../stores/stackoverflow.store";

/**
 * Returns wether the user is followed
 * @param userId
 * @returns
 */
export const useIsFollowed = (userId: number) => {
  const followed = useStackoverflowStore((x) => x.followed);

  return useMemo<boolean>(() => {
    const index = followed.findIndex((x) => x === userId);
    return index === -1 ? false : true;
  }, [userId, followed]);
};
