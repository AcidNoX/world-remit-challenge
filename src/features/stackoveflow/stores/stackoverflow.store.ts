import { produce } from "immer";
import create from "zustand";
import { StackOverflowState } from "../types/stackoverflow.state";

export const useStackoverflowStore = create<StackOverflowState>((set, get) => ({
  followed: [],
  blocked: [],
  follow: (userId) =>
    set(
      produce<StackOverflowState>((draft) => {
        const index = draft.followed.findIndex((x) => x === userId);
        if (index === -1) {
          draft.followed.push(userId);
        }
      })
    ),
  unfollow: (userId) =>
    set(
      produce<StackOverflowState>((draft) => {
        const index = draft.followed.findIndex((x) => x === userId);
        if (index !== -1) {
          draft.followed.splice(index, 1);
        }
      })
    ),
  block: (userId) =>
    set(
      produce<StackOverflowState>((draft) => {
        const index = draft.blocked.findIndex((x) => x === userId);
        if (index === -1) {
          draft.blocked.push(userId);
        }
      })
    ),
  unblock: (userId) =>
    set(
      produce<StackOverflowState>((draft) => {
        const index = draft.blocked.findIndex((x) => x === userId);
        if (index !== -1) {
          draft.blocked.splice(index, 1);
        }
      })
    ),
}));
