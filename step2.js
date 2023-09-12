"use strict";

const fsP = require('fs/promises');
// read from passed in file in directory
async function cat(path) {
  console.log("function ran");
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log("file contents", contents);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

}


// make fetch to url and return html
async function webCat(url) {

  try {
    const resp = await fetch(url);
    const html = await resp.text();
    console.log(html);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

}

if (URL.canParse(process.argv[2])) {
  webCat(process.argv[2]);
}
else {
  cat(process.argv[2]);
}