let indice;
let Figuras;
let Fondo;
let ColorUsuario = [];
let TeclaUsuario = "tcla";
let n = 0;
let tamaño;
let areaNiveles;
let areaLimite;
let pixeles=0;

function preload() {
  let i = random(1, 2);
  print("Nivel" + parseInt(i) + ".json");
  Nivel = "Nivel" + parseInt(i) + ".json";
  Datos = loadJSON('Nivel1.json');
}

class Piezas {
  constructor(xO, yO, rgba,tecla=0, longitud = 1) { 
    (this.xO = xO),
      (this.yO = yO),
      (this.alpha = 0),
      (this.permitir = false), 
      (this.rgba = color(rgba)),
      (this.tecla = tecla),
      (this.linea = 1),
      (this.lineargba = color("rgba(64, 64, 89,255)")),
      (this.longitud = longitud),
      (this.a = [1, 2]),
      (this.b = [2, 3]),
      (this.c = [2, 3]),
      (this.r = 1),
      (this.escala = 1);
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
    this.escala = tamaño / 100;
    if (TeclaUsuario == this.tecla) {
      fill("#FFFF71");
      strokeWeight(3);
      stroke("Ivory");
    } else {
      fill(this.rgba);
      strokeWeight(this.linea);
      stroke(this.lineargba);
    }
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
   pixelDensity(1)
  if (windowWidth < windowHeight) {
    tamaño = windowWidth;
  } else {
    tamaño = windowHeight;
  }
 let cx, cy;
   cx = tamaño / 1.1;
  cy = tamaño / 1.2;
  Triangulo1 = new Triangulo(cx, tamaño / 5, "Turquoise", "1", 24);
  Triangulo2 = new Triangulo(cx, tamaño / 2.15, "Orchid", "2", 24);
  Triangulo3 = new Triangulo(cx, tamaño / 1.55, "LightGreen", "3", 12);
  Triangulo4 = new Triangulo(cx, cy, "DarkOrange", "4", 17);
  Triangulo5 = new Triangulo(tamaño / 9, cy, "DarkMagenta", "5", 12);
  Cuadrado1 = new Cuadrado(tamaño / 1.6, cy, "Goldenrod", "6");
  Cuadrado2 = new Cuadrilatero(tamaño / 3, cy, "Crimson", "7");

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
    Fondo[indice].permitir=true
    Fondo[indice].desplazar(x,y)
    Fondo[indice].rotar(tetha)
    Fondo[indice].longitud= longitud
    Fondo[indice].linea=3
    Fondo[indice].lineargba='Ivory'
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
  Area()
  PasarNivel()
}


function Area() {
  let Punto1x;
  let Punto1y;
  let Punto2x;
  let Punto2y;
  Punto1x = (-2 / 3) * Triangulo1.escala * Triangulo1.longitud;
  Punto1y = (1 / 3) * Triangulo1.escala * Triangulo1.longitud;
  Punto2x = (1 / 3) * Triangulo1.escala * Triangulo1.longitud;
  Punto2y = (-2 / 3) * Triangulo1.escala * Triangulo1.longitud;
  distanciaNiveles = int(
    sqrt(pow(Punto1x - Punto2x, 2) + pow(Punto1y - Punto2y, 2))
  );
  areaNiveles = int(pow(distanciaNiveles, 2));
  return { areaNiveles };
}
function ValidarNivel() {
  let r, g, b, a;
  loadPixels();
  pixeles = 0;
  for (y = 0; y < int((3 * tamaño) / 4); y++) {
    for (x = 0; x < int((3 * tamaño) / 4); x++) {
      indice = (x + y * windowWidth) * 4;
      r = pixels[indice + 0];
      g = pixels[indice + 1];
      b = pixels[indice + 2];
      a = pixels[indice + 3];
      if (r == 255 && g == 255 && b == 240 && a == 255) {
        pixeles += 1;
      }
    }
  }
  return pixeles;
}
function PasarNivel(){
  ValidarNivel()
  print(pixeles)
  print(areaNiveles-pixeles)
  print(0.02*areaNiveles)
  if(areaNiveles>pixeles && pixeles<0.02*areaNiveles){
    print("salvar");}
}

function Teclado() {
  for (indice in Figuras) {
    let x = Figuras[indice].xO;
    let y = Figuras[indice].yO;
    let Tetha = Figuras[indice].alpha;
    if (Figuras[indice].tecla == TeclaUsuario) {
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
      Figuras[indice].desplazar(x, y);
      Figuras[indice].rotar(Tetha);
    }
  }
}
function keyTyped() {
  TeclaUsuario = key;
  if (TeclaUsuario == "r") {
    Cuadrado2.reflejar(-Cuadrado2.r);
  }
}

function mouseWheel(event) {
  ColorUsuario=get(mouseX, mouseY)
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
