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
  areaLimite = pow(int((3 * tamaño) / 4), 2);
  return { areaLimite, areaNiveles };
}

function Validar() {
  let r, g, b, a;
  loadPixels();
  pixelesDiseño = 0;
  pixelesNivel = 0;
  for (y = 0; y < int((3 * tamaño) / 4); y++) {
    for (x = 0; x < int((3 * tamaño) / 4); x++) {
      indice = (x + y * windowWidth) * 4;
      r = pixels[indice + 0];
      g = pixels[indice + 1];
      b = pixels[indice + 2];
      a = pixels[indice + 3];
      if (r == 64 && g == 64 && b == 89 && a == 255) {
        pixelesDiseño += 1;
      }
      if (r == 255 && g == 255 && b == 240 && a == 255) {
        pixelesNivel += 1;
      }
    }
  }
  return { pixelesDiseño, pixelesNivel };
}

function Exportar(Figuras) {
  let x = [];
  let y = [];
  let tetha = [];
  let r = Figuras[6].r;
  let longitud = [];
  for (indice in Figuras) {
    x.push((Figuras[indice].xO * 1) / tamaño);
    y.push((Figuras[indice].yO * 1) / tamaño);
    tetha.push(Figuras[indice].alpha);
    longitud.push(Figuras[indice].longitud);
  }
  return {
    x: x,
    y: y,
    rotacion: tetha,
    reflejar: r,
    longitud: longitud,
  };
}

function SalvarTexto() {
  Validar();
  if (pixelesDiseño * 0.99 + distanciaNiveles * 10 < areaLimite - areaNiveles) {
    return true;
  } else {
    return false;
  }
}

function SalvarNiveles(){
  Validar();
  if (pixelesDiseño * 0.99 + distanciaNiveles * 10 < areaLimite - areaNiveles) {  n += 1;
  saveJSON(Exportar(Figuras), "Nivel" + n);}
}

function Data(data) {
  Datos2 = data;
  let x, y, tetha, longitud, escala;
  for (indice in Fondo) {
    x = Datos2.x[indice] * tamaño;
    y = Datos2.y[indice] * tamaño;
    tetha = Datos2.rotacion[indice];
    longitud = Datos2.longitud[indice];
    Fondo[indice].permitir = true;
    Fondo[indice].desplazar(x, y);
    Fondo[indice].rotar(tetha);
    Fondo[indice].longitud = longitud;
    Fondo[indice].linea = 3;
    Fondo[indice].lineargba = "Ivory";
    if (indice == 6) {
      Fondo[indice].r = Datos2.reflejar;
    }
    Fondo[indice].permitir = false;
  }
}

function Niveles(Fondo) {
  let x, y, tetha, longitud, escala;
  for (indice in Fondo) {
    x = Datos[IndiceNiveles].x[indice] * tamaño;
    y = Datos[IndiceNiveles].y[indice] * tamaño;
    tetha = Datos[IndiceNiveles].rotacion[indice];
    longitud = Datos[IndiceNiveles].longitud[indice];
    Fondo[indice].permitir = true;
    Fondo[indice].desplazar(x, y);
    Fondo[indice].rotar(tetha);
    Fondo[indice].longitud = longitud;
    Fondo[indice].linea = 3;
    Fondo[indice].lineargba = "Ivory";
    if (indice == 6) {
      Fondo[indice].r = Datos[IndiceNiveles].reflejar;
    }
    Fondo[indice].permitir = false;
  }
}

function PasarNivel() {
  Validar();
  if (areaNiveles > pixelesNivel && pixelesNivel < 0.02 * areaNiveles) {
    IndiceNiveles += 1;
    return true
    
    console.log("Has pasado de nivel!");
    print("Has pasado de nivel!");
  }
}

function FastPass(){
  if(IndiceNiveles<10){
    IndiceNiveles += 1;
  }
}
function newText() {
  NumberLevel = input.value();
}
