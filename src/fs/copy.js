import fs from "fs/promises";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ErrorMsg = "FS operation failed";

const copy = async () => {
  const folderPath = path.join(__dirname, "files");
  const copyFolderPath = path.join(__dirname, "files_copy");

  try {
    await fs.access(folderPath);
    await fs.mkdir(copyFolderPath);
  } catch (error) {
    throw new Error(ErrorMsg);
  }

  try {
    await fs.cp(folderPath, copyFolderPath, { recursive: true });
  } catch (error) {
    throw new Error(ErrorMsg);
  }
};

await copy();
