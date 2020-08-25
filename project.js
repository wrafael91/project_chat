$( "li" ).hover(function() {
    $( this ).toggleClass( "active" ).next().stop( true, true )
});

$("li").click(function() {
  $(this).toggleClass()
});

$("form").on('submit', function(event) {
  event.preventDefault();
});

const messages = [];
const $input = document.querySelector("#enterMessage");
const $send = document.querySelector(".button-send");
const $chat = document.querySelector(".messages");

$send.addEventListener("click", sendMessage);
  
function sendMessage() {
  const value = $input.value;
  const now = new Date();
        let minutes = now.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
  if (value !== "") {
        const message = {
          time: `${now.getHours()}:${minutes}`,
          content: value,
          author: {
              name: "Rafael",
              image: "http://lorempixel.com/50/50/sports/",
          },
      };
      printMessage(message);
      messages.push(message);

      $input.value = "";
  }
}

function printMessage(message) {
  const {author, time, content} = message;
  const template = 
  `<div class="chat">
      <div class="photo"><img src="${author.image}"></div>
      <div class="content">
          <div class="metadata">
              <div class="name">${author.name}</div>
              <div class="time">${time}</div> 
          </div>
          <div class="message">${content}</div>
      </div>
  </div>`;
$chat.innerHTML += template;
}

for (let i = 0; i < messages.length; i++) {
  printMessage(messages[i]);
}

function printMessages() {
  for (let i = 0; i < messages.length; i++) {
    printMessage(messages[i]);
  }
}

$.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
  response.forEach((result) => {
    const now = new Date();
    const message = {
      time: `${now.getHours()}:${now.getMinutes()}`,
      content: result.body,
      author: {
        name: result.name,
        image: "http://lorempixel.com/50/50/sports/"
      }
    };

    messages.push(message);
  });

  printMessages();
});
