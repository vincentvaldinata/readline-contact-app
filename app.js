const contacts = require("./contacts");

const main = async () => {
  const nama = await contacts.makeQuestion("Masukkan Nama Anda : ");
  const email = await contacts.makeQuestion("Masukkan Email Anda : ");

  contacts.simpanContact(nama,email)
};

main();
