export function createIndex(name: string) {
  return `export * from "./${name}";`;
}
