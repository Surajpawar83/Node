import { readFile } from "node:fs/promises";

async function main() {
  console.log("READ FILE DEMO");

  let filepath = "C:/Users/pawar/Desktop/mynewfile.txt";

  // let output = readFile(filepath);
  // let output = await readFile(filepath);
  let output = await readFile(filepath, { encoding: "utf8" });

  console.log(output);
}

main();
