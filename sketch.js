function setup() {
  createCanvas(windowWidth, windowHeight);
  let wW = windowWidth,
    p0x = 0 * (wW / 125),
    p28x = 28 * (wW / 125),
    p14x = 14 * (wW / 125),
    p21x = 21 * (wW / 125),
    p7x = 7 * (wW / 125);
  triangulo1 = new Triangulo(p0x, p0x, p28x, p0x, p14x, p14x, 3, 150, 54);
  triangulo2 = new Triangulo(p0x, p0x, p0x, p28x, p14x, p14x, 255, 87, 5);
  triangulo3 = new Triangulo(p28x, p0x, p28x, p14x, p21x, p7x, 88, 24, 69);
  triangulo4 = new Triangulo(p14x, p14x, p21x, p21x, p7x, p21x, 16, 26, 187);
  triangulo5 = new Triangulo(p28x, p14x, p14x, p28x, p28x, p28x, 199, 0, 57);
}

function draw() {
  background(220);
  triangulo1.show();
  triangulo2.show();
  triangulo3.show();
  triangulo4.show();
  triangulo5.show();
}

function mousePressed() {
  if (triangulo1.clicked() == true) {
    triangulo1.x0 = mouseX;
    triangulo1.y0 = mouseY;
    print("pressed");
  } else if (triangulo2.clicked() == true) {
    triangulo2.x0 = mouseX;
    triangulo2.y0 = mouseY;
  } else if (triangulo3.clicked() == true) {
    triangulo3.x0 = mouseX;
    triangulo3.y0 = mouseY;
  } else if (triangulo4.clicked() == true) {
    triangulo4.x0 = mouseX;
    triangulo4.y0 = mouseY;
  } else if (triangulo5.clicked() == true) {
    triangulo5.x0 = mouseX;
    triangulo5.y0 = mouseY;
  }
}
function mouseDragged() {
  if (triangulo1.clicked() == true) {
    triangulo1.dx = mouseX - triangulo1.x0;
    triangulo1.dy = mouseY - triangulo1.y0;
    print("Dragged");
  } else if (triangulo2.clicked() == true) {
    triangulo2.dx = mouseX - triangulo2.x0;
    triangulo2.dy = mouseY - triangulo2.y0;
  } else if (triangulo3.clicked() == true) {
    triangulo3.dx = mouseX - triangulo3.x0;
    triangulo3.dy = mouseY - triangulo3.y0;
  } else if (triangulo4.clicked() == true) {
    triangulo4.dx = mouseX - triangulo4.x0;
    triangulo4.dy = mouseY - triangulo4.y0;
  } else if (triangulo5.clicked() == true) {
    triangulo5.dx = mouseX - triangulo5.x0;
    triangulo5.dy = mouseY - triangulo5.y0;
  }
}
function mouseClicked() {
  triangulo1.actualizar();
  triangulo2.actualizar();
  triangulo3.actualizar();
  triangulo4.actualizar();
  triangulo5.actualizar();
  print("Clicked");
}

class Triangulo {
  constructor(ax, ay, bx, by, cx, cy, r, g, b) {
    //Método de creación
    this.ax = ax;
    this.ay = ay;
    this.bx = bx;
    this.by = by;
    this.cx = cx;
    this.cy = cy;
    this.r = r;
    this.g = g;
    this.b = b;
    this.dx = 0;
    this.dy = 0;
    this.x0 = 0;
    this.y0 = 0;
  }
  show() {
    fill(this.r, this.g, this.b);
    let ax = this.dx + this.ax,
      bx = this.dx + this.bx,
      cx = this.dx + this.cx,
      ay = this.dy + this.ay,
      by = this.dy + this.by,
      cy = this.dy + this.cy;

    triangle(ax, ay, bx, by, cx, cy);
  }
  actualizar() {
    this.ax = this.dx + this.ax;
    this.bx = this.dx + this.bx;
    this.cx = this.dx + this.cx;
    this.ay = this.dy + this.ay;
    this.by = this.dy + this.by;
    this.cy = this.dy + this.cy;
    this.dx = 0;
    this.dy = 0;
  }

  clicked() {
    let Px = mouseX,
      Py = mouseY,
      v1 =
        (this.ax * (this.cy - this.ay) +
          (Py - this.ay) * (this.cx - this.ax) -
          Px * (this.cy - this.ay)) /
        ((this.by - this.ay) * (this.cx - this.ax) -
          (this.bx - this.ax) * (this.cx - this.ay)),
      v2 = (Py - this.ay - v1 * (this.by - this.ay)) / (this.cy - this.ay),
      v3 = v1 + v2;
    if (v1 >= 0 && v2 >= 0 && v3 <= 1) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }
}
