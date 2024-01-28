const parseArgs = () => {
  const args = process.argv;

  const result = [];

  args.forEach((arg, i) => {
    if (arg.startsWith("--")) {
      result.push(`${arg.slice(2)} is ${args[i + 1]}`);
    }
  });

  console.log(result.join(", "));
};

parseArgs();
