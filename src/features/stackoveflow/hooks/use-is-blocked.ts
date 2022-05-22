import { useMemo } from "react";
import { useStackoverflowStore } from "./../stores/stackoverflow.store";

/**
 * Returns wether the user is blocked
 * @param userId
 * @returns
 */
export const useIsBlocked = (userId: number) => {
  const blocked = useStackoverflowStore((x) => x.blocked);

  return useMemo<boolean>(() => {
    const index = blocked.findIndex((x) => x === userId);
    return index === -1 ? false : true;
  }, [userId, blocked]);
};
