const fs = require("fs");
const transposition = (message) => {
  let rightWord = "";
  let leftWord = "";

  console.log(message);
  message = message.split(" ").join("");

  for (let i = 0; i < message.length; i++) {
    if (i % 2 != 0 && i != 0) {
      leftWord = leftWord + message[i];
      continue;
    }
    rightWord = rightWord + message[i];
  }

  let newMessage = rightWord + leftWord;

  console.log(newMessage);

  fs.appendFileSync(
    "output.txt",
    "transposition technique: " + newMessage + "\n"
  );
};

module.exports = transposition;
