let Triangulo1;
let Triangulo2;
let Triangulo3;
let Triangulo4;
let Triangulo5;
let Cuandrado1;
let Cuandrado2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  Triangulo1 = {
    x: 0, //centro del triangulo
    y: 0, //centro del triangulo
    xO: 90, //centro del triangulo al moverlo
    yO: 40, //centro del triangulo al moverlo
    alpha: 0,
    tetha: 0,
    xt: 90,
    yt: 40,
    permitir: false,
    tecla: "",
    rgba: color(3, 150, 54, 255),
    linea: 1,
    rotar: function (angulo) {
      if (this.permitir) {
        this.alpha += angulo;
      }
    },
    desplazar: function (x, y) {
      if (this.permitir) {
        this.xO = x;
        this.yO = y;
      }
    },
    evaluar: function () {
      a = get(this.xO, this.yO);
      b = get(mouseX, mouseY);
      if (arraysIdentical(a, b) || this.tecla == "1") {
        this.permitir = true;
      } else {
        this.permitir = false;
      }
    },
    dibujo: function () {
      fill(this.rgba);
      strokeWeight(this.linea);
      push();
      translate(this.xO, this.yO); // Mueve el canvas segun la funcion dezplazar donde se asigna valor xO y YO
      rotate(radians(this.alpha)); // Rota el canvas segun la funcion rotar donde se asigna valor a alpha
      triangle(
        this.x - 84,
        this.y - 28,
        this.x + 84,
        this.y - 28,
        this.x,
        this.y + 56
      );
      pop();
    },
  };

  Triangulo2 = {
    x: 0,
    y: 0,
    xO: 90,
    yO: 150,
    alpha: 0,
    tetha: 0,
    xt: 90,
    yt: 150,
    permitir: false,
    tecla: "",
    rgba: color(255, 87, 51, 255),
    linea: 1,
    rotar: function (angulo) {
      if (this.permitir) {
        this.alpha += angulo;
      }
    },
    desplazar: function (x, y) {
      if (this.permitir) {
        this.xO = x;
        this.yO = y;
      }
    },
    evaluar: function () {
      a = get(this.xO, this.yO);
      b = get(mouseX, mouseY);
      if (arraysIdentical(a, b) || this.tecla == "2") {
        this.permitir = true;
      } else {
        this.permitir = false;
      }
    },
    dibujo: function () {
      fill(this.rgba);
      strokeWeight(this.linea);
      push();
      translate(this.xO, this.yO);
      rotate(radians(this.alpha));
      triangle(
        this.x - 84,
        this.y - 42,
        this.x + 84,
        this.y - 42,
        this.x,
        this.y + 42
      );
      pop();
    },
  };

  Triangulo3 = {
    x: 0,
    y: 0,
    xO: 50,
    yO: 230,
    alpha: 0,
    tetha: 0,
    xt: 50,
    yt: 230,
    permitir: false,
    tecla: "",
    rgba: color(130, 20, 255, 255),
    linea: 1,
    rotar: function (angulo) {
      if (this.permitir) {
        this.alpha += angulo;
      }
    },
    desplazar: function (x, y) {
      if (this.permitir) {
        this.xO = x;
        this.yO = y;
      }
    },
    evaluar: function () {
      a = get(this.xO, this.yO);
      b = get(mouseX, mouseY);
      if (arraysIdentical(a, b) || this.tecla == "3") {
        this.permitir = true;
      } else {
        this.permitir = false;
      }
    },
    dibujo: function () {
      fill(this.rgba);
      strokeWeight(this.linea);
      push();
      translate(this.xO, this.yO);
      rotate(radians(this.alpha));
      triangle(
        this.x,
        this.y + 21,
        this.x - 42,
        this.y - 21,
        this.x + 42,
        this.y - 21
      );
      pop();
    },
  };

  Triangulo4 = {
    x: 0,
    y: 0,
    xO: 150,
    yO: 230,
    alpha: 0,
    tetha: 0,
    xt: 150,
    yt: 230,
    permitir: false,
    tecla: "",
    rgba: color(0, 6, 194, 255),
    linea: 1,
    rotar: function (angulo) {
      if (this.permitir) {
        this.alpha += angulo;
      }
    },
    desplazar: function (x, y) {
      if (this.permitir) {
        this.xO = x;
        this.yO = y;
      }
    },
    evaluar: function () {
      a = get(this.xO, this.yO);
      b = get(mouseX, mouseY);
      if (arraysIdentical(a, b) || this.tecla == "4") {
        this.permitir = true;
      } else {
        this.permitir = false;
      }
    },
    dibujo: function () {
      fill(this.rgba);
      strokeWeight(this.linea);
      push();
      translate(this.xO, this.yO);
      rotate(radians(this.alpha));
      triangle(
        this.x,
        this.y + 21,
        this.x - 42,
        this.y - 21,
        this.x + 42,
        this.y - 21
      );
      pop();
    },
  };

  Triangulo5 = {
    x: 0,
    y: 0,
    xO: 70,
    yO: 300,
    alpha: 45,
    tetha: 0,
    xt: 70,
    yt: 300,
    permitir: false,
    tecla: "",
    rgba: color(222, 21, 42, 255),
    linea: 1,
    rotar: function (angulo) {
      if (this.permitir) {
        this.alpha += angulo;
      }
    },
    desplazar: function (x, y) {
      if (this.permitir) {
        this.xO = x;
        this.yO = y;
      }
    },
    evaluar: function () {
      a = get(this.xO, this.yO);
      b = get(mouseX, mouseY);
      if (arraysIdentical(a, b) || this.tecla == "5") {
        this.permitir = true;
      } else {
        this.permitir = false;
      }
    },
    dibujo: function () {
      fill(this.rgba);
      strokeWeight(this.linea);
      push();
      translate(this.xO, this.yO);
      rotate(radians(this.alpha));
      triangle(
        this.x + 21,
        this.y - 63,
        this.x + 21,
        this.y + 21,
        this.x - 63,
        this.y + 21
      );
      pop();
    },
  };

  Cuadrado1 = {
    x: 0,
    y: 0,
    xO: 160,
    yO: 310,
    alpha: 0,
    tetha: 0,
    xt: 160,
    yt: 310,
    permitir: false,
    tecla: "",
    rgba: color(255, 227, 20, 255),
    linea: 1,
    rotar: function (angulo) {
      if (this.permitir) {
        this.alpha += angulo;
      }
    },
    desplazar: function (x, y) {
      if (this.permitir) {
        this.xO = x;
        this.yO = y;
      }
    },
    evaluar: function () {
      a = get(this.xO, this.yO);
      b = get(mouseX, mouseY);
      if (arraysIdentical(a, b) || this.tecla == "6") {
        this.permitir = true;
      } else {
        this.permitir = false;
      }
    },
    dibujo: function () {
      fill(this.rgba);
      strokeWeight(this.linea);
      push();
      translate(this.xO, this.yO);
      rotate(radians(this.alpha));
      quad(
        this.x + 42,
        this.y,
        this.x,
        this.y - 42,
        this.x - 42,
        this.y,
        this.x,
        this.y + 42
      );
      pop();
    },
  };

  Cuadrado2 = {
    r: -1,
    teclar: "",
    x: 0,
    y: 0,
    xO: 110,
    yO: 390,
    alpha: 0,
    tetha: 0,
    xt: 90,
    yt: 390,
    permitir: false,
    tecla: "",
    rgba: color(26, 206, 220, 255),
    linea: 1,
    rotar: function (angulo) {
      if (this.permitir) {
        this.alpha += angulo;
      }
    },
    desplazar: function (x, y) {
      if (this.permitir) {
        this.xO = x;
        this.yO = y;
      }
    },
    reflejar: function (rx) {
      if (this.permitir) {
        this.r = rx;
      }
    },
    evaluar: function () {
      a = get(this.xO, this.yO);
      b = get(mouseX, mouseY);
      if (arraysIdentical(a, b) || this.tecla == "7") {
        this.permitir = true;
      } else {
        this.permitir = false;
      }
    },
    dibujo: function () {
      fill(this.rgba);
      strokeWeight(this.linea);
      push();
      translate(this.xO, this.yO);
      rotate(radians(this.alpha));
      quad(
        this.x - this.r * 21,
        this.y - 21,
        this.x + this.r * 63,
        this.y - 21,
        this.x + this.r * 21,
        this.y + 21,
        this.x - this.r * 63,
        this.y + 21
      );
      pop();
    },
  };
}

