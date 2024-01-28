import fs from "fs";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ErrorMsg = "FS operation failed";

const read = async () => {
  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  try {
    const stream = fs.createReadStream(filePath, { encoding: "utf8" });

    stream.on("data", (text) => {
      process.stdout.write(text);
    });

    stream.on("error", () => {
      throw new Error(ErrorMsg);
    });
  } catch (err) {
    throw new Error(ErrorMsg);
  }
};

await read();
