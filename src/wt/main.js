import path from "path";
import { fileURLToPath } from "url";

import { cpus } from "os";
import { Worker } from "worker_threads";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ErrorMsg = "FS operation failed";

const performCalculations = async () => {
  const filePath = path.join(__dirname, "worker.js");

  const numCores = cpus().length;
  const workers = [];

  try {
    for (let i = 0; i < numCores; i++) {
      workers.push(
        new Promise((resolve) => {
          const newWorker = new Worker(filePath, { workerData: i + 10 });

          newWorker.on("message", (data) => {
            resolve({
              status: "resolved",
              data,
            });
          });
          newWorker.on("error", () => {
            reject({
              status: "error",
              data: null,
            });
          });
        })
      );
    }

    const result = await Promise.all(workers);
    console.log(result);
  } catch (err) {
    throw new Error(ErrorMsg);
  }
};

await performCalculations();
