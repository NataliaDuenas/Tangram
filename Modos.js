function ModoCreador() {
  Save.show();
  Left.show();
  Right.show();
  Animales.hide();
  Usuario.hide();
  Barra.hide()
  background(0, 0, 67);
  stroke(64, 64, 89, 255);
  fill("rgba(64, 64, 89,255)");
  Limite = rect(0, 0, (3 * tamaño) / 4, (3 * tamaño) / 4);
  for (indice in Figuras) {
    Figuras[indice].dibujo();
    Figuras[indice].evaluar(TeclaUsuario, ColorUsuario);
  }
  Area();
  Celular();
  Teclado();
}

function ModoJuegoUsuario() {
  Save.hide();
  Left.show();
  Right.show();
  Animales.hide();
  Usuario.hide();
  background(0, 0, 67);

  for (indice in Figuras) {
    Fondo[indice].dibujo();
  }
  for (indice in Figuras) {
    Figuras[indice].dibujo();
    Figuras[indice].evaluar(TeclaUsuario, ColorUsuario);
  }
  Celular();
  Teclado();
  Area();
  PasarNivel();
}
function ModoJuegoPredeterminado() {
  Save.hide();
  Left.show();
  Right.show();
  Animales.hide();
  Usuario.hide();
  background(0, 0, 67);
  Niveles(Fondo);
  for (indice in Figuras) {
    Fondo[indice].dibujo();
  }
  for (indice in Figuras) {
    Figuras[indice].dibujo();
    Figuras[indice].evaluar(TeclaUsuario, ColorUsuario);
  }
  Celular();
  Teclado();
  Area();
  PasarNivel();
}
function JuegosOpciones() {
  background(0, 0, 67);
  image(fondoPantalla, 0, 0, 500, 500);
  Save.hide();
  Left.hide();
  Right.hide();
  Animales.show();
  Usuario.show();
}
function Modo3() {
  Modo = 3;
}
function Modo4() {
  Modo = 4;
}
