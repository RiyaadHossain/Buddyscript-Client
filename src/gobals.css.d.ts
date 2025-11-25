// → Create this file exactly at the project root
// File: globals.css.d.ts   (or styles.d.ts)

declare module '*.css' {
  const content: string;
  export default content;
}
