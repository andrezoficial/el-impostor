// Las pistas del impostor son intencionalmente indirectas: no describen
// la palabra ni la nombran, solo insinúan algo relacionado (un dicho, una
// sensación, un dato curioso). Así el impostor tiene que arriesgar una
// descripción sin saber realmente qué es la palabra.
export const wordBank = [
  // 🍎 Comida
  { word: "Manzana", clue: "Dicen que aleja al doctor", category: "Comida" },
  { word: "Pizza", clue: "Se pide por teléfono un viernes", category: "Comida" },
  { word: "Sushi", clue: "Se come con palitos", category: "Comida" },
  { word: "Hamburguesa", clue: "Viene con papas casi siempre", category: "Comida" },
  { word: "Helado", clue: "Hay que comerlo rápido en verano", category: "Comida" },
  { word: "Paella", clue: "Se cocina en una sartén enorme y plana", category: "Comida" },
  { word: "Tacos", clue: "Se doblan con la mano", category: "Comida" },
  { word: "Chocolate", clue: "Consuela después de un mal día", category: "Comida" },
  { word: "Limón", clue: "Arruga la cara de solo pensarlo", category: "Comida" },
  { word: "Miel", clue: "Unos insectos trabajan mucho por esto", category: "Comida" },

  // 🐾 Animales
  { word: "Perro", clue: "Dicen que es leal toda la vida", category: "Animales" },
  { word: "Gato", clue: "Según el dicho, tiene siete vidas", category: "Animales" },
  { word: "Elefante", clue: "Se dice que nunca olvida", category: "Animales" },
  { word: "Delfín", clue: "Parece que siempre está sonriendo", category: "Animales" },
  { word: "Águila", clue: "Aparece en escudos de varios países", category: "Animales" },
  { word: "Tiburón", clue: "Una película lo hizo famoso en los 70", category: "Animales" },
  { word: "Mariposa", clue: "Antes de ser esto, fue algo muy distinto", category: "Animales" },
  { word: "Serpiente", clue: "En el paraíso tenía mala fama", category: "Animales" },
  { word: "Búho", clue: "Se asocia con la sabiduría", category: "Animales" },
  { word: "Camaleón", clue: "Se le compara con alguien que cambia de opinión", category: "Animales" },

  // 🚗 Transporte
  { word: "Coche", clue: "Necesita una licencia para manejarlo", category: "Transporte" },
  { word: "Avión", clue: "Antes de subir, revisan tu equipaje", category: "Transporte" },
  { word: "Barco", clue: "Uno muy famoso se hundió en 1912", category: "Transporte" },
  { word: "Bicicleta", clue: "De niño da miedo soltar las manitas", category: "Transporte" },
  { word: "Tren", clue: "No se puede adelantar en curva", category: "Transporte" },
  { word: "Helicóptero", clue: "Su sonido delata que algo importante pasa", category: "Transporte" },
  { word: "Metro", clue: "Bajo la ciudad, todos van apurados", category: "Transporte" },

  // 🎵 Música y Entretenimiento
  { word: "Guitarra", clue: "Con seis de estas se arma casi cualquier canción", category: "Música" },
  { word: "Piano", clue: "Tiene teclas blancas y negras, pero no es un teclado de oficina", category: "Música" },
  { word: "Batería", clue: "El último en aprender esto en una banda de garaje", category: "Música" },
  { word: "Película", clue: "Se acompaña de palomitas casi siempre", category: "Entretenimiento" },
  { word: "Libro", clue: "Algunos huelen mejor cuando son viejos", category: "Entretenimiento" },
  { word: "Museo", clue: "Ahí no se puede tocar nada", category: "Entretenimiento" },
  { word: "Teatro", clue: "Al final, todos aplauden de pie o no", category: "Entretenimiento" },
  { word: "Videojuego", clue: "Algunos padres dicen que quita mucho tiempo", category: "Entretenimiento" },

  // 🏞️ Lugares
  { word: "Playa", clue: "La arena se te mete en todos lados", category: "Lugares" },
  { word: "Montaña", clue: "Cuesta más subir que bajar", category: "Lugares" },
  { word: "Bosque", clue: "Fácil perderse si no llevas un mapa", category: "Lugares" },
  { word: "Ciudad", clue: "Nunca falta tráfico a cierta hora", category: "Lugares" },
  { word: "Desierto", clue: "De noche hace más frío de lo que uno cree", category: "Lugares" },
  { word: "Parque", clue: "Los domingos se llena de familias", category: "Lugares" },
  { word: "Cascada", clue: "De lejos suena como lluvia constante", category: "Lugares" },

  // ⚽ Deportes
  { word: "Fútbol", clue: "Cada cuatro años detiene al mundo entero", category: "Deportes" },
  { word: "Baloncesto", clue: "Ahí importa mucho ser alto", category: "Deportes" },
  { word: "Tenis", clue: "Nadie aplaude a la mitad de la jugada", category: "Deportes" },
  { word: "Natación", clue: "El agua no perdona a quien no practicó", category: "Deportes" },
  { word: "Ciclismo", clue: "Una etapa de esto puede durar todo el día", category: "Deportes" },
  { word: "Boxeo", clue: "Ahí perder por puntos también cuenta", category: "Deportes" },
  { word: "Surf", clue: "Hay que saber leer el mar antes de intentarlo", category: "Deportes" },

  // 🔬 Ciencia y Tecnología
  { word: "Microscopio", clue: "Gracias a esto sabemos que existen los microbios", category: "Ciencia" },
  { word: "Telescopio", clue: "Lo que ves ahí puede llevar años en llegar", category: "Ciencia" },
  { word: "Computadora", clue: "Se reinicia cuando ya no sabemos qué más hacer", category: "Tecnología" },
  { word: "Teléfono", clue: "La batería nunca alcanza el día completo", category: "Tecnología" },
  { word: "Internet", clue: "Cuando falla, parece que el mundo se detiene", category: "Tecnología" },
  { word: "Robot", clue: "Muchas películas imaginan que un día se rebelará", category: "Tecnología" },

  // 🎄 Objetos
  { word: "Lámpara", clue: "En los cuentos, a veces sale un genio de una", category: "Objetos" },
  { word: "Reloj", clue: "Todos lo miran cuando la clase se hace eterna", category: "Objetos" },
  { word: "Espejo", clue: "En los cuentos de brujas siempre habla", category: "Objetos" },
  { word: "Sombrero", clue: "Quitárselo era antes señal de respeto", category: "Objetos" },
  { word: "Paraguas", clue: "Siempre se olvida el día que más se necesita", category: "Objetos" },
  { word: "Llave", clue: "Perderla arruina cualquier salida", category: "Objetos" },

  // 🎭 Profesiones
  { word: "Médico", clue: "Su letra es casi imposible de leer", category: "Profesiones" },
  { word: "Maestro", clue: "Aguanta treinta preguntas al mismo tiempo", category: "Profesiones" },
  { word: "Policía", clue: "Su silbato pone nervioso a cualquiera", category: "Profesiones" },
  { word: "Bombero", clue: "Sube donde otros bajan corriendo", category: "Profesiones" },
  { word: "Chef", clue: "Prueba su propia comida antes que nadie", category: "Profesiones" },
  { word: "Astronauta", clue: "Ve amanecer varias veces en un solo día de trabajo", category: "Profesiones" },
  { word: "Detective", clue: "Sospecha hasta de quien parece inocente", category: "Profesiones" },

  // 🌎 Naturaleza
  { word: "Arcoíris", clue: "Aparece después de algo que nadie disfruta", category: "Naturaleza" },
  { word: "Lluvia", clue: "Arruina planes de fin de semana", category: "Naturaleza" },
  { word: "Nieve", clue: "Suspende clases en algunos países", category: "Naturaleza" },
  { word: "Volcán", clue: "Puede estar dormido durante siglos", category: "Naturaleza" },
  { word: "Océano", clue: "Cubre más de la mitad del planeta", category: "Naturaleza" },
  { word: "Estrella", clue: "Lo que ves quizás ya no existe", category: "Naturaleza" },
  { word: "Río", clue: "Nunca corre en la misma dirección dos veces", category: "Naturaleza" },
  { word: "Terremoto", clue: "Nadie sabe el día exacto en que llegará", category: "Naturaleza" },

  // 🎉 Fiestas y Celebraciones
  { word: "Cumpleaños", clue: "Un año más se anuncia con velas", category: "Celebraciones" },
  { word: "Boda", clue: "Alguien siempre llora de la emoción", category: "Celebraciones" },
  { word: "Navidad", clue: "Las luces empiezan antes de tiempo cada año", category: "Celebraciones" },
  { word: "Carnaval", clue: "El disfraz importa más que la comodidad", category: "Celebraciones" },
  { word: "Graduación", clue: "El birrete termina en el aire al final", category: "Celebraciones" },

  // 🏠 Hogar
  { word: "Cocina", clue: "Ahí se arman las mejores conversaciones familiares", category: "Hogar" },
  { word: "Sofá", clue: "Es el lugar favorito de una siesta de domingo", category: "Hogar" },
  { word: "Ducha", clue: "Ahí surgen las mejores ideas del día", category: "Hogar" },
  { word: "Nevera", clue: "Se abre sin hambre, solo por costumbre", category: "Hogar" },
  { word: "Escalera", clue: "Da miedo cuando se corta la luz", category: "Hogar" },

  // 🦸 Ficción
  { word: "Superhéroe", clue: "Casi siempre esconde quién es en realidad", category: "Ficción" },
  { word: "Pirata", clue: "Un mapa con una equis lo pone feliz", category: "Ficción" },
  { word: "Fantasma", clue: "Nadie le cree a quien dice haberlo visto", category: "Ficción" },
  { word: "Dragón", clue: "En los cuentos, guarda algo muy valioso", category: "Ficción" },
  { word: "Bruja", clue: "En los cuentos vive lejos, rodeada de árboles", category: "Ficción" },
];

// excludeWord evita repetir la misma palabra dos rondas seguidas.
// category filtra el banco (usa null o "Todas" para no filtrar).
export const getRandomWord = (excludeWord, category) => {
  const pool = category && category !== 'Todas'
    ? wordBank.filter(item => item.category === category)
    : wordBank;

  const source = pool.length > 0 ? pool : wordBank;

  if (source.length <= 1) {
    return source[0];
  }

  let candidate;
  do {
    candidate = source[Math.floor(Math.random() * source.length)];
  } while (candidate.word === excludeWord);

  return candidate;
};

export const getCategories = () => {
  return [...new Set(wordBank.map(item => item.category))].sort();
};