function draw() {
  background(220);
  Triangulo1.dibujo();
  Triangulo2.dibujo();
  Triangulo3.dibujo();
  Triangulo4.dibujo();
  Triangulo5.dibujo();
  Cuadrado1.dibujo();
  Cuadrado2.dibujo();
  Teclado(); //Llama funcion teclado
}

function Teclado() {
  //Identificar comandos

  if (keyIsDown(LEFT_ARROW)) {
    print(keyIsDown(LEFT_ARROW));
    Triangulo1.xt -= 2;
    Triangulo2.xt -= 2;
    Triangulo3.xt -= 2;
    Triangulo4.xt -= 2;
    Triangulo5.xt -= 2;
    Cuadrado1.xt -= 2;
    Cuadrado2.xt -= 2;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    Triangulo1.xt += 2;
    Triangulo2.xt += 2;
    Triangulo3.xt += 2;
    Triangulo4.xt += 2;
    Triangulo5.xt += 2;
    Cuadrado1.xt += 2;
    Cuadrado2.xt += 2;
  }
  if (keyIsDown(UP_ARROW)) {
    Triangulo1.yt -= 2;
    Triangulo2.yt -= 2;
    Triangulo3.yt -= 2;
    Triangulo4.yt -= 2;
    Triangulo5.yt -= 2;
    Cuadrado1.yt -= 2;
    Cuadrado2.yt -= 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    Triangulo1.yt += 2;
    Triangulo2.yt += 2;
    Triangulo3.yt += 2;
    Triangulo4.yt += 2;
    Triangulo5.yt += 2;
    Cuadrado1.yt += 2;
    Cuadrado2.yt += 2;
  }
  if (keyIsDown(CONTROL)) {
    Triangulo1.tetha += 0.05;
    Triangulo2.tetha += 0.05;
    Triangulo3.tetha += 0.05;
    Triangulo4.tetha += 0.05;
    Triangulo5.tetha += 0.05;
    Cuadrado1.tetha += 0.05;
    Cuadrado2.tetha += 0.05;
  } else {
    Triangulo1.tetha = 0;
    Triangulo2.tetha = 0;
    Triangulo3.tetha = 0;
    Triangulo4.tetha = 0;
    Triangulo5.tetha = 0;
    Cuadrado1.tetha = 0;
    Cuadrado2.tetha = 0;
  }

  if (Triangulo1.tecla == "1") {
    //Llama el #1
    Triangulo1.rgba = color(8, 209, 78, 255);
    Triangulo1.linea = 5;
    Triangulo1.desplazar(Triangulo1.xt, Triangulo1.yt); //Desplaza 5 pixeles con razon a la flecha espichada
    Triangulo1.rotar(Triangulo1.tetha); // Rota 0.05 radianes al espichar control
  }
  if (Triangulo2.tecla == "2") {
    Triangulo2.rgba = color(255, 138, 57, 255);
    Triangulo2.linea = 5;
    Triangulo2.desplazar(Triangulo2.xt, Triangulo2.yt);
    Triangulo2.rotar(Triangulo2.tetha);
  }

  if (Triangulo3.tecla == "3") {
    Triangulo3.rgba = color(184, 128, 247, 255);
    Triangulo3.linea = 5;
    Triangulo3.desplazar(Triangulo3.xt, Triangulo3.yt);
    Triangulo3.rotar(Triangulo3.tetha);
  }

  if (Triangulo4.tecla == "4") {
    Triangulo4.rgba = color(8, 94, 255, 255);
    Triangulo4.linea = 5;
    Triangulo4.desplazar(Triangulo4.xt, Triangulo4.yt);
    Triangulo4.rotar(Triangulo4.tetha);
  }

  if (Triangulo5.tecla == "5") {
    Triangulo5.rgba = color(255, 77, 96, 255);
    Triangulo5.linea = 5;
    Triangulo5.desplazar(Triangulo5.xt, Triangulo5.yt);
    Triangulo5.rotar(Triangulo5.tetha);
  }

  if (Cuadrado1.tecla == "6") {
    Cuadrado1.rgba = color(255, 250, 102, 255);
    Cuadrado1.linea = 5;
    Cuadrado1.desplazar(Cuadrado1.xt, Cuadrado1.yt);
    Cuadrado1.rotar(Cuadrado1.tetha);
  }

  if (Cuadrado2.tecla == "7") {
    Cuadrado2.rgba = color(104, 255, 255, 255);
    Cuadrado2.linea = 5;
    Cuadrado2.desplazar(Cuadrado2.xt, Cuadrado2.yt);
    Cuadrado2.rotar(Cuadrado2.tetha);
  }
}
/*function keyReleased() { 
  if (Cuadrado2.teclar=='r') {
    Cuadrado2.tecla='7'
    Cuadrado2.reflejar(-Cuadrado2.r)
    }*/
