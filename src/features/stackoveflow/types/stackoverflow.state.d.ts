import { StateCreator } from "zustand";
import { PersistOptions } from "zustand/middleware";

export type StackOverflowState = {
  followed: Array<number>;
  blocked: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  block: (userId: number) => void;
  unblock: (userId: number) => void;
};

type StackoverflowPersist = (
  config: StateCreator<StackOverflowState>,
  options: PersistOptions<StackOverflowState>
) => StateCreator<StackOverflowState>;
