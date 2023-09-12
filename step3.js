"use strict";

const fsP = require('fs/promises');
// read from passed in file in directory
async function cat(path) {
  console.log("function ran");
  //TODO: Only put code that is expected to fail in try block (not logging).
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
//TODO: Only put fetch, which may fail, in the try block.
  try {
    const resp = await fetch(url);
    const html = await resp.text();
    console.log(html);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

}

//Writes data from a source (URL or file) to the endpoint.
async function catWrite(source, endpoint) {
  //TODO: Decompose file writing into its own function.
  try {
    if (URL.canParse(source)) {
      const resp = await fetch(source);
      const html = await resp.text();
      await fsP.writeFile(endpoint, html, "utf8");
    } else {
      let content = await fsP.readFile(source, "utf8");
      await fsP.writeFile(endpoint, content, "utf8");
    }

  } catch (err) {
    console.log(err);
  }
}



if (process.argv[2] === "--out") {
  catWrite(process.argv[4], process.argv[3]);
} else {

  if (URL.canParse(process.argv[2])) {
    webCat(process.argv[2]);
  }
  else {
    cat(process.argv[2]);
  }
}