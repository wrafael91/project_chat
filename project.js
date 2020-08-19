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
const $chat = document.querySelector(".chat");// contenedor

$send.addEventListener("click", sendMessage);
    
function sendMessage() {
    const value = $input.value;
    if (value !== "") {
        const now = new Date();
        const message = {
            time: `${now.getHours()}:${now.getMinutes()}`,
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
    <div class="user-photo"><img src="${author.image}"></div> 
    <div class="chat-message">
        <div>
            <a href="#" class="user-name">${author.name}</a>
            <span class="date">${time}</span>
        </div>
        <div>
            <span>${content}</span>  
        </div>
    </div>      
    </div>`;
  $chat.innerHTML += template;
}


for (let i = 0; i < messages.length; i++) {
    printMessage(messages[i]);
}




