"use strict";

const fsP = require('fs/promises');

async function cat(path) {
  console.log("function ran")
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log("file contents", contents);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

}

cat(process.argv[2]);

//TODO: minimize extra text/writin in try/catch