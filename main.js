let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #1398B8;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #18B8A2;">Hago contenido en TECNOLOchicas y soy estudiante de Ingeniería en Informática.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
