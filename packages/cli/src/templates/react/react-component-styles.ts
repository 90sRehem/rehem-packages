export function createComponentStyles(name) {
  return `import styled from "styled-components";
export const ${name}Container = styled.div(props => ({}));`;
}
