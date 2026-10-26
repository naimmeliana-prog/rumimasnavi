declare module '*.css';

declare module '*.mjs?url' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}
