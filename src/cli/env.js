const parseEnv = () => {
  const envs = process.env;
  const keys = Object.entries(envs).filter(([key]) => key.startsWith("RSS_"));

  const result = keys.map((key) => `${key[0]}=${key[1]}`).join("; ");

  console.log(result);
};

parseEnv();
