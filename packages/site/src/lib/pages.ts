/** Look up the prose entry for a fixed route (src/content/pages/<id>.md).
 * Throws at build time if it is missing, so a deleted content file
 * fails the build rather than shipping an empty page. */
import { getEntry, render } from "astro:content";

export async function pageContent(id: string) {
  const entry = await getEntry("pages", id);
  if (!entry) throw new Error(`Missing page content: src/content/pages/${id}.md`);
  const { Content } = await render(entry);
  return { data: entry.data, Content };
}
