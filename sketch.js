let img;
let display;

let indice;
let Figuras;
let ColorUsuario = [];
let TeclaUsuario = "tcla";
let n = 0;
let tamaño;
let areaNiveles;
let areaLimite;
let distanciaNiveles;
let pixeles = 0;
let Save;
let Modo;
let IndiceNiveles = 0;
let Nivel = [];
let NumberLevel=3;
let Datos = [];
//Display =="home"
function preload(){
  let r = random (1,6);
  let a= parseInt(r)+".png";
  home= loadImage(a);
  instructions = loadImage("6.png");
  cInstructions = loadImage("7.png");
  sound = loadSound("Sound.mp3");
  
  fondoPantalla = loadImage("Fondo.jpg");
  for (let i = 1; i <= 11; i++) {
    Nivel.push("Animales" + i + ".json");
  }
  for (let j = 0; j <= 10; j++) {
    a = loadJSON(Nivel[j]);
    Datos.push(a);
  }
}




function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  if (windowWidth < windowHeight) {
    tamaño = windowWidth;
    PosicionBotones = [0, tamaño];
  } else {
    tamaño = windowHeight;
    PosicionBotones = [tamaño, 0];
  }
  Save = createButton("Save");
  Left = createButton("Left");
  Right = createButton("Right");
  Animales = createButton("Animales");
  Usuario = createButton("Tus Niveles");
  Pasar = createButton("Pasar");
 // Barra = createInput();
 // Barra.position(0, (19 * tamaño) / 20);
  Pasar.position(
    PosicionBotones[0] + (4 / 5) * PosicionBotones[1],
    PosicionBotones[1] + (4 / 5) * PosicionBotones[0]);
  Save.size(tamaño / 7);
  Save.position(PosicionBotones[0], PosicionBotones[1]);
  Left.size(tamaño / 7);
  Left.position(
    PosicionBotones[0] + (1 / 4) * PosicionBotones[1],
    PosicionBotones[1] + (1 / 4) * PosicionBotones[0]
  );
  Right.size(tamaño / 7);
  Right.position(
    PosicionBotones[0] + (2 / 4) * PosicionBotones[1],
    PosicionBotones[1] + (2 / 4) * PosicionBotones[0]
  );
  Animales.size(tamaño / 4);
  Animales.position(
   (1 / 2) * PosicionBotones[0] + (1 / 10) * PosicionBotones[1],
   (1 / 2) * PosicionBotones[1] + (1 / 10) * PosicionBotones[0]
  );
  Usuario.size(tamaño / 4);
  Usuario.position(
   (1 / 10) * PosicionBotones[0] + (1 / 2) * PosicionBotones[1],
   (1 / 10) * PosicionBotones[1] + (1 / 2) * PosicionBotones[0]
  );
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
  Fondo6 = new Cuadrado(0, 0, "Ivory");
  Fondo7 = new Cuadrilatero(0, 0, "Ivory");

  Fondo = [Fondo1, Fondo2, Fondo3, Fondo4, Fondo5, Fondo6, Fondo7];
  let url=  "https://raw.githubusercontent.com/NataliaDuenas/Tangram/main/Niveles/Nivel" +
        NumberLevel +
        ".json"
  loadJSON(url, Data)
  
   Animales.mousePressed(Modo3);
   Usuario.mousePressed(Modo4);
   Pasar.mousePressed(FastPass);
  
  //display
  
  SoundButton=createButton ("Sound On");
  SoundButton.mousePressed (playSong);
  SoundButton.position(0,0);
  display="home";
  if(display=="home"||"instructions"||"cModeIns"){
    Save.hide();
    Left.hide();
    Right.hide();
    Animales.hide();
    Usuario.hide();
    Pasar.hide();
  //  Barra.hide();
  }
}

function playSong (){
  if(!sound.isPlaying()){
    sound.play();
    sound.setVolume(0.1);
    SoundButton.html("Sound off")
  }else{
    sound.pause();
    SoundButton.html("Sound on")
  }
  
}
let bP1=new ButtonPlay(90,230,130,55);
let bC1=new ButtonCreateIns(290,230,130,55);
let bC2=new ButtonCreate(305,450,80,28);
let bR1=new ButtonReturn(120,450,80,28);
let bI1=new ButtonIns(412,450,80,30);
let bP2=new ButtonPlay(120,450,80,28);
let bC3=new ButtonCreateIns(307,450,80,28);


function draw() {
  
  if (display=="home"){
      image (home,0,0,500,500)   
  bP1.displayButton();
  bC1.displayButton();
  bI1.displayButton();
}
  if (display=="instructions"){
    image (instructions,0,0,500,500)
    bP2.displayButton();
    bC3.displayButton();
  }
  if (display=="game"){
    if (Modo == 1){
      JuegosOpciones();
    }
    else if (Modo == 3){
      ModoJuegoPredeterminado();
      if (IndiceNiveles == 10) {
      Ganaste();
      }
    }
    else if (Modo == 4){
      ModoJuegoUsuario();
      if (PasarNivel()){Ganaste();}
  }
 
    }
   if (display=="cModeIns"){
    image (cInstructions,0,0,500,500);
    bC2.displayButton();
    bR1.displayButton();
  }
  if (display=="cMode"){
    ModoCreador();
  if(SalvarTexto()){Guardable()}else{FigurasCuadrado()}
}
  }

 
  


function arraysIdentical(a, b) {
  //Autor:Tim Down,https://stackoverflow.com/questions/51276005/javascript-how-to-check-for-certain-items-in-an-array
  var i = a.length;
  if (i != b.length) return false;
  while (i--) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
