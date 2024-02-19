import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { minify } from "@swc/core";
import { fileURLToPath } from 'url';
import * as beautify from 'js-beautify';

// Path to the three.js file
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');
const sourcePath = resolve(__dirname, 'node_modules/@google/model-viewer/dist/model-viewer.js');

// Read the content of the three.js file
const content = readFileSync(sourcePath, "utf-8");

// Minify the content using swc
const { code, map } = await minify(content, {
  module: true,
  ecma: 2015,
  mangle: false
});

// Write the minified content back to the file
writeFileSync('output.js', code, "utf-8");

writeFileSync('out.js', beautify.default.js(code, {
  indent_size: 4,
  indent_with_tabs: true
}), "utf-8");

console.log("Minification completed.");