function keyPressed() {
  Cuadrado2.teclar = key;
  Triangulo1.evaluar();
  Triangulo2.evaluar();
  Triangulo3.evaluar();
  Triangulo4.evaluar();
  Triangulo5.evaluar();
  Cuadrado1.evaluar();
  Cuadrado2.evaluar();
}
function keyTyped() {
  //Identificar que la tecla no sea comandos de mover el triangulo, solo acepta letras o números

  Triangulo1.tecla = key;
  Triangulo1.rgba = color(3, 150, 54, 255);
  Triangulo1.linea = 1;
  Triangulo2.tecla = key;
  Triangulo2.rgba = color(255, 87, 51, 255);
  Triangulo2.linea = 1;
  Triangulo3.tecla = key;
  Triangulo3.rgba = color(130, 20, 255, 255);
  Triangulo3.linea = 1;
  Triangulo4.tecla = key;
  Triangulo4.rgba = color(0, 6, 194, 255);
  Triangulo4.linea = 1;
  Triangulo5.tecla = key;
  Triangulo5.rgba = color(222, 21, 42, 255);
  Triangulo5.linea = 1;
  Cuadrado1.tecla = key;
  Cuadrado1.rgba = color(255, 227, 20, 255);
  Cuadrado1.linea = 1;
  Cuadrado2.tecla = key;
  Cuadrado2.rgba = color(26, 206, 220, 255);
  Cuadrado2.linea = 1;
}

