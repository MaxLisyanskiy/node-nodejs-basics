import fs from "fs";

import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ErrorMsg = "FS operation failed";

const calculateHash = async () => {
  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

  try {
    const stream = fs.createReadStream(filePath, { encoding: "utf8" });
    const newHashFile = crypto.createHash("sha256");

    stream.on("data", (chunk) => {
      newHashFile.update(chunk);
    });

    stream.on("close", () => {
      const result = newHashFile.digest("hex");
      console.log(result);
    });

    stream.on("error", () => {
      throw new Error(ErrorMsg);
    });
  } catch (err) {
    throw new Error(ErrorMsg);
  }
};

await calculateHash();
