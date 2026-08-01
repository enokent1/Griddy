import { codeToHtml } from "shiki";

export async function createHighlighter(
  code: string,
  lang: "html" | "css",
): Promise<string> {
  return codeToHtml(code, {
    lang,
    theme: "github-dark",
    colorReplacements: {
      "#24292e": "transparent",
    },
  });
}
