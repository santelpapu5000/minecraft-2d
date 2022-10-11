// Crea la variable de referncia del lienzo usando fabric.Canvas()
var canvas = new fabric.Canvas("myCanvas")

//Define el ancho inicial y el alto del cloque de imágenes 
block_image_width = 30;
block_image_height = 30;
//Define el inicio de las coordenadas  y Y del jugador 
player_x = 10;
player_y = 10;


// Define una variable llamada player_object para almacenar la imagen del jugador
player_object = "";

// Agrega una función llamada player_update() para agregar la imagen del jugador 
function player_update() {
    fabric.Image.fromURL("sus.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object)

    });
}






// Agrega una función llamada new_image() para agregar las diferentes imágene al presionar teclas específicas.
function new_image(imagen) {
    fabric.Image.fromURL(imagen, function (Img) {
        Image_BLOCK = Img;
        Image_BLOCK.scaleToWidth(block_image_width);
        Image_BLOCK.scaleToHeight(block_image_height);
        Image_BLOCK.set({
            top: player_y,
            left: player_x
        });
        canvas.add(Image_BLOCK)

    });
}
window.addEventListener("keydown", miTeclapulsada);
function miTeclapulsada(e) {
    tecla = e.keyCode;
    if (tecla == 37 && player_x > 0) {
        player_x = player_x - block_image_width
        canvas.remove(player_object);
        player_update();
    }

    if (tecla == 38 && player_y > 0) {
        player_y = player_y - block_image_height
        canvas.remove(player_object);
        player_update();
    }

    if (tecla == 39 && player_x < 850) {
        player_x = player_x + block_image_width
        canvas.remove(player_object);
        player_update();
    }

    if (tecla == 40 && player_y < 500) {
        player_y = player_y + block_image_height
        canvas.remove(player_object);
        player_update();
    }
    if (tecla == "67") {// c
        new_image("ROCK.jpg");
    }
    if (tecla == "68") {// d
        new_image("dark_green.png");
    }

    if (tecla == "71") {// g
        new_image("ground.png");
    }
    if (tecla == "76") {// l
        new_image("light_green.png");
    }
    if (tecla == "82") {// r
        new_image("NETHEROCK.jpg");
    }
    if (tecla == "85") {// U
        new_image("PIEDRA LUMINOSA.png");
    }
    if (tecla == "87") {// W
        new_image("wall.jpg");
    }
    if (tecla == "89") {// y
        new_image("yellow_wall.png");
    }

}
