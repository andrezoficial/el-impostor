// Las pistas del impostor son palabras sueltas que se relacionan
// vagamente con la palabra real, sin describirla directamente.
// El impostor debe improvisar sin saber la palabra exacta.
export const wordBank = [
  // 🍎 Comida
  { word: "Manzana", clue: "Jardín", category: "Comida" },
  { word: "Pizza", clue: "Debate", category: "Comida" },
  { word: "Sushi", clue: "Crudo", category: "Comida" },
  { word: "Hamburguesa", clue: "Franquicia", category: "Comida" },
  { word: "Helado", clue: "Derretir", category: "Comida" },
  { word: "Paella", clue: "Receta", category: "Comida" },
  { word: "Tacos", clue: "Tortilla", category: "Comida" },
  { word: "Chocolate", clue: "Ánimo", category: "Comida" },
  { word: "Limón", clue: "Ácido", category: "Comida" },
  { word: "Miel", clue: "Colmena", category: "Comida" },

  // 🐾 Animales
  { word: "Perro", clue: "Lealtad", category: "Animales" },
  { word: "Gato", clue: "Independiente", category: "Animales" },
  { word: "Elefante", clue: "Memoria", category: "Animales" },
  { word: "Delfín", clue: "Ecolocalización", category: "Animales" },
  { word: "Águila", clue: "Bandera", category: "Animales" },
  { word: "Tiburón", clue: "Fama", category: "Animales" },
  { word: "Mariposa", clue: "Metamorfosis", category: "Animales" },
  { word: "Serpiente", clue: "Veneno", category: "Animales" },
  { word: "Búho", clue: "Nocturno", category: "Animales" },
  { word: "Camaleón", clue: "Camuflaje", category: "Animales" },

  // 🚗 Transporte
  { word: "Coche", clue: "Depreciación", category: "Transporte" },
  { word: "Avión", clue: "Turbulencia", category: "Transporte" },
  { word: "Barco", clue: "Botadura", category: "Transporte" },
  { word: "Bicicleta", clue: "Equilibrio", category: "Transporte" },
  { word: "Tren", clue: "Puntualidad", category: "Transporte" },
  { word: "Helicóptero", clue: "Rotor", category: "Transporte" },
  { word: "Metro", clue: "Subterráneo", category: "Transporte" },

  // 🎵 Música y Entretenimiento
  { word: "Guitarra", clue: "Cuerdas", category: "Música" },
  { word: "Piano", clue: "Mudanza", category: "Música" },
  { word: "Batería", clue: "Vecinos", category: "Música" },
  { word: "Película", clue: "Créditos", category: "Entretenimiento" },
  { word: "Libro", clue: "Marcapáginas", category: "Entretenimiento" },
  { word: "Museo", clue: "Silencio", category: "Entretenimiento" },
  { word: "Teatro", clue: "Ensayo", category: "Entretenimiento" },
  { word: "Videojuego", clue: "Respawn", category: "Entretenimiento" },

  // 🏞️ Lugares
  { word: "Playa", clue: "Marea", category: "Lugares" },
  { word: "Montaña", clue: "Cumbre", category: "Lugares" },
  { word: "Bosque", clue: "Musgo", category: "Lugares" },
  { word: "Ciudad", clue: "Ruido", category: "Lugares" },
  { word: "Desierto", clue: "Espejismo", category: "Lugares" },
  { word: "Parque", clue: "Generaciones", category: "Lugares" },
  { word: "Cascada", clue: "Rocío", category: "Lugares" },

  // ⚽ Deportes
  { word: "Fútbol", clue: "Offside", category: "Deportes" },
  { word: "Baloncesto", clue: "Altura", category: "Deportes" },
  { word: "Tenis", clue: "Silencio", category: "Deportes" },
  { word: "Natación", clue: "Cloro", category: "Deportes" },
  { word: "Ciclismo", clue: "Caída", category: "Deportes" },
  { word: "Boxeo", clue: "Nocaut", category: "Deportes" },
  { word: "Surf", clue: "Ola", category: "Deportes" },

  // 🔬 Ciencia y Tecnología
  { word: "Microscopio", clue: "Célula", category: "Ciencia" },
  { word: "Telescopio", clue: "Pasado", category: "Ciencia" },
  { word: "Computadora", clue: "Reiniciar", category: "Tecnología" },
  { word: "Teléfono", clue: "Ansiedad", category: "Tecnología" },
  { word: "Internet", clue: "Dependencia", category: "Tecnología" },
  { word: "Robot", clue: "Ficción", category: "Tecnología" },

  // 🎄 Objetos
  { word: "Lámpara", clue: "Deseo", category: "Objetos" },
  { word: "Reloj", clue: "Ritmo", category: "Objetos" },
  { word: "Espejo", clue: "Reflejo", category: "Objetos" },
  { word: "Sombrero", clue: "Etiqueta", category: "Objetos" },
  { word: "Paraguas", clue: "Tormenta", category: "Objetos" },
  { word: "Llave", clue: "Acceso", category: "Objetos" },

  // 🎭 Profesiones
  { word: "Médico", clue: "Confianza", category: "Profesiones" },
  { word: "Maestro", clue: "Influencia", category: "Profesiones" },
  { word: "Policía", clue: "Presencia", category: "Profesiones" },
  { word: "Bombero", clue: "Valentía", category: "Profesiones" },
  { word: "Chef", clue: "Plato", category: "Profesiones" },
  { word: "Astronauta", clue: "Gravedad", category: "Profesiones" },
  { word: "Detective", clue: "Sospecha", category: "Profesiones" },

  // 🌎 Naturaleza
  { word: "Arcoíris", clue: "Lluvia", category: "Naturaleza" },
  { word: "Lluvia", clue: "Planes", category: "Naturaleza" },
  { word: "Nieve", clue: "Caos", category: "Naturaleza" },
  { word: "Volcán", clue: "Lava", category: "Naturaleza" },
  { word: "Océano", clue: "Desconocido", category: "Naturaleza" },
  { word: "Estrella", clue: "Pasado", category: "Naturaleza" },
  { word: "Río", clue: "Corriente", category: "Naturaleza" },
  { word: "Terremoto", clue: "Réplica", category: "Naturaleza" },

  // 🎉 Fiestas y Celebraciones
  { word: "Cumpleaños", clue: "Velas", category: "Celebraciones" },
  { word: "Boda", clue: "Votos", category: "Celebraciones" },
  { word: "Navidad", clue: "Expectativa", category: "Celebraciones" },
  { word: "Carnaval", clue: "Máscara", category: "Celebraciones" },
  { word: "Graduación", clue: "Toga", category: "Celebraciones" },

  // 🏠 Hogar
  { word: "Cocina", clue: "Reunión", category: "Hogar" },
  { word: "Sofá", clue: "Domingo", category: "Hogar" },
  { word: "Ducha", clue: "Ideas", category: "Hogar" },
  { word: "Nevera", clue: "Costumbre", category: "Hogar" },
  { word: "Escalera", clue: "Ascenso", category: "Hogar" },

  // 🦸 Ficción
  { word: "Superhéroe", clue: "Identidad", category: "Ficción" },
  { word: "Pirata", clue: "Saqueo", category: "Ficción" },
  { word: "Fantasma", clue: "Aparición", category: "Ficción" },
  { word: "Dragón", clue: "Escamas", category: "Ficción" },
  { word: "Bruja", clue: "Caldero", category: "Ficción" },
];

// excludeWords: string[] — palabras ya usadas en esta sesión (no se repiten).
// category filtra el banco (usa null o "Todas" para no filtrar).
export const getRandomWord = (excludeWords, category) => {
  const excluded = Array.isArray(excludeWords) ? excludeWords : (excludeWords ? [excludeWords] : []);

  const pool = category && category !== 'Todas'
    ? wordBank.filter(item => item.category === category)
    : wordBank;

  const source = pool.length > 0 ? pool : wordBank;

  // Candidatos que no han salido aún
  const available = source.filter(item => !excluded.includes(item.word));

  // Si ya se usaron todas, reiniciar el pool (evitar bloqueo)
  const candidates = available.length > 0 ? available : source;

  return candidates[Math.floor(Math.random() * candidates.length)];
};

export const getCategories = () => {
  return [...new Set(wordBank.map(item => item.category))].sort();
};
