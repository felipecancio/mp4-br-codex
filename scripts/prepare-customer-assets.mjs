import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const inputDirectory = process.argv[2];
if (!inputDirectory) throw new Error("Informe a pasta com a mockup e os prints d1 a d6.");
const destination = path.resolve("public/testimonials");
await mkdir(destination, { recursive: true });

for (let index = 1; index <= 6; index++) {
  const extension = index === 1 ? "png" : "jpeg";
  const result = await sharp(path.join(inputDirectory, `d${index}.${extension}`))
    .webp({ quality: 92, effort: 5 })
    .toFile(path.join(destination, `conversa-${index}.webp`));
  console.log(`Conversa ${index}: ${Math.round(result.size / 1024)} KB`);
}

const mockup = await sharp(path.join(inputDirectory, "mockup mp4.png"))
  .trim()
  .webp({ quality: 92, alphaQuality: 100, effort: 5 })
  .toFile(path.resolve("public/mockup-mp4.webp"));
console.log(`Mockup: ${mockup.width} × ${mockup.height}, ${Math.round(mockup.size / 1024)} KB`);
