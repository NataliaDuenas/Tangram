let indice;
let Figuras;
let fondo;
let ColorUsuario=[];
let TeclaUsuario="tcla";
let n = 0;

function preload() {
  let i = random(1, 6);
  print("Nivel" + parseInt(i) + ".json");
  numero = "Nivel" + parseInt(i) + ".json";
  Datos = loadJSON(numero);
}

class Triangulo {
  constructor(xO, yO, rgba, length) {
    (this.xO = xO),
      (this.yO = yO),
      (this.alpha = 0),
      (this.permitir = false),
      (this.tecla = ""),
      (this.rgba = color(rgba)),
      (this.linea = 1),
      (this.lineargba = color("black")),
      (this.length = length),
      (this.a = [1,2]),
      (this.b = [2,3]);
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
  evaluar(TeclaUsuario,ColorUsuario) {
    this.a = get(this.xO, this.yO);
    this.b = ColorUsuario;
    this.permitir = arraysIdentical(this.a, this.b) || TeclaUsuario==this.tecla
  }
  dibujo() {
    fill(this.rgba);
    strokeWeight(this.linea);
    stroke(this.lineargba);
    push();
    translate(this.xO, this.yO);
    rotate(radians(this.alpha));
    triangle(
      (-2 / 3) * this.length,
      (1 / 3) * this.length,
      (1 / 3) * this.length,
      (1 / 3) * this.length,
      (1 / 3) * this.length,
      (-2 / 3) * this.length
    );
    pop();
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  Triangulo1= new Triangulo(90,90,'red',120)
  Triangulo2= new Triangulo(90,220,'aqua',120)
  Triangulo3  = new Triangulo(50,310,'aquamarine',60)
  Triangulo4  = new Triangulo(150,310,'blue',60)
  Triangulo5 = new Triangulo(90,400,'blueviolet',85)


  Figuras = [
    Triangulo1,
    Triangulo2,
    Triangulo3,
    Triangulo4,
    Triangulo5,
  ];

  /*fondo = Object.assign([], Figuras)
  for (indice in Figuras) {
    fondo[indice]=Object.assign([],Figuras[indice])  
  }
  Niveles(fondo)*/
}

/*function Niveles(fondo){
  let x, y, a, b;  
  for(indice in fondo ){  
    x = Datos.x[indice];
    y= Datos.y[indice]
    a= Datos.rotacion[indice]
    fondo[indice].linea=5
    fondo[indice].lineargba= color(255)
    fondo[indice].permitir=true
    fondo[indice].rgba= color(255)
    fondo[indice].desplazar(x,y)
    fondo[indice].rotar(a)
    if (indice==6){
      fondo[indice].r=Datos.reflejar
    }
        fondo[indice].permitir=false
  }
  
}*/

function exportar(Figuras) {
  let x = [];
  let y = [];
  let tetha = [];
  let r = Figuras[6].r;
  for (indice in Figuras) {
    x.push(Figuras[indice].xO);
    y.push(Figuras[indice].yO);
    tetha.push(Figuras[indice].alpha);
  }
  return {
    x: x,
    y: y,
    rotacion: tetha,
    reflejar: r,
  };
}

function draw() {
  background(220);
  
  /* for (indice in Figuras) {
    fondo[indice].dibujo()   
  }*/
  for (indice in Figuras) {     
    Figuras[indice].dibujo();
     Figuras[indice].evaluar(TeclaUsuario,ColorUsuario);
  }

  Teclado();
}

function Teclado() {
  
  for (indice in Figuras) {
    let x = Figuras[indice].xO;
    let y = Figuras[indice].yO ;  
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
      Figuras[indice].rgba = color(70, 90, 110, 255);
      Figuras[indice].linea = 5;
      print(Tetha)
      print(x)
      print(y)
      Figuras[indice].desplazar(x, y);
      Figuras[indice].rotar(Tetha);
    }
  }
}

/*function keyReleased() {
  if (Cuadrado2.teclar == "r") {
    Cuadrado2.tecla = "7";
    Cuadrado2.reflejar(-Cuadrado2.r);
  }
}*/
function keyPressed() {
    //Cuadrado2.teclar = key;
}
function keyTyped() {
  if (key === "s") {
    n += 1;
    saveJSON(exportar(Figuras), "Nivel" + n);
  }
  TeclaUsuario = key
  for (indice in Figuras) {
    Figuras[indice].tecla = key;
    Figuras[indice].linea = 1;
    Triangulo1.rgba = color('red');
    Triangulo2.rgba = color('aqua');
    Triangulo3.rgba = color('aquamarine');
    Triangulo4.rgba = color('blue');
    Triangulo5.rgba = color('blueviolet');
  }
}

function mouseWheel(event) {
  for (indice in Figuras) {
    A = Figuras[indice].alpha + event.deltaY * 0.5;
    Figuras[indice].rotar(A);
  }
}
function mouseDragged() {
  for (indice in Figuras) {
    Figuras[indice].desplazar(mouseX, mouseY);
  }
}
function mousePressed(){
  ColorUsuario=get(mouseX,mouseY)
}

function arraysIdentical(a, b) {
  var i = a.length;
  if (i != b.length) return false;
  while (i--) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
