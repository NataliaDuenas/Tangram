let Triangulo1;
let Triangulo2;
let Triangulo3;
let Triangulo4;
let Triangulo5;
let Cuandrado1;
let Cuandrado2;
let indice;
let Figuras;
let fondo;
let n=0;

function preload() {
  let i= random(1,6)
    print('Nivel'+parseInt(i)+'.json')
    numero='Nivel'+parseInt(i)+'.json'
  Datos = loadJSON(numero);
  }

function setup() {
    createCanvas(windowWidth, windowHeight); 
  
 Triangulo1  = {
    x: 0, 
    y: 0, 
    xO: 90, 
    yO: 40, 
    alpha: 0,
    xt: 90,
    yt: 40,
    permitir: false,
    tecla: "",
    rgba: color(3, 150, 54, 255),
    linea: 1,
    lineargba: color(0),
    escala:windowWidth/900,
    rotar: function (angulo) {
      if (this.permitir) {
        this.alpha = angulo;
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
      stroke(this.lineargba)
      push();
      translate(this.xO, this.yO); // Mueve el canvas segun la funcion dezplazar donde se asigna valor xO y YO
      rotate(radians(this.alpha)); // Rota el canvas segun la funcion rotar donde se asigna valor a alpha
      //scale(this.escala)
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
    xt: 90,
    yt: 150,
    permitir: false,
    tecla: "",
    rgba: color(255, 87, 51, 255),
    linea: 1,
    lineargba: color(0),
    escala:windowWidth/900,
    rotar: function (angulo) {
      if (this.permitir) {
        this.alpha = angulo;
      }
    },
    desplazar: function (xO, yO) {
      if (this.permitir) {
        this.xO = xO;
        this.yO = yO;
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
      stroke(this.lineargba)
      push();
      translate(this.xO, this.yO);
      rotate(radians(this.alpha));
      //scale(this.escala)
      triangle(- 84, - 42, 84, - 42, 0, 42);
      pop();
    },
  };

  Triangulo3 = {
    x: 0,
    y: 0,
    xO: 50,
    yO: 230,
    alpha: 0,
    xt: 50,
    yt: 230,
    permitir: false,
    tecla: "",
    rgba: color(130, 20, 255, 255),
    linea: 1,
    lineargba: color(0),
    //escala:windowWidth/900,
    rotar: function (angulo) {
      if (this.permitir) {
        this.alpha = angulo;
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
      //scale(this.escala)
      stroke(this.lineargba)
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
    xt: 150,
    yt: 230,
    permitir: false,
    tecla: "",
    rgba: color(0, 6, 194, 255),
    linea: 1,
    lineargba: color(0),
    escala:windowWidth/900,
    rotar: function (angulo) {
      if (this.permitir) {
        this.alpha = angulo;
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
      stroke(this.lineargba)
      push();
      translate(this.xO, this.yO);
      rotate(radians(this.alpha));
      //scale(this.escala)
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
    alpha: 0,
    xt: 70,
    yt: 300,
    permitir: false,
    tecla: "",
    rgba: color(222, 21, 42, 255),
    linea: 1,
    lineargba: color(0),
    escala:windowWidth/900,
    rotar: function (angulo) {
      if (this.permitir) {
        this.alpha = angulo;
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
      stroke(this.lineargba)
      push();
      translate(this.xO, this.yO);
      rotate(radians(this.alpha));
      //scale(this.escala)
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
    xt: 160,
    yt: 310,
    permitir: false,
    tecla: "",
    rgba: color(255, 227, 20, 255),
    linea: 1,
    lineargba: color(0),
    rotar: function (angulo) {
      if (this.permitir) {
        this.alpha = angulo;
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
      stroke(this.lineargba)
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
    xt: 90,
    yt: 390,
    permitir: false,
    tecla: "",
    rgba: color(26, 206, 220, 255),
    linea: 1,
    lineargba: color(0),
    rotar: function (angulo) {
      if (this.permitir) {
        this.alpha = angulo;
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
      stroke(this.lineargba)
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
  
  Figuras=[Triangulo1, Triangulo2, Triangulo3, Triangulo4, Triangulo5, Cuadrado1, Cuadrado2];
  
 fondo = Object.assign([], Figuras)
  for (indice in Figuras) {
    fondo[indice]=Object.assign([],Figuras[indice])  
  }
  Niveles(fondo)
}

function Niveles(fondo){
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
  
}

 function exportar(Figuras){
  let x=[]
  let y=[]
  let tetha=[]
  let r=Figuras[6].r
       for(indice in Figuras){
         x.push(Figuras[indice].xO)
         y.push(Figuras[indice].yO)
         tetha.push(Figuras[indice].alpha)
       }
   return {
       x: x,
       y: y,
       rotacion: tetha,
       reflejar: r,}
     }

function draw() {
  background(220);
  
  for (indice in Figuras) {
    fondo[indice].dibujo()   
  }
  for (indice in Figuras) {
  Figuras[indice].dibujo()
  }
  
  
  Teclado(); 
}

function Teclado() {
for (indice in Figuras) {

  if (Triangulo1.tecla-1 == indice) {
      if (keyIsDown(LEFT_ARROW))  {
    Figuras[indice].xO -= 2;}
  if (keyIsDown(RIGHT_ARROW)) {
    Figuras[indice].xO += 2;}
  if (keyIsDown(UP_ARROW))    {
    Figuras[indice].yO -= 2;}
  if (keyIsDown(DOWN_ARROW))  {
    Figuras[indice].yO += 2;}
  if (keyIsDown(CONTROL))     {
    Figuras[indice].alpha += 0.5;} 
  else if (keyIsDown(SHIFT))  {
     Figuras[indice].alpha -= 0.5;}
  
    Figuras[indice].rgba = color(70, 90, 110, 255);
    Figuras[indice].linea = 5;
    Figuras[indice].desplazar(Figuras[indice].xO, Figuras[indice].yO); 
    Figuras[indice].rotar(Figuras[indice].alpha); 
  }
  
    
  
}
}
function keyReleased() { 
  if (Cuadrado2.teclar=='r') {
    Cuadrado2.tecla='7'
    Cuadrado2.reflejar(-Cuadrado2.r)
    }}
function keyPressed() { 
  for (indice in Figuras){
  Figuras[indice].evaluar();
  Cuadrado2.teclar = key;
  }
}
function keyTyped() { 
  if (key==='s'){ 
    n+=1
    saveJSON (exportar(Figuras), 'Nivel'+n)
  }
   for (indice in Figuras){
  Figuras[indice].tecla = key;
  Figuras[indice].linea = 1;
  Triangulo1.rgba = color(3, 150, 54, 255);
  Triangulo2.rgba = color(255, 87, 51, 255);
  Triangulo3.rgba = color(130, 20, 255, 255);
  Triangulo4.rgba = color(0, 6, 194, 255);
  Triangulo5.rgba = color(222, 21, 42, 255);
  Cuadrado1.rgba = color(255, 227, 20, 255);
  Cuadrado2.rgba = color(26, 206, 220, 255);}
}

function mouseWheel(event) {
  for (indice in Figuras){
  Figuras[indice].evaluar();
  A=Figuras[indice].alpha+event.deltaY * 0.5
  Figuras[indice].rotar(A); }
} 
function mouseDragged() {for (indice in Figuras){
  Figuras[indice].desplazar(mouseX, mouseY);}
}
function mousePressed() {
  for (indice in Figuras){
  Figuras[indice].evaluar();}
}

function doubleClicked() {
  Cuadrado2.reflejar(-Cuadrado2.r);
}

function arraysIdentical(a, b) {
  var i = a.length;
  if (i != b.length) return false;
  while (i--) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
