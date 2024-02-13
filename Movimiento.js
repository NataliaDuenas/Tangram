function Izquierda(){
  for (indice in Figuras){
  let Tetha = Figuras[indice].alpha;
  Tetha = Figuras[indice].alpha - 1.5
  Figuras[indice].rotar(Tetha);}
}

function Derecha(){
   for (indice in Figuras){
  let Tetha = Figuras[indice].alpha;
  Tetha = Figuras[indice].alpha + 1.5
  Figuras[indice].rotar(Tetha);}
}

function Celular() {
  Save.mousePressed(SalvarNiveles)
  Left.mousePressed(Izquierda)
  Right.mousePressed(Derecha)
}

function Teclado() {
  for (indice in Figuras) {
    let x = Figuras[indice].xO;
    let y = Figuras[indice].yO;
    let Tetha = Figuras[indice].alpha;
    a = get(Figuras[indice].xO, Figuras[indice].yO);
    b = ColorUsuario;
    
    if (Figuras[indice].tecla == TeclaUsuario||arraysIdentical(a,b)) {
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
  if (key === "s") {
    SalvarNiveles();
  }
  TeclaUsuario = key;
  if (TeclaUsuario == "r") {
    Cuadrado2.reflejar(-Cuadrado2.r);
  }
}

function mouseWheel(event) {
  for (indice in Figuras) {
    ColorUsuario = get(mouseX, mouseY);
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
  let pcolor=ColorUsuario
  let a=[0, 0, 67, 255]
  let b=get(mouseX, mouseY)
  if (!arraysIdentical(a,b)){
    ColorUsuario = get(mouseX, mouseY);
  }  
  if (display=="home"){
  bP1.clicked();
  bC1.clicked();
  bI1.clicked();
} 
if(display=="cModeIns"){
   bC2.clicked();
  bR1.clicked();
}
if (display=="instructions"){
  bP2.clicked();
  bC3.clicked();
}
}
