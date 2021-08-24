let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let direction = "right";
let snake = [];
snake[0] = {x:8 * box, y: 8 * box};
let food = {x: Math.floor(Math.random() * 15 + 1) * box, y: Math.floor(Math.random() * 15 + 1) * box}

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

function criarComida() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event) {
    // Mudando direção para esquerda caso tenha sido apertado o cursor para esquerda apenas se a direção anterior não for a direita
    if(event.keyCode == 37 && direction != "right"){
        direction = "left";        
    }

    // Mudando direção para baixo caso tenha sido apertado o cursor para baixo apenas se a direção anterior não for para cima
    if(event.keyCode == 38 && direction != "up"){
        direction = "down";
    }

    // Mudando direção para direita caso tenha sido apertado o cursor para direita apenas se a direção anterior não for a esquerda
    if(event.keyCode == 39 && direction != "left"){
        direction = "right";
    }

    // Mudando direção para cima caso tenha sido apertado o cursor para cima apenas se a direção anterior não for para baixo
    if(event.keyCode == 40 && direction != "down"){
        direction = "up";
    }
}

function iniciarJogo() {
    // Caso cobrinha esteja no limite direito e a direção for direita, reaparecer na esquerda
    if(snake[0].x > (15 * box) && direction == "right"){
        snake[0].x = 0;
    }

    // Caso cobrinha esteja no limite esquerdo e a direção for esquerda, reaparecer na direita
    if(snake[0].x < 0 && direction == "left"){
        snake[0].x = 16 * box;
    }

    // Caso cobrinha esteja no limite superior e a direção for para cima, reaparecer em baixo
    if(snake[0].y > (15 * box) && direction == "up"){
        snake[0].y = 0;
    }

    // Caso cobrinha esteja no limite inferior e a direção for para baixo, reaparecer em cima
    if(snake[0].y < 0 && direction == "down"){
        snake[0].y = 16 * box;
    }
    
    criarBG();
    criarCobrinha();
    criarComida();
    
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

let jogo = setInterval(iniciarJogo, 200);