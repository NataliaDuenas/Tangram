let indice;
let Figuras;
let Fondo;
let ColorUsuario = [];
let TeclaUsuario = "tcla";
let n = 0;

function preload() {
  let i = random(1, 2);
  print("Nivel" + parseInt(i) + ".json");
  Nivel = "Nivel" + parseInt(i) + ".json";
  Datos = loadJSON('Nivel1.json');
}

class Piezas {
  constructor(xO, yO, rgba, longitud = 1, escala = windowHeight) {
    (this.xO = xO),
      (this.yO = yO),
      (this.alpha = 0),
      (this.permitir = false),
      (this.tecla = ""),
      (this.rgba = color(rgba)),
      (this.linea = 1),
      (this.lineargba = color("black")),
      (this.longitud = longitud),
      (this.a = [1, 2]),
      (this.b = [2, 3]),
      (this.r = 1),
      (this.escala = escala / 100);
  }
  rotar(angulo) {
    if (this.permitir) {
      this.alpha = angulo;
    }
  }
  desplazar(x, y) {
    if (this.permitir) {
      this.xO = x;
      this.yO = y;
    }
  }
  evaluar(TeclaUsuario, ColorUsuario) {
    this.a = get(this.xO, this.yO);
    this.b = ColorUsuario;
    this.permitir =
      arraysIdentical(this.a, this.b) || TeclaUsuario == this.tecla;
  }
  shape() {
    print("No tiene forma");
  }

  dibujo() {
    if (windowWidth < windowHeight) {
      this.escala = windowWidth / 100;
    }
    fill(this.rgba);
    strokeWeight(this.linea);
    stroke(this.lineargba);
    push();
    translate(this.xO, this.yO);
    rotate(radians(this.alpha));
    this.shape();
    pop();
  }
}

class Triangulo extends Piezas {
  shape() {
    triangle(
      (-2 / 3) * this.escala * this.longitud,
      (1 / 3) * this.escala * this.longitud,
      (1 / 3) * this.escala * this.longitud,
      (1 / 3) * this.escala * this.longitud,
      (1 / 3) * this.escala * this.longitud,
      (-2 / 3) * this.escala * this.longitud
    );
  }
}

class Cuadrado extends Piezas {
  shape() {
    rectMode(CENTER);
    rect(0, 0, this.escala * 12, this.escala * 12);
  }
}

class Cuadrilatero extends Piezas {
  shape() {
    quad(
      -this.r * this.escala * 4.2,
      -this.escala * 4.2,
      this.r * 3 * this.escala * 4.2,
      -this.escala * 4.2,
      this.r * this.escala * 4.2,
      this.escala * 4.2,
      -this.r * 3 * this.escala * 4.2,
      this.escala * 4.2
    );
  }
  reflejar(rx) {
    if (this.permitir) {
      this.r = rx;
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (windowWidth < windowHeight) {
      tamaño=windowWidth
    } else { tamaño= windowHeight;}
  print(tamaño)
  Triangulo1 = new Triangulo(tamaño/5, tamaño / 5, "red", 24);
  Triangulo2 = new Triangulo(tamaño/5, tamaño / 2.15, "aquamarine", 24);
  Triangulo3 = new Triangulo(tamaño/9, tamaño / 1.55, "maroon", 12);
  Triangulo4 = new Triangulo(tamaño/3, tamaño / 1.55, "blueviolet", 17);
  Triangulo5 = new Triangulo(tamaño/9, tamaño / 1.2, "coral", 12);
  Cuadrado1 = new Cuadrado(tamaño/2.5, tamaño / 5, "teal");
  Cuadrado2 = new Cuadrilatero(tamaño/3, tamaño / 1.2, "#03A9F4");

  Figuras = [
    Triangulo1,
    Triangulo2,
    Triangulo3,
    Triangulo4,
    Triangulo5,
    Cuadrado1,
    Cuadrado2,
  ];
  
  Fondo1 = new Triangulo(0, 0, "Ivory");
  Fondo2 = new Triangulo(0, 0, "Ivory");
  Fondo3 = new Triangulo(0, 0, "Ivory");
  Fondo4 = new Triangulo(0, 0, "Ivory");
  Fondo5 = new Triangulo(0, 0, "Ivory");
  Fondo6 = new Cuadrado(0,0, "Ivory");
  Fondo7 = new Cuadrilatero(0, 0, "Ivory");

  Fondo = [Fondo1,Fondo2, Fondo3, Fondo4, Fondo5, Fondo6, Fondo7]
  print(Fondo)
  Niveles(Fondo)
}

function Niveles(Fondo){
  let x, y, tetha, longitud, escala;  
  for(indice in Fondo ){  
    x = Datos.x[indice]*tamaño;
    y= Datos.y[indice]*tamaño;
    tetha= Datos.rotacion[indice]
    longitud = Datos.longitud[indice]
    print(longitud)
    Fondo[indice].linea=3
    Fondo[indice].lineargba= color('Ivory')
    Fondo[indice].permitir=true
    Fondo[indice].desplazar(x,y)
    Fondo[indice].rotar(tetha)
    Fondo[indice].longitud= longitud
    if (indice==6){
      Fondo[indice].r=Datos.reflejar
    }
      Fondo[indice].permitir=false
  }  
}

function draw() {
  background(0, 0, 67);

  for (indice in Figuras) {
    Fondo[indice].dibujo()   
  }
  for (indice in Figuras) {
    Figuras[indice].dibujo();
    Figuras[indice].evaluar(TeclaUsuario, ColorUsuario);
  }

  Teclado();
}
function Teclado() {
  for (indice in Figuras) {
    let x = Figuras[indice].xO;
    let y = Figuras[indice].yO;
    let Tetha = Figuras[indice].alpha;
    if (Triangulo1.tecla - 1 == indice) {
      if (keyIsDown(LEFT_ARROW)) {
        x = Figuras[indice].xO - 2;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        x = Figuras[indice].xO + 2;
      }
      if (keyIsDown(UP_ARROW)) {
        y = Figuras[indice].yO - 2;
      }
      if (keyIsDown(DOWN_ARROW)) {
        y = Figuras[indice].yO + 2;
      }
      if (keyIsDown(CONTROL)) {
        Tetha = Figuras[indice].alpha + 0.5;
      } else if (keyIsDown(SHIFT)) {
        Tetha = Figuras[indice].alpha - 0.5;
      }
      Figuras[indice].rgba = color(242, 255, 2, 255);
      Figuras[indice].lineargba = color(255);
      print(Tetha);
      print(x);
      print(y);
      Figuras[indice].desplazar(x, y);
      Figuras[indice].rotar(Tetha);
    }
  }
}

function keyReleased() {
  if (Cuadrado2.teclar == "r") {
    Cuadrado2.tecla = "7";
    Cuadrado2.reflejar(-Cuadrado2.r);
  }
}
function keyPressed() {
  Cuadrado2.teclar = key;
}
function keyTyped() {
  if (key === "s") {
    n += 1;
    saveJSON(exportar(Figuras), "Nivel" + n);
  }
  TeclaUsuario = key;
  for (indice in Figuras) {
    Figuras[indice].tecla = key;
    Figuras[indice].lineargba = color(0);
    Triangulo1.rgba = color("red");
    Triangulo2.rgba = color("aquamarine");
    Triangulo3.rgba = color("maroon");
    Triangulo4.rgba = color("blueviolet");
    Triangulo5.rgba = color("coral");
    Cuadrado1.rgba = color("teal");
    Cuadrado2.rgba = color("blue");
  }
}

function mouseWheel(event) {
  for (indice in Figuras) {
    A = Figuras[indice].alpha + event.deltaY * 0.5;
    Figuras[indice].rotar(A);
  }
}
function doubleClicked() {
  Cuadrado2.reflejar(-Cuadrado2.r);
}
function mouseDragged() {
  for (indice in Figuras) {
    Figuras[indice].desplazar(mouseX, mouseY);
  }
}
function mousePressed() {
  ColorUsuario = get(mouseX, mouseY);
}

function arraysIdentical(a, b) { 
//Autor:Tim Down, https://stackoverflow.com/questions/51276005/javascript-how-to-check-for-certain-items-in-an-array
  var i = a.length;
  if (i != b.length) return false;
  while (i--) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
