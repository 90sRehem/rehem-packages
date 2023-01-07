import { capitalizeFirstLetter } from "../../utils";

export function createHook(name: string) {
  return `
  export interface I${capitalizeFirstLetter(name)}Props {}
  export function ${name}({}: I${capitalizeFirstLetter(name)}Props) {
    return {};
  };
  `;
}
