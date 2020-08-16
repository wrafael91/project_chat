$( "li" ).hover(function() {
      $( this ).toggleClass( "active" ).next().stop( true, true )
});

$("li").click(function() {
    $(this).toggleClass()
});

const $input = document.querySelector("#enterMessage");
const $send = document.querySelector(".button-send");
const $chat = document.querySelector(".chat");// contenedor

$send.addEventListener("click", () => {
    const value = $input.value;

    if (value !== "") {
        const now = new Date();
        const message = {
            time: `${now.getHours()}:${now.getMinutes()}`,
            content: value,
            author: {
                name: "Link",
                image: "http://lorempixel.com/50/50/sports/",
            },
        };
        printMessage(message);
        messages.push(messages);

        $input.value = "";
    }
})

const messages = [ 
    {
    time: "16:25",
    content: "Hola, qué más?",
    author: {
        name: "Luisa 'La Loca'",
        image: "http://lorempixel.com/50/50/sports/5/",
        },
    },
    {
    time: "16:27",
    content: "Bien, qué cuenta?",
    author: {
        name: "Pedro Pérez",
        image: "http://lorempixel.com/50/50/sports/5/",
        },
    },
    {
    time: "16:30",
    content: "Nada, acá programando",
    author: {
        name: "Luisa 'La Loca'",
        image: "http://lorempixel.com/50/50/sports/5/",
        },
    },
]

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




