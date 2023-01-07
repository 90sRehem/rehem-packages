export function createHookTests(name: string) {
  return `
  import { renderHook, act } from "@testing-library/react-hooks";
  import { describe, it, expect, vi, afterEach } from "vitest";
  import { ${name} } from "./${name}";

  describe("${name} tests", () => {
    afterEach(() => {
      vi.clearAllMocks();
    });

    it("should ...", () => {
      const { result, waitForNextUpdate } = renderHook(
        () => ${name}()
    );

      act(() => {
        result.current = "foo";
      });
      await waitForNextUpdate();

      expect(result.current).toEqual("foo");
    });
  });
  `;
}
