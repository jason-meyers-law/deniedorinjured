/** Render a markdown *string* (a frontmatter field such as an answer
 * page's direct answer) to HTML with the same pipeline and defaults
 * Astro uses for collection bodies. Bodies themselves still go
 * through `render(entry)`; this is only for fields. */
import {
  createMarkdownProcessor,
  markdownConfigDefaults,
} from "@astrojs/markdown-remark";

const processor = await createMarkdownProcessor(markdownConfigDefaults);

export async function renderMarkdown(text: string): Promise<string> {
  return (await processor.render(text)).code;
}
