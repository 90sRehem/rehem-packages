export function createComponentTests(name: string) {
  return `
  import { screen } from "@testing-library/react";
  import { describe, it, expect, vi } from "vitest";
  import { ${name} } from "./${name}";

  describe("${name} tests", () => {
    it("should render", () => {
        render(<${name} />);
        expect(screen.getByText("Hello 👋, I am a ${name} component.")).toBeInTheDocument();
    });
  });
  `;
}
