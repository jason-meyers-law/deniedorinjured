/** Intrinsic width/height of an image under public/, read at build
 * time so <img> tags carry real dimensions (no layout shift) even
 * after an editor swaps the file through the CMS. */
import { fileURLToPath } from "node:url";
import { publicDir } from "astro:config/server";
import sharp from "sharp";

export async function imageSize(sitePath: string): Promise<{ width: number; height: number }> {
  const file = fileURLToPath(new URL(sitePath.replace(/^\//, ""), publicDir));
  const { width, height } = await sharp(file).metadata();
  if (!width || !height) throw new Error(`Could not read image dimensions: ${sitePath}`);
  return { width, height };
}
