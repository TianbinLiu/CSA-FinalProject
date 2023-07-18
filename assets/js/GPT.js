const dialogElement = document.getElementById("dialog");
const userInputElement = document.getElementById("user-input");
const submitButton = document.getElementById("submit-btn");

let userInputArray = [];

function appendUserInput(input) {
  const userInputItem = document.createElement("div");
  userInputItem.innerText = input;
  dialogElement.appendChild(userInputItem);
}

function appendResponse(response) {
  const responseItem = document.createElement("div");
  responseItem.innerText = response;
  dialogElement.appendChild(responseItem);
}

function handleUserInput() {
  const userInput = userInputElement.value;
  userInputArray.push(userInput);
  appendUserInput(userInput);
  userInputElement.value = "";

  fetch("https://chatgpttesting.lol/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: userInput,
    }),
  })
    .then(response => response.json())
    .then(data => {
      appendResponse(data.output);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

submitButton.addEventListener("click", handleUserInput);
userInputElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleUserInput();
  }
});
