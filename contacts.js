const fs = require("node:fs");
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const { resolve } = require("node:path");
const { rejects } = require("node:assert");
const { resourceLimits } = require("node:worker_threads");

const rl = readline.createInterface({ input, output });

dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

filePath = "./data/contacts.json";
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]");
}

const makeQuestion = (question) => {
  return new Promise((resolve, rejects) => {
    rl.question(question, (question) => {
      resolve(question);
    });
  });
};

const simpanContact = (nama, email) => {
  contact = { nama, email };
  const rawFile = fs.readFileSync(filePath, "utf-8");
  const contacts = JSON.parse(rawFile);
  contacts.push(contact);
  fs.writeFileSync(filePath, JSON.stringify(contacts));
  console.log(`Terima Kasih sudah menginput data !!!`);
  rl.close();
};

module.exports = { makeQuestion, simpanContact };
