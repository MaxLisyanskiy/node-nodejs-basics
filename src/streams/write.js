import fs from "fs";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ErrorMsg = "FS operation failed";

const write = async () => {
  const filePath = path.join(__dirname, "files", "fileToWrite.txt");

  try {
    const stream = fs.createWriteStream(filePath);
    console.log(
      "Enter the text below and press 'Enter'. (Press CTRL+C to close terminal)"
    );
    process.stdin.pipe(stream);
  } catch (err) {
    throw new Error(ErrorMsg);
  }
};

await write();
