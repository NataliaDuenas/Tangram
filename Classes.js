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
