import { readFileSync } from "fs";

const text = readFileSync(process.argv[2], "utf8").replace(/\\n/g, "\n").replace(/\\"/g, '"');

const perf = [...text.matchAll(/"performance":\s*\{[\s\S]*?"score":\s*([0-9.]+)/g)].map((m) =>
  Math.round(Number(m[1]) * 100),
);
console.log("performance:", perf);

for (const id of ["first-contentful-paint", "largest-contentful-paint", "total-blocking-time", "cumulative-layout-shift", "speed-index"]) {
  const vals = [
    ...text.matchAll(
      new RegExp(`"${id}":\\s*\\{[\\s\\S]*?"displayValue":\\s*"([^"]*)"[\\s\\S]*?"score":\\s*([0-9.]+)`, "g"),
    ),
  ].map((m) => `${m[1]} (${Math.round(Number(m[2]) * 100)})`);
  console.log(id + ":", vals);
}

const payloads = [...text.matchAll(/Total size was ([0-9,]+)/g)].map((m) => m[1] + " KiB");
console.log("payloads:", payloads);

const a11y = text.match(/"accessibility":\s*\{[\s\S]*?"score":\s*([0-9.]+)/);
const bp = text.match(/"best-practices":\s*\{[\s\S]*?"score":\s*([0-9.]+)/);
const seo = text.match(/"seo":\s*\{[\s\S]*?"score":\s*([0-9.]+)/);
console.log("a11y", a11y && Math.round(Number(a11y[1]) * 100));
console.log("bp", bp && Math.round(Number(bp[1]) * 100));
console.log("seo", seo && Math.round(Number(seo[1]) * 100));
