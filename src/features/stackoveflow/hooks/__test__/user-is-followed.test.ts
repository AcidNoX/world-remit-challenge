import { act, renderHook } from "@testing-library/react-hooks";
import { useStackoverflowStore } from "features/stackoveflow/stores/stackoverflow.store";
import { useIsFollowed } from "./../../hooks/use-is-followed";

describe("useIsFollowed tests", () => {
  it("Should not be followed by default", () => {
    const userId = 1;
    const { result } = renderHook(() => useIsFollowed(userId));

    act(() => {});

    expect(result.current).toBeFalsy();
  });

  it("Should be followed after following", () => {
    const userId = 1;

    const store = renderHook(() => useStackoverflowStore());
    const isFollowed = renderHook(() => useIsFollowed(userId));

    act(() => {
      store.result.current.follow(userId);
    });

    expect(isFollowed.result.current).toBeTruthy();
  });

  it("Should not be followed after unfollowing", () => {
    const userId = 1;

    const store = renderHook(() => useStackoverflowStore());
    const isFollowed = renderHook(() => useIsFollowed(userId));

    act(() => {
      store.result.current.follow(userId);
    });

    expect(isFollowed.result.current).toBeTruthy();

    act(() => {
      store.result.current.unfollow(userId);
    });

    expect(isFollowed.result.current).toBeFalsy();
  });
});