function mouseWheel(event) {
  Triangulo1.evaluar();
  Triangulo2.evaluar();
  Triangulo3.evaluar();
  Triangulo4.evaluar();
  Triangulo5.evaluar();
  Cuadrado1.evaluar();
  Cuadrado2.evaluar();
  Triangulo1.rotar(event.deltaY * 0.05);
  Triangulo2.rotar(event.deltaY * 0.05);
  Triangulo3.rotar(event.deltaY * 0.05);
  Triangulo4.rotar(event.deltaY * 0.05);
  Triangulo5.rotar(event.deltaY * 0.05);
  Cuadrado1.rotar(event.deltaY * 0.05);
  Cuadrado2.rotar(event.deltaY * 0.05);
} //Propiedad de lectura que representa la cantidad de desplazamiento vertical
function mouseDragged() {
  //Desplazar segun el movimiento del raton
  Triangulo1.desplazar(mouseX, mouseY);
  Triangulo2.desplazar(mouseX, mouseY);
  Triangulo3.desplazar(mouseX, mouseY);
  Triangulo4.desplazar(mouseX, mouseY);
  Triangulo5.desplazar(mouseX, mouseY);
  Cuadrado1.desplazar(mouseX, mouseY);
  Cuadrado2.desplazar(mouseX, mouseY);
}
function mousePressed() {
  Triangulo1.evaluar();
  Triangulo2.evaluar();
  Triangulo3.evaluar();
  Triangulo4.evaluar();
  Triangulo5.evaluar();
  Cuadrado1.evaluar();
  Cuadrado2.evaluar();
}
function mouseReleased() {
  Triangulo1.permitir = false;
  Triangulo2.permitir = false;
  Triangulo3.permitir = false;
  Triangulo4.permitir = false;
  Triangulo5.permitir = false;
}
function doubleClicked() {
  Cuadrado2.reflejar(-Cuadrado2.r);
}

function arraysIdentical(a, b) {
  //Igualar arreglos(Color)
  var i = a.length;
  if (i != b.length) return false;
  while (i--) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
