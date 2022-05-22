import { act, renderHook } from "@testing-library/react-hooks";
import { useStackoverflowStore } from "features/stackoveflow/stores/stackoverflow.store";

describe("StackoverflowStore tests", () => {
  it("Should update followed list with followed ids", () => {
    const store = renderHook(() => useStackoverflowStore());

    expect(store.result.current.followed.length).toEqual(0);

    act(() => {
      store.result.current.follow(1);
    });

    expect(store.result.current.followed).toEqual([1]);
  });

  it("Should update followed list when unfollowed", () => {
    const store = renderHook(() => useStackoverflowStore());

    expect(store.result.current.followed).toEqual([]);

    act(() => {
      store.result.current.follow(1);
      store.result.current.follow(2);
    });

    expect(store.result.current.followed).toEqual([1, 2]);

    act(() => {
      store.result.current.unfollow(1);
    });

    expect(store.result.current.followed).toEqual([2]);
  });

  it("Should update blocked list with blocked ids", () => {
    const store = renderHook(() => useStackoverflowStore());

    expect(store.result.current.blocked.length).toEqual(0);

    act(() => {
      store.result.current.block(1);
    });

    expect(store.result.current.blocked).toEqual([1]);
  });
});
