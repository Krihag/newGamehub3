const chatContainer = document.querySelector(".chat-container");
const chatIcon = document.querySelector(".chat-icon");
const chatBoxContainer = document.querySelector(".chat-box-container");
const closeChat = document.querySelector(".fa-xmark");
const startChat = document.querySelector(".start-chat-btn");
const nameInput = document.querySelector(".name-input");

const chatBox = document.querySelector(".chat-function ");

chatIcon.addEventListener("click", function () {
  chatBoxContainer.classList.toggle("hide-item");
  chatIcon.classList.toggle("hide-item");
});

closeChat.addEventListener("click", function () {
  chatBoxContainer.classList.toggle("hide-item");
  chatIcon.classList.toggle("hide-item");
});

startChat.addEventListener("click", async function (e) {
  e.preventDefault();
  const lowerCaseName = nameInput.value;
  const username =
    lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);
  let chatBotName = "Michael";
  chatBox.innerHTML = "";

  // if (username === "Truls") {
  //   chatBotName = "Ole";
  // }

  const displayedName = document.createElement("div");
  displayedName.classList.add("chat-bot-name");
  displayedName.textContent = `Chatting with: ${chatBotName}`;

  const chatTextContainer = document.createElement("div");
  chatTextContainer.classList.add("chat-text-container");

  const chatTextOne = document.createElement("div");
  chatTextContainer.append(chatTextOne);

  chatTextOne.textContent = `${chatBotName} is typing...`;

  const questionInput = document.createElement("textarea");
  questionInput.classList.add("chat-question-box");

  const sendBtn = document.createElement("button");
  sendBtn.classList.add("send-btn");
  sendBtn.classList.add("chat-button");
  sendBtn.textContent = "Send";

  chatBox.append(displayedName, chatTextContainer, questionInput, sendBtn);
  setTimeout(() => {
    chatTextOne.textContent = `${chatBotName}: Hello ${username}, my name is ${chatBotName}. What can I help you with?`;
  }, 5000);

  sendBtn.addEventListener("click", function () {
    const question = questionInput.value;
    const questionOne = document.createElement("div");
    questionOne.textContent = `You: ${question}`;

    questionInput.value = "";
    const newAnswer = document.createElement("div");
    chatTextContainer.append(questionOne, newAnswer);
    setTimeout(
      () => (newAnswer.textContent = `${chatBotName} is typing...`),
      1200
    );
    setTimeout(() => {
      newAnswer.textContent = `${chatBotName}: Thanks for your inquery. My colleague will call you within 5-10 minutes for further assistance..`;
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

const footerBtn = document.querySelector(".subscribe-button");
const footerInput = document.querySelector(".footer-input");
const newsText = document.querySelector(".newsletter-subtext");

footerBtn.addEventListener("click", function (e) {
  const inputVal = footerInput.value;
  footerInput.style.display = "none";

  footerBtn.style.width = "100%";
  footerBtn.textContent = "You are now subscribed";
  footerBtn.style.background = "#a3ec4c";
  newsText.textContent = `Confirmation email will be sent to: ${inputVal}`;
  footerBtn.style.transition = ".5s ease-in";
});
