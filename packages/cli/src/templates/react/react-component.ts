export function createComponent(name: string) {
  return `
  import { Container } from "./${name}.styles";
  export interface I${name}Props {}
  export function ${name}(_: I${name}Props) {
    return <Container>Hello 👋, I am a ${name} component.</Container>;
  };
  `;
}
