import { renderHook, act } from "@testing-library/react-hooks";
import { describe, it, expect } from "vitest";
import { useStep } from "./useSteps";

describe("useStep tests", () => {
  const steps = [{ id: "first" }, { id: "second" }];

  it("should returns first step as default", () => {
    const { result } = renderHook(() => useStep({ steps }));

    expect(result.current.currentStep).toEqual({ id: "first" });
  });

  it("should initializes initial step", () => {
    const initialStep = 1;
    const { result } = renderHook(() => useStep({ steps, initialStep }));

    expect(result.current.currentStep).toEqual({ id: "second" });
  });

  it("should returns current step index", () => {
    const initialStep = 1;
    const { result } = renderHook(() => useStep({ steps, initialStep }));

    expect(result.current.stepIndex).toEqual(initialStep);
  });

  it("should moves to the next step", () => {
    const { result } = renderHook(() => useStep({ steps }));

    act(() => {
      result.current.navigation.next();
    });

    expect(result.current.stepIndex).toEqual(1);
  });

  it("should returns last step if index greater than steps length", () => {
    const initialStep = 1;
    const { result } = renderHook(() => useStep({ steps, initialStep }));

    act(() => {
      result.current.navigation.next();
    });

    expect(result.current.stepIndex).toEqual(1);
  });

  it("should moves to the prev step", () => {
    const initialStep = 1;
    const { result } = renderHook(() => useStep({ steps, initialStep }));

    act(() => {
      result.current.navigation.prev();
    });

    expect(result.current.stepIndex).toEqual(0);
  });

  it("should returns first step if index less than zero", () => {
    const { result } = renderHook(() => useStep({ steps }));

    act(() => {
      result.current.navigation.prev();
    });

    expect(result.current.stepIndex).toEqual(0);
  });

  it("should moves to a concrete step by index", () => {
    const { result } = renderHook(() => useStep({ steps }));

    act(() => {
      result.current.navigation.go(1);
    });

    expect(result.current.stepIndex).toEqual(1);
  });

  it("should moves to a concrete step by id", () => {
    const { result } = renderHook(() => useStep({ steps }));

    act(() => {
      result.current.navigation.go("second");
    });

    expect(result.current.stepIndex).toEqual(1);
  });

  it("should sets a step as completed", () => {
    const { result } = renderHook(() => useStep({ steps }));

    act(() => {
      result.current.complete("first");
    });

    act(() => {
      result.current.complete("first");
    });

    expect(result.current.completed).toEqual(["first"]);
  });

  it("should complete current step if no args", () => {
    const { result } = renderHook(() => useStep({ steps }));

    act(() => {
      result.current.complete();
    });

    expect(result.current.completed).toEqual(["first"]);
  });

  it("should sets a step as uncompleted", () => {
    const { result } = renderHook(() => useStep({ steps }));

    act(() => {
      result.current.complete("first");
    });

    act(() => {
      result.current.complete("second");
    });

    act(() => {
      result.current.uncomplete("first");
    });

    expect(result.current.completed).toEqual(["second"]);
  });

  it("should uncomplete current step if no args", () => {
    const { result } = renderHook(() => useStep({ steps }));

    act(() => {
      result.current.complete("first");
    });

    act(() => {
      result.current.uncomplete();
    });

    expect(result.current.completed).toEqual([]);
  });

  it("should reset", () => {
    const { result } = renderHook(() => useStep({ steps }));

    act(() => {
      result.current.complete("first");
    });

    act(() => {
      result.current.navigation.go("second");
    });

    act(() => {
      result.current.reset();
    });

    expect(result.current.stepIndex).toEqual(0);
    expect(result.current.currentStep).toEqual({ id: "first" });
    expect(result.current.completed).toEqual([]);
  });
});
