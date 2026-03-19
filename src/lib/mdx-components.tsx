import type { MDXComponents } from "mdx/types";

// Whitelist of safe MDX components — blocks script, iframe, embed, object
export const mdxComponents: MDXComponents = {
  // Block dangerous elements by rendering nothing
  script: () => null,
  iframe: () => null,
  embed: () => null,
  object: () => null,
  // Allow safe elements with default rendering (pass-through)
};
