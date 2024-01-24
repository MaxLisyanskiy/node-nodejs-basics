import fs from "fs/promises";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ErrorMsg = "FS operation failed";

const read = async () => {
  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  try {
    const text = await fs.readFile(filePath, "utf8");
    console.log(text);
  } catch (err) {
    throw new Error(ErrorMsg);
  }
};

await read();
