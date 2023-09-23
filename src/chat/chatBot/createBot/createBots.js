import ole from "./ole.js";

export default function createBots() {
  function Bot(
    name,
    species,
    type,
    expression,
    phrase,
    replyOne,
    replyTwo,
    finalReply
  ) {
    (this.name = name),
      (this.species = species),
      (this.type = type),
      (this.expression = expression),
      (this.phrase = phrase),
      (this.replyOne = replyOne);
    this.finalReply = finalReply;

    this.introduce = function () {
      return `Hello im ${this.name} the ${this.type} ${this.species}. ${this.expression}, `;
    };

    this.isTyping = function () {
      return `${this.name} is typing...`;
    };
  }

  const allBots = [];
  allBots.push(
    new Bot(
      "Ole",
      "Bird",
      "Dangerous",
      "Leave me alone!",
      false,
      "LEAVE. ME. ALONE! I am warning you...",
      "",
      false
    )
  );
  allBots.push(
    new Bot(
      "Lisa",
      "Butterfly",
      "Happy",
      "What can I do to help you today, darling? ",
      "I would love to help with that honey! Please give me a moment",
      "I will fix that for you at once sweetheart! Is there anything else I can do for you sugarbear?",
      "Everything is in perfect order Pumpkin",
      "Thank you for chosing GameHub - Make love not war <3"
    )
  );
  allBots.push(
    new Bot(
      "Kurt",
      "Cat",
      "Careless",
      "Ugh.... What do you want?",
      false,
      "Sigh.. since you insist...",
      "I fixed it, can you stop bothering me now?",
      "k, bye"
    )
  );
  allBots.push(
    new Bot(
      "Rolf",
      "Panda",
      "Drunk",
      "BuuuuuuUUUurp",
      "Oh, hello there HICK...",
      "If its not abou Tequila, I am certainEly not avalable",
      "My name is Rofl",
      "Cherio miss Sophie"
    )
  );
  allBots.push(
    new Bot(
      "Dory",
      "goldfish",
      "Clumpsy",
      "Ooopsie, wut?",
      false,
      "Sorry, I forgot your question. Can you repeat?",
      "Who are you? Who am i?",
      "Keep swimming"
    )
  );

  // allBots.forEach((bot) => console.log(bot.introduce()));
}
