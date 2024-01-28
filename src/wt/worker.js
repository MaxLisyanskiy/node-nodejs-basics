import { workerData, parentPort } from "worker_threads";

const ErrorMsg = "FS operation failed";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  try {
    const result = nthFibonacci(workerData);
    parentPort.postMessage(result);
  } catch (err) {
    throw new Error(ErrorMsg);
  }
};

sendResult();
