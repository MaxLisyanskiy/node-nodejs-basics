import { createUnzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ErrorMsg = "FS operation failed";

const decompress = async () => {
  const inputPath = path.join(__dirname, "files", "archive.gz");
  const outputPath = path.join(__dirname, "files", "fileToCompress.txt");

  try {
    const gzip = createUnzip();
    const source = createReadStream(inputPath);
    const destination = createWriteStream(outputPath);
    await pipeline(source, gzip, destination);

    console.log("Decompress succeeded!");
  } catch (err) {
    throw new Error(ErrorMsg);
  }
};

await decompress();
