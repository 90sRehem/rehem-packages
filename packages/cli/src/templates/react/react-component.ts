export function createComponent(name: string) {
  return `
  import { ${name}Container } from "./${name}.styles";
  export interface I${name}Props {}
  export function ${name}({}: I${name}Props) {
    return <${name}Container>Hello 👋, I am a ${name} component.</${name}Container>;
  };
  `;
}
