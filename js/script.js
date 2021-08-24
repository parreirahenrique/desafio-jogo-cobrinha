let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let direction = "right";
let snake = [];
snake[0] = {x:8 * box, y: 8* box};


function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for(i=0; i< snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo() {
    criarBG();
    criarCobrinha();

    // Posições iniciais da cobrinha
    let posX = snake[0].x;
    let posY = snake[0].y;

    // Movimentando posição da cobrinha
    if(direction == "right"){
        posX += box;
    }

    if(direction == "left"){
        posX -= box;
    }

    if(direction == "up"){
        posY += box;
    }

    if(direction == "down"){
        posY -= box;
    }
    
    snake.pop();                      //Retira primmeiro 

    let newHead = {x: posX, y: posY}; // Criando array contendo nova posição da cabeça da cobrinha

    snake.unshift(newHead);           // Adicionando nova posição da cabeça da cobrinha ao array

}

let jogo = setInterval(iniciarJogo, 100);