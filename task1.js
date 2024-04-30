const fs = require("fs");

let alphabet = fs.readFileSync("alphabet.txt", "utf8");
alphabet = alphabet.toLowerCase();

const substitution = () => {
  let message = fs.readFileSync("message.txt", "utf8");
  message = message.toLowerCase();

  let newMessage = "";

  for (let i = 0; i < message.length; i++) {
    let pos = alphabet.indexOf(message[i]);
    if (pos > -1) {
      newMessage = newMessage + alphabet[(pos + 3) % alphabet.length];
      continue;
    }
    newMessage = newMessage + message[i];
  }

  fs.appendFileSync(
    "output.txt",
    "substitution technique: " + newMessage + "\n"
  );
  console.log(newMessage);
  return newMessage;
};

module.exports = substitution;
