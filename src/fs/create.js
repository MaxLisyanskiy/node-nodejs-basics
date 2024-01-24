import fs from "fs/promises";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ErrorMsg = "FS operation failed";

const create = async () => {
  const filePath = path.join(__dirname, "files", "fresh.txt");

  try {
    await fs.access(filePath);
    throw new Error(ErrorMsg);
  } catch (err) {
    if (err.message === ErrorMsg) throw err;

    await fs.writeFile(filePath, "I am fresh and young");
  }
};

await create();
