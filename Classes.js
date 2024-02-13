class Button {
 constructor(x,y,xWidth,yWidth){
   this.x = x;
   this.y = y;
   this.xWidth = xWidth;
   this.yWidth = yWidth;
 }
  set x(x){
    if (typeof x=== "number"){
      this._x = x;
    }else{
      console.error("X parameter has to be a number!");
    }
  }
  get x(){
    return this._x;
  }
   set y(y){
    if (typeof y=== "number"){
      this._y = y;
    }else{
      console.error("y parameter has to be a number!");
    }
  }
  get y(){
    return this._y;
  }
  
   set xWidth(xWidth){
    if (typeof xWidth=== "number"){
      this._xWidth = xWidth;
    }else{
      console.error("XWidth parameter has to be a number!");
    }
  }
  get xWidth(){
    return this._xWidth;
  }
   set yWidth(yWidth){
    if (typeof yWidth=== "number"){
      this._yWidth = yWidth;
    }else{
      console.error("X parameter has to be a number!");
    }
  }
  get yWidth(){
    return this._yWidth;
  }
  
  displayButton(){
  noStroke();
    noFill();
    rect (this.x,this.y,this.xWidth,this.yWidth)
  }
 
}



class ButtonPlay extends Button {
  
   clicked(){
    if(mouseX>this.x && mouseX<(this.x+this.xWidth) && mouseY>this.y  && mouseY<(this.y+this.yWidth)){
      console.log("buttonPlay has been clicked");    
      display="game";
      Modo = 1;
    }
   }
}

 class ButtonCreateIns extends Button{
   clicked(){
    if(mouseX>this.x && mouseX<(this.x+this.xWidth) && mouseY>this.y  && mouseY<(this.y+this.yWidth)){
      console.log("buttonCreate has been clicked");    
      display="cModeIns";
    }
   }
 }



class ButtonCreate extends Button{
   clicked(){
    if(mouseX>this.x && mouseX<(this.x+this.xWidth) && mouseY>this.y  && mouseY<(this.y+this.yWidth)){
      console.log("buttonCreate has been clicked");    
      display="cMode";
    }
   }
 }


class ButtonReturn extends Button{
   clicked(){
    if(mouseX>this.x && mouseX<(this.x+this.xWidth) && mouseY>this.y  && mouseY<(this.y+this.yWidth)){
      console.log("buttonReturn has been clicked");    
      display="home";
    }
   }
}


class ButtonIns extends Button{
   clicked(){
    if(mouseX>this.x && mouseX<(this.x+this.xWidth) && mouseY>this.y  && mouseY<(this.y+this.yWidth)){
      console.log("buttonIns has been clicked");    
      display="instructions";
    }
   }
}


class Piezas {
  constructor(xO, yO, rgba, tecla = 0, longitud = 1) {
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
