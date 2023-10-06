import chatBot from "./chatBot//chatBot.js";

const chatContainer = document.querySelector(".chat-container");
const chatIcon = document.querySelector(".chat-icon");
const chatBoxContainer = document.querySelector(".chat-box-container");
const closeChat = document.querySelector(".chat-close");
const startChat = document.querySelector(".start-chat-btn");
const nameInput = document.querySelector(".name-input");

const chatBox = document.querySelector(".chat-function ");

export default function chat() {
  chatIcon.addEventListener("click", function () {
    chatBoxContainer.classList.toggle("hide-item");
    chatIcon.classList.toggle("hide-item");
  });

  chatBot();
  // const bots = chatBot()
  const lisa = {
    name: "Lisa",
    firstText: "Hello. What can I help you with?",
    secondText:
      "Sorry, we are not able to help with that over chat. My colleague will call you within 5-10 minutes to help with this",

    bites: function () {},
    closeChat: false,
  };
  const namesArray = [
    lisa, // 0
  ];

  const randomNumber = Math.floor(Math.random() * namesArray.length);

  const randomName = namesArray[0];

  closeChat.addEventListener("click", function () {
    chatBoxContainer.classList.toggle("hide-item");
    chatIcon.classList.toggle("hide-item");
  });

  startChat.addEventListener("click", async function (e) {
    e.preventDefault();
    const lowerCaseName = nameInput.value;
    const username =
      lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);

    let chatBot = randomName;
    chatBox.innerHTML = "";

    const displayedName = document.createElement("div");
    displayedName.classList.add("chat-bot-name");
    displayedName.textContent = `Chatting with: ${chatBot.name}`;

    const chatTextContainer = document.createElement("div");
    chatTextContainer.classList.add("chat-text-container");

    const chatTextOne = document.createElement("div");
    chatTextContainer.append(chatTextOne);

    chatTextOne.textContent = `${chatBot.name} is typing...`;

    const questionInput = document.createElement("textarea");
    questionInput.placeholder = "Type here:";
    questionInput.classList.add("chat-question-box");

    const sendBtn = document.createElement("button");
    sendBtn.classList.add("send-btn");
    sendBtn.classList.add("chat-button");
    sendBtn.textContent = "Send";

    chatBox.append(displayedName, chatTextContainer, questionInput, sendBtn);
    setTimeout(() => {
      chatTextOne.textContent = chatBot.firstText;
    }, 5000);

    sendBtn.addEventListener("click", function () {
      const question = questionInput.value;
      const questionOne = document.createElement("div");
      questionOne.textContent = `You: ${question}`;

      questionInput.value = "";
      const newAnswer = document.createElement("div");
      chatTextContainer.append(questionOne, newAnswer);
      setTimeout(
        () => (newAnswer.textContent = `${chatBot.name} is typing...`),
        1200
      );
      setTimeout(() => {
        newAnswer.textContent = chatBot.secondText;
        const chatEnd = document.createElement("div");
        chatEnd.textContent = "Chat has ended..";

        questionInput.style.display = "none";
        sendBtn.style.display = "none";
        const endChatBtn = document.createElement("button");
        endChatBtn.classList.add("chat-button");
        endChatBtn.textContent = "Close Chat";

        chatBox.append(chatEnd, endChatBtn);
      }, 14000);
    });
  });
}
