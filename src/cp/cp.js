import { spawn } from "child_process";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ErrorMsg = "FS operation failed";

const spawnChildProcess = async (args) => {
  const filePath = path.join(__dirname, "files", "script.js");

  try {
    const child = spawn("node", [filePath, ...args], {
      stdio: ["pipe", "pipe", process.stderr],
    });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
  } catch (err) {
    throw new Error(ErrorMsg);
  }
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
