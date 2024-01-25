import { Transform } from "stream";

const ErrorMsg = "FS operation failed";

const transform = async () => {
  try {
    const transformStream = new Transform({
      transform(chunk, _, callback) {
        this.push(chunk.toString().split("").reverse().join(""));
        callback();
      },
    });

    console.log(
      "Enter the text below and press 'Enter'. (Press CTRL+C to close terminal)"
    );

    process.stdin.pipe(transformStream);

    transformStream.pipe(process.stdout);
  } catch (err) {
    throw new Error(ErrorMsg);
  }
};

await transform();
