// Las pistas del impostor son deliberadamente difíciles: no describen
// el objeto, no usan su función más obvia ni su categoría, y varias
// podrían encajar con más de una palabra del mismo grupo. La idea es
// que el impostor tenga que improvisar con muy poca certeza real,
// nunca que pueda deducir la palabra exacta con la pista.
export const wordBank = [
  // 🍎 Comida
  { word: "Manzana", clue: "Empezó un problema en un jardín, según cuentan", category: "Comida" },
  { word: "Pizza", clue: "Ha sido motivo de discusión entre países enteros", category: "Comida" },
  { word: "Sushi", clue: "Comerlo mal preparado puede salir caro", category: "Comida" },
  { word: "Hamburguesa", clue: "Hay franquicias que han hecho fortunas con esto", category: "Comida" },
  { word: "Helado", clue: "Nadie lo disfruta con prisa", category: "Comida" },
  { word: "Paella", clue: "Cada familia jura tener la única receta correcta", category: "Comida" },
  { word: "Tacos", clue: "Un mal tenedor no ayuda en nada aquí", category: "Comida" },
  { word: "Chocolate", clue: "Hay quien dice que mejora el ánimo", category: "Comida" },
  { word: "Limón", clue: "Pequeño, pero cambia el sabor de todo lo demás", category: "Comida" },
  { word: "Miel", clue: "Su producción depende de un trabajo en equipo enorme", category: "Comida" },

  // 🐾 Animales
  { word: "Perro", clue: "En muchas casas tiene su propio lugar para dormir", category: "Animales" },
  { word: "Gato", clue: "Ignora órdenes con una elegancia particular", category: "Animales" },
  { word: "Elefante", clue: "En ciertas culturas representa buena suerte", category: "Animales" },
  { word: "Delfín", clue: "Su forma de comunicarse aún no se entiende del todo", category: "Animales" },
  { word: "Águila", clue: "Varios países la pusieron en su bandera", category: "Animales" },
  { word: "Tiburón", clue: "Su mala fama no coincide con las estadísticas reales", category: "Animales" },
  { word: "Mariposa", clue: "Su vida tiene etapas muy distintas entre sí", category: "Animales" },
  { word: "Serpiente", clue: "En algunas tradiciones representa sanación", category: "Animales" },
  { word: "Búho", clue: "Casi nunca se le ve de día", category: "Animales" },
  { word: "Camaleón", clue: "Se usa como comparación cuando alguien cambia de bando", category: "Animales" },

  // 🚗 Transporte
  { word: "Coche", clue: "Su valor baja apenas sale de la tienda", category: "Transporte" },
  { word: "Avión", clue: "El momento más tenso no es cuando ya está arriba", category: "Transporte" },
  { word: "Barco", clue: "Hay ceremonias especiales para su primer viaje", category: "Transporte" },
  { word: "Bicicleta", clue: "Aprender a usarla no se olvida con los años", category: "Transporte" },
  { word: "Tren", clue: "En algunos países es más puntual que en otros", category: "Transporte" },
  { word: "Helicóptero", clue: "Los reporteros lo usan para ver lo que otros no pueden", category: "Transporte" },
  { word: "Metro", clue: "Bajo tierra, el tiempo parece pasar distinto", category: "Transporte" },

  // 🎵 Música y Entretenimiento
  { word: "Guitarra", clue: "En una fiesta, siempre hay alguien que quiere tocarla mal", category: "Música" },
  { word: "Piano", clue: "Mudarlo de lugar suele necesitar varias personas", category: "Música" },
  { word: "Batería", clue: "Los vecinos no siempre agradecen esta práctica", category: "Música" },
  { word: "Película", clue: "Hay gente que prefiere leer los créditos hasta el final", category: "Entretenimiento" },
  { word: "Libro", clue: "Algunos lo abandonan a la mitad sin culpa", category: "Entretenimiento" },
  { word: "Museo", clue: "El silencio ahí se siente distinto al de una biblioteca", category: "Entretenimiento" },
  { word: "Teatro", clue: "Un error ahí no se puede repetir como en un ensayo", category: "Entretenimiento" },
  { word: "Videojuego", clue: "Una hora dentro puede sentirse como diez minutos", category: "Entretenimiento" },

  // 🏞️ Lugares
  { word: "Playa", clue: "El paisaje cambia por completo según la hora del día", category: "Lugares" },
  { word: "Montaña", clue: "Desde arriba, los problemas de abajo se ven distintos", category: "Lugares" },
  { word: "Bosque", clue: "El silencio ahí nunca es total si prestas atención", category: "Lugares" },
  { word: "Ciudad", clue: "Nunca duerme del todo, aunque lo parezca", category: "Lugares" },
  { word: "Desierto", clue: "Las distancias engañan más de lo que uno espera", category: "Lugares" },
  { word: "Parque", clue: "Ahí conviven generaciones que normalmente no se cruzan", category: "Lugares" },
  { word: "Cascada", clue: "De cerca, moja aunque no llueva", category: "Lugares" },

  // ⚽ Deportes
  { word: "Fútbol", clue: "Une a desconocidos y separa a familias por una tarde", category: "Deportes" },
  { word: "Baloncesto", clue: "Unos centímetros de más cambian todo el juego", category: "Deportes" },
  { word: "Tenis", clue: "El silencio del público es parte de las reglas", category: "Deportes" },
  { word: "Natación", clue: "Ahí no sirve de nada correr rápido en tierra", category: "Deportes" },
  { word: "Ciclismo", clue: "Una caída puede decidir semanas de esfuerzo", category: "Deportes" },
  { word: "Boxeo", clue: "Ganar no siempre significa dejar al otro en el suelo", category: "Deportes" },
  { word: "Surf", clue: "Esperar es más de la mitad de la actividad", category: "Deportes" },

  // 🔬 Ciencia y Tecnología
  { word: "Microscopio", clue: "Cambió para siempre lo que pensábamos que existía", category: "Ciencia" },
  { word: "Telescopio", clue: "Mirar hacia arriba puede ser mirar hacia el pasado", category: "Ciencia" },
  { word: "Computadora", clue: "A veces resolver el problema es solo esperar", category: "Tecnología" },
  { word: "Teléfono", clue: "Su ausencia genera más ansiedad de la que debería", category: "Tecnología" },
  { word: "Internet", clue: "Cuando desaparece, notamos cuánto dependíamos de él", category: "Tecnología" },
  { word: "Robot", clue: "La ficción lo imagina más peligroso de lo que realmente es hoy", category: "Tecnología" },

  // 🎄 Objetos
  { word: "Lámpara", clue: "Frotarla en un cuento podía cambiar tu suerte", category: "Objetos" },
  { word: "Reloj", clue: "Su ritmo no cambia aunque uno esté nervioso o tranquilo", category: "Objetos" },
  { word: "Espejo", clue: "Es honesto incluso cuando no queremos que lo sea", category: "Objetos" },
  { word: "Sombrero", clue: "Quitárselo antes significaba algo que hoy casi nadie hace", category: "Objetos" },
  { word: "Paraguas", clue: "Su mejor momento coincide con el peor clima", category: "Objetos" },
  { word: "Llave", clue: "Un objeto pequeño con un poder desproporcionado", category: "Objetos" },

  // 🎭 Profesiones
  { word: "Médico", clue: "Su trabajo depende de que confíen en él en el peor momento de alguien", category: "Profesiones" },
  { word: "Maestro", clue: "Su influencia se nota años después, no de inmediato", category: "Profesiones" },
  { word: "Policía", clue: "Su presencia cambia el comportamiento de la gente sin decir nada", category: "Profesiones" },
  { word: "Bombero", clue: "Corre hacia lo que todos los demás intentan evitar", category: "Profesiones" },
  { word: "Chef", clue: "Un mal día suyo se nota en el plato de un desconocido", category: "Profesiones" },
  { word: "Astronauta", clue: "Su oficina no tiene arriba ni abajo", category: "Profesiones" },
  { word: "Detective", clue: "Duda de lo obvio por costumbre", category: "Profesiones" },

  // 🌎 Naturaleza
  { word: "Arcoíris", clue: "Aparece justo cuando ya no lo esperabas", category: "Naturaleza" },
  { word: "Lluvia", clue: "Cambia los planes de más gente de la que admite", category: "Naturaleza" },
  { word: "Nieve", clue: "Lo mismo puede alegrar a unos y complicar el día a otros", category: "Naturaleza" },
  { word: "Volcán", clue: "La calma que muestra a veces es solo apariencia", category: "Naturaleza" },
  { word: "Océano", clue: "Conocemos menos de su fondo que del espacio exterior", category: "Naturaleza" },
  { word: "Estrella", clue: "Lo que ves podría no seguir ahí en este momento", category: "Naturaleza" },
  { word: "Río", clue: "Nunca es exactamente igual dos veces, aunque lo parezca", category: "Naturaleza" },
  { word: "Terremoto", clue: "No avisa antes de cambiarlo todo en segundos", category: "Naturaleza" },

  // 🎉 Fiestas y Celebraciones
  { word: "Cumpleaños", clue: "Con los años, algunos prefieren no contarlos en voz alta", category: "Celebraciones" },
  { word: "Boda", clue: "Se planea durante meses para que dure solo un día", category: "Celebraciones" },
  { word: "Navidad", clue: "Genera expectativas que no siempre se cumplen igual", category: "Celebraciones" },
  { word: "Carnaval", clue: "Por un rato, nadie es exactamente quien parece ser", category: "Celebraciones" },
  { word: "Graduación", clue: "Marca un final que en realidad es otro comienzo", category: "Celebraciones" },

  // 🏠 Hogar
  { word: "Cocina", clue: "Ahí terminan reuniéndose todos aunque haya otro cuarto más grande", category: "Hogar" },
  { word: "Sofá", clue: "Fácil de habitar, difícil de abandonar un domingo", category: "Hogar" },
  { word: "Ducha", clue: "Ahí uno resuelve conversaciones que nunca ocurrieron", category: "Hogar" },
  { word: "Nevera", clue: "Se abre más por costumbre que por necesidad real", category: "Hogar" },
  { word: "Escalera", clue: "Solo notamos su importancia cuando falla algo más", category: "Hogar" },

  // 🦸 Ficción
  { word: "Superhéroe", clue: "Su vida normal suele ser la parte más aburrida de la historia", category: "Ficción" },
  { word: "Pirata", clue: "Su reputación es peor de lo que muchos realmente fueron", category: "Ficción" },
  { word: "Fantasma", clue: "Su existencia depende por completo de que alguien lo cuente", category: "Ficción" },
  { word: "Dragón", clue: "En algunas culturas es temido; en otras, sagrado", category: "Ficción" },
  { word: "Bruja", clue: "La historia la trató peor de lo que probablemente merecía", category: "Ficción" },
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
