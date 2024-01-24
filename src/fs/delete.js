import fs from "fs/promises";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ErrorMsg = "FS operation failed";

const remove = async () => {
  const filePath = path.join(__dirname, "files", "fileToRemove.txt");

  try {
    await fs.unlink(filePath);
  } catch (err) {
    throw new Error(ErrorMsg);
  }
};

await remove();
