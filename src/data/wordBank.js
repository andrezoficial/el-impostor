export const wordBank = [
  // 🍎 Comida
  { word: "Manzana", clue: "Fruta roja o verde", category: "Comida" },
  { word: "Pizza", clue: "Comida italiana redonda", category: "Comida" },
  { word: "Sushi", clue: "Comida japonesa con arroz", category: "Comida" },
  { word: "Hamburguesa", clue: "Comida rápida con carne", category: "Comida" },
  { word: "Helado", clue: "Postre frío y dulce", category: "Comida" },
  { word: "Paella", clue: "Plato español con arroz", category: "Comida" },
  { word: "Tacos", clue: "Comida mexicana", category: "Comida" },
  { word: "Chocolate", clue: "Dulce de cacao", category: "Comida" },
  
  // 🐾 Animales
  { word: "Perro", clue: "Mejor amigo del hombre", category: "Animales" },
  { word: "Gato", clue: "Animal independiente y peludo", category: "Animales" },
  { word: "Elefante", clue: "Animal grande con trompa", category: "Animales" },
  { word: "Delfín", clue: "Animal marino inteligente", category: "Animales" },
  { word: "Águila", clue: "Ave rapaz", category: "Animales" },
  { word: "Tiburón", clue: "Depredador del mar", category: "Animales" },
  { word: "Mariposa", clue: "Insecto con alas coloridas", category: "Animales" },
  { word: "Serpiente", clue: "Reptil sin patas", category: "Animales" },
  
  // 🚗 Transporte
  { word: "Coche", clue: "Medio de transporte con 4 ruedas", category: "Transporte" },
  { word: "Avión", clue: "Vuela por el cielo", category: "Transporte" },
  { word: "Barco", clue: "Navega por el agua", category: "Transporte" },
  { word: "Bicicleta", clue: "Transporte de 2 ruedas", category: "Transporte" },
  { word: "Tren", clue: "Vehículo sobre rieles", category: "Transporte" },
  { word: "Helicóptero", clue: "Vuela con hélices", category: "Transporte" },
  
  // 🎨 Arte y Entretenimiento
  { word: "Guitarra", clue: "Instrumento de cuerdas", category: "Música" },
  { word: "Piano", clue: "Instrumento con teclas", category: "Música" },
  { word: "Película", clue: "Historia en pantalla grande", category: "Entretenimiento" },
  { word: "Libro", clue: "Historia con páginas", category: "Entretenimiento" },
  { word: "Museo", clue: "Lugar con arte y cultura", category: "Entretenimiento" },
  { word: "Teatro", clue: "Lugar para obras en vivo", category: "Entretenimiento" },
  
  // 🏞️ Lugares
  { word: "Playa", clue: "Lugar con arena y mar", category: "Lugares" },
  { word: "Montaña", clue: "Elevación natural alta", category: "Lugares" },
  { word: "Bosque", clue: "Lugar con muchos árboles", category: "Lugares" },
  { word: "Ciudad", clue: "Lugar con muchos edificios", category: "Lugares" },
  { word: "Desierto", clue: "Lugar con mucha arena", category: "Lugares" },
  { word: "Parque", clue: "Lugar verde para pasear", category: "Lugares" },
  
  // 🎮 Deportes
  { word: "Fútbol", clue: "Deporte con balón y porterías", category: "Deportes" },
  { word: "Baloncesto", clue: "Deporte con aro y balón", category: "Deportes" },
  { word: "Tenis", clue: "Deporte con raqueta", category: "Deportes" },
  { word: "Natación", clue: "Deporte en el agua", category: "Deportes" },
  { word: "Ciclismo", clue: "Deporte con bicicleta", category: "Deportes" },
  { word: "Boxeo", clue: "Deporte de combate", category: "Deportes" },
  
  // 🔬 Ciencia
  { word: "Microscopio", clue: "Instrumento para ver lo pequeño", category: "Ciencia" },
  { word: "Telescopio", clue: "Instrumento para ver lo lejano", category: "Ciencia" },
  { word: "Computadora", clue: "Máquina que procesa datos", category: "Tecnología" },
  { word: "Teléfono", clue: "Dispositivo para comunicarse", category: "Tecnología" },
  
  // 🎄 Objetos
  { word: "Lámpara", clue: "Objeto que da luz", category: "Objetos" },
  { word: "Reloj", clue: "Mide el tiempo", category: "Objetos" },
  { word: "Espejo", clue: "Refleja la imagen", category: "Objetos" },
  { word: "Sombrero", clue: "Accesorio para la cabeza", category: "Objetos" },
  { word: "Paraguas", clue: "Protege de la lluvia", category: "Objetos" },
  
  // 🎭 Profesiones
  { word: "Médico", clue: "Profesional de la salud", category: "Profesiones" },
  { word: "Maestro", clue: "Enseña conocimientos", category: "Profesiones" },
  { word: "Policía", clue: "Mantiene el orden", category: "Profesiones" },
  { word: "Bombero", clue: "Apaga incendios", category: "Profesiones" },
  { word: "Chef", clue: "Cocina profesional", category: "Profesiones" },
  
  // 🌎 Naturaleza
  { word: "Arcoíris", clue: "Colores en el cielo", category: "Naturaleza" },
  { word: "Lluvia", clue: "Agua que cae del cielo", category: "Naturaleza" },
  { word: "Nieve", clue: "Agua congelada que cae", category: "Naturaleza" },
  { word: "Volcán", clue: "Montaña que expulsa fuego", category: "Naturaleza" },
  { word: "Océano", clue: "Gran masa de agua", category: "Naturaleza" },
];

export const getRandomWord = () => {
  return wordBank[Math.floor(Math.random() * wordBank.length)];
};

export const getCategories = () => {
  return [...new Set(wordBank.map(item => item.category))];
};