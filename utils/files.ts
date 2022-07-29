export const bytesToSizeFormatter = (bytes: number) => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "n/a";
  const parsedInput = parseInt(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    10
  );
  if (parsedInput === 0) return `${bytes} ${sizes[parsedInput]})`;
  return `${(bytes / 1024 ** parsedInput).toFixed(1)} ${sizes[parsedInput]}`;
};
