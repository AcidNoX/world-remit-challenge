import { act, renderHook } from "@testing-library/react-hooks";
import { useIsBlocked } from "features/stackoveflow/hooks/use-is-blocked";
import { useStackoverflowStore } from "features/stackoveflow/stores/stackoverflow.store";

describe("useIsBlocked tests", () => {
  it("Should not be blocked by default", () => {
    const userId = 1;
    const { result } = renderHook(() => useIsBlocked(userId));

    expect(result.current).toBeFalsy();
  });

  it("Should be followed after following", () => {
    const userId = 1;

    const store = renderHook(() => useStackoverflowStore());
    const isBlocked = renderHook(() => useIsBlocked(userId));

    act(() => {
      store.result.current.block(userId);
    });

    expect(isBlocked.result.current).toBeTruthy();
  });
});
