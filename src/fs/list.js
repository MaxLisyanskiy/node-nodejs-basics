import fs from "fs/promises";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ErrorMsg = "FS operation failed";

const list = async () => {
  const folderPath = path.join(__dirname, "files");

  try {
    await fs.access(folderPath);

    const files = await fs.readdir(folderPath);
    console.log(files);
  } catch (error) {
    throw new Error(ErrorMsg);
  }
};

await list();
