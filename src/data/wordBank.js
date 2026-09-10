// Las pistas del impostor son palabras sueltas que se relacionan
// vagamente con la palabra real, sin describirla directamente.
// El impostor debe improvisar sin saber la palabra exacta.
//
// Cada entrada tiene un id estable (para no repetir palabras aunque el
// idioma cambie a mitad de sesión) y sus textos en español e inglés.
// "category" es una clave interna (no traducida) — su nombre visible
// se resuelve con categories.<key> en translations.js.
export const wordBank = [
  // Comida / Food
  { id: 'apple', category: 'food', es: { word: 'Manzana', clue: 'Jardín' }, en: { word: 'Apple', clue: 'Garden' } },
  { id: 'pizza', category: 'food', es: { word: 'Pizza', clue: 'Debate' }, en: { word: 'Pizza', clue: 'Debate' } },
  { id: 'sushi', category: 'food', es: { word: 'Sushi', clue: 'Crudo' }, en: { word: 'Sushi', clue: 'Raw' } },
  { id: 'burger', category: 'food', es: { word: 'Hamburguesa', clue: 'Franquicia' }, en: { word: 'Hamburger', clue: 'Franchise' } },
  { id: 'ice_cream', category: 'food', es: { word: 'Helado', clue: 'Derretir' }, en: { word: 'Ice Cream', clue: 'Melt' } },
  { id: 'paella', category: 'food', es: { word: 'Paella', clue: 'Receta' }, en: { word: 'Paella', clue: 'Recipe' } },
  { id: 'tacos', category: 'food', es: { word: 'Tacos', clue: 'Tortilla' }, en: { word: 'Tacos', clue: 'Tortilla' } },
  { id: 'chocolate', category: 'food', es: { word: 'Chocolate', clue: 'Ánimo' }, en: { word: 'Chocolate', clue: 'Mood' } },
  { id: 'lemon', category: 'food', es: { word: 'Limón', clue: 'Ácido' }, en: { word: 'Lemon', clue: 'Acid' } },
  { id: 'honey', category: 'food', es: { word: 'Miel', clue: 'Colmena' }, en: { word: 'Honey', clue: 'Hive' } },

  // Animales / Animals
  { id: 'dog', category: 'animals', es: { word: 'Perro', clue: 'Lealtad' }, en: { word: 'Dog', clue: 'Loyalty' } },
  { id: 'cat', category: 'animals', es: { word: 'Gato', clue: 'Independiente' }, en: { word: 'Cat', clue: 'Independent' } },
  { id: 'elephant', category: 'animals', es: { word: 'Elefante', clue: 'Memoria' }, en: { word: 'Elephant', clue: 'Memory' } },
  { id: 'dolphin', category: 'animals', es: { word: 'Delfín', clue: 'Ecolocalización' }, en: { word: 'Dolphin', clue: 'Echolocation' } },
  { id: 'eagle', category: 'animals', es: { word: 'Águila', clue: 'Bandera' }, en: { word: 'Eagle', clue: 'Flag' } },
  { id: 'shark', category: 'animals', es: { word: 'Tiburón', clue: 'Fama' }, en: { word: 'Shark', clue: 'Fame' } },
  { id: 'butterfly', category: 'animals', es: { word: 'Mariposa', clue: 'Metamorfosis' }, en: { word: 'Butterfly', clue: 'Metamorphosis' } },
  { id: 'snake', category: 'animals', es: { word: 'Serpiente', clue: 'Veneno' }, en: { word: 'Snake', clue: 'Venom' } },
  { id: 'owl', category: 'animals', es: { word: 'Búho', clue: 'Nocturno' }, en: { word: 'Owl', clue: 'Nocturnal' } },
  { id: 'chameleon', category: 'animals', es: { word: 'Camaleón', clue: 'Camuflaje' }, en: { word: 'Chameleon', clue: 'Camouflage' } },

  // Transporte / Transportation
  { id: 'car', category: 'transport', es: { word: 'Coche', clue: 'Depreciación' }, en: { word: 'Car', clue: 'Depreciation' } },
  { id: 'plane', category: 'transport', es: { word: 'Avión', clue: 'Turbulencia' }, en: { word: 'Airplane', clue: 'Turbulence' } },
  { id: 'ship', category: 'transport', es: { word: 'Barco', clue: 'Botadura' }, en: { word: 'Ship', clue: 'Launch' } },
  { id: 'bike', category: 'transport', es: { word: 'Bicicleta', clue: 'Equilibrio' }, en: { word: 'Bicycle', clue: 'Balance' } },
  { id: 'train', category: 'transport', es: { word: 'Tren', clue: 'Puntualidad' }, en: { word: 'Train', clue: 'Punctuality' } },
  { id: 'helicopter', category: 'transport', es: { word: 'Helicóptero', clue: 'Rotor' }, en: { word: 'Helicopter', clue: 'Rotor' } },
  { id: 'subway', category: 'transport', es: { word: 'Metro', clue: 'Subterráneo' }, en: { word: 'Subway', clue: 'Underground' } },

  // Música / Music
  { id: 'guitar', category: 'music', es: { word: 'Guitarra', clue: 'Cuerdas' }, en: { word: 'Guitar', clue: 'Strings' } },
  { id: 'piano', category: 'music', es: { word: 'Piano', clue: 'Mudanza' }, en: { word: 'Piano', clue: 'Moving' } },
  { id: 'drums', category: 'music', es: { word: 'Batería', clue: 'Vecinos' }, en: { word: 'Drums', clue: 'Neighbors' } },

  // Entretenimiento / Entertainment
  { id: 'movie', category: 'entertainment', es: { word: 'Película', clue: 'Créditos' }, en: { word: 'Movie', clue: 'Credits' } },
  { id: 'book', category: 'entertainment', es: { word: 'Libro', clue: 'Marcapáginas' }, en: { word: 'Book', clue: 'Bookmark' } },
  { id: 'museum', category: 'entertainment', es: { word: 'Museo', clue: 'Silencio' }, en: { word: 'Museum', clue: 'Silence' } },
  { id: 'theater', category: 'entertainment', es: { word: 'Teatro', clue: 'Ensayo' }, en: { word: 'Theater', clue: 'Rehearsal' } },
  { id: 'videogame', category: 'entertainment', es: { word: 'Videojuego', clue: 'Respawn' }, en: { word: 'Video Game', clue: 'Respawn' } },

  // Lugares / Places
  { id: 'beach', category: 'places', es: { word: 'Playa', clue: 'Marea' }, en: { word: 'Beach', clue: 'Tide' } },
  { id: 'mountain', category: 'places', es: { word: 'Montaña', clue: 'Cumbre' }, en: { word: 'Mountain', clue: 'Summit' } },
  { id: 'forest', category: 'places', es: { word: 'Bosque', clue: 'Musgo' }, en: { word: 'Forest', clue: 'Moss' } },
  { id: 'city', category: 'places', es: { word: 'Ciudad', clue: 'Ruido' }, en: { word: 'City', clue: 'Noise' } },
  { id: 'desert', category: 'places', es: { word: 'Desierto', clue: 'Espejismo' }, en: { word: 'Desert', clue: 'Mirage' } },
  { id: 'park', category: 'places', es: { word: 'Parque', clue: 'Generaciones' }, en: { word: 'Park', clue: 'Generations' } },
  { id: 'waterfall', category: 'places', es: { word: 'Cascada', clue: 'Rocío' }, en: { word: 'Waterfall', clue: 'Mist' } },

  // Deportes / Sports
  { id: 'soccer', category: 'sports', es: { word: 'Fútbol', clue: 'Offside' }, en: { word: 'Soccer', clue: 'Offside' } },
  { id: 'basketball', category: 'sports', es: { word: 'Baloncesto', clue: 'Altura' }, en: { word: 'Basketball', clue: 'Height' } },
  { id: 'tennis', category: 'sports', es: { word: 'Tenis', clue: 'Silencio' }, en: { word: 'Tennis', clue: 'Silence' } },
  { id: 'swimming', category: 'sports', es: { word: 'Natación', clue: 'Cloro' }, en: { word: 'Swimming', clue: 'Chlorine' } },
  { id: 'cycling', category: 'sports', es: { word: 'Ciclismo', clue: 'Caída' }, en: { word: 'Cycling', clue: 'Fall' } },
  { id: 'boxing', category: 'sports', es: { word: 'Boxeo', clue: 'Nocaut' }, en: { word: 'Boxing', clue: 'Knockout' } },
  { id: 'surfing', category: 'sports', es: { word: 'Surf', clue: 'Ola' }, en: { word: 'Surfing', clue: 'Wave' } },

  // Ciencia / Science
  { id: 'microscope', category: 'science', es: { word: 'Microscopio', clue: 'Célula' }, en: { word: 'Microscope', clue: 'Cell' } },
  { id: 'telescope', category: 'science', es: { word: 'Telescopio', clue: 'Pasado' }, en: { word: 'Telescope', clue: 'Past' } },

  // Tecnología / Technology
  { id: 'computer', category: 'technology', es: { word: 'Computadora', clue: 'Reiniciar' }, en: { word: 'Computer', clue: 'Restart' } },
  { id: 'phone', category: 'technology', es: { word: 'Teléfono', clue: 'Ansiedad' }, en: { word: 'Phone', clue: 'Anxiety' } },
  { id: 'internet', category: 'technology', es: { word: 'Internet', clue: 'Dependencia' }, en: { word: 'Internet', clue: 'Dependence' } },
  { id: 'robot', category: 'technology', es: { word: 'Robot', clue: 'Ficción' }, en: { word: 'Robot', clue: 'Fiction' } },

  // Objetos / Objects
  { id: 'lamp', category: 'objects', es: { word: 'Lámpara', clue: 'Deseo' }, en: { word: 'Lamp', clue: 'Wish' } },
  { id: 'clock', category: 'objects', es: { word: 'Reloj', clue: 'Ritmo' }, en: { word: 'Clock', clue: 'Rhythm' } },
  { id: 'mirror', category: 'objects', es: { word: 'Espejo', clue: 'Reflejo' }, en: { word: 'Mirror', clue: 'Reflection' } },
  { id: 'hat', category: 'objects', es: { word: 'Sombrero', clue: 'Etiqueta' }, en: { word: 'Hat', clue: 'Etiquette' } },
  { id: 'umbrella', category: 'objects', es: { word: 'Paraguas', clue: 'Tormenta' }, en: { word: 'Umbrella', clue: 'Storm' } },
  { id: 'key', category: 'objects', es: { word: 'Llave', clue: 'Acceso' }, en: { word: 'Key', clue: 'Access' } },

  // Profesiones / Professions
  { id: 'doctor', category: 'professions', es: { word: 'Médico', clue: 'Confianza' }, en: { word: 'Doctor', clue: 'Trust' } },
  { id: 'teacher', category: 'professions', es: { word: 'Maestro', clue: 'Influencia' }, en: { word: 'Teacher', clue: 'Influence' } },
  { id: 'police', category: 'professions', es: { word: 'Policía', clue: 'Presencia' }, en: { word: 'Police Officer', clue: 'Presence' } },
  { id: 'firefighter', category: 'professions', es: { word: 'Bombero', clue: 'Valentía' }, en: { word: 'Firefighter', clue: 'Courage' } },
  { id: 'chef', category: 'professions', es: { word: 'Chef', clue: 'Plato' }, en: { word: 'Chef', clue: 'Dish' } },
  { id: 'astronaut', category: 'professions', es: { word: 'Astronauta', clue: 'Gravedad' }, en: { word: 'Astronaut', clue: 'Gravity' } },
  { id: 'detective', category: 'professions', es: { word: 'Detective', clue: 'Sospecha' }, en: { word: 'Detective', clue: 'Suspicion' } },

  // Naturaleza / Nature
  { id: 'rainbow', category: 'nature', es: { word: 'Arcoíris', clue: 'Lluvia' }, en: { word: 'Rainbow', clue: 'Rain' } },
  { id: 'rain', category: 'nature', es: { word: 'Lluvia', clue: 'Planes' }, en: { word: 'Rain', clue: 'Plans' } },
  { id: 'snow', category: 'nature', es: { word: 'Nieve', clue: 'Caos' }, en: { word: 'Snow', clue: 'Chaos' } },
  { id: 'volcano', category: 'nature', es: { word: 'Volcán', clue: 'Lava' }, en: { word: 'Volcano', clue: 'Lava' } },
  { id: 'ocean', category: 'nature', es: { word: 'Océano', clue: 'Desconocido' }, en: { word: 'Ocean', clue: 'Unknown' } },
  { id: 'star', category: 'nature', es: { word: 'Estrella', clue: 'Pasado' }, en: { word: 'Star', clue: 'Past' } },
  { id: 'river', category: 'nature', es: { word: 'Río', clue: 'Corriente' }, en: { word: 'River', clue: 'Current' } },
  { id: 'earthquake', category: 'nature', es: { word: 'Terremoto', clue: 'Réplica' }, en: { word: 'Earthquake', clue: 'Aftershock' } },

  // Celebraciones / Celebrations
  { id: 'birthday', category: 'celebrations', es: { word: 'Cumpleaños', clue: 'Velas' }, en: { word: 'Birthday', clue: 'Candles' } },
  { id: 'wedding', category: 'celebrations', es: { word: 'Boda', clue: 'Votos' }, en: { word: 'Wedding', clue: 'Vows' } },
  { id: 'christmas', category: 'celebrations', es: { word: 'Navidad', clue: 'Expectativa' }, en: { word: 'Christmas', clue: 'Expectation' } },
  { id: 'carnival', category: 'celebrations', es: { word: 'Carnaval', clue: 'Máscara' }, en: { word: 'Carnival', clue: 'Mask' } },
  { id: 'graduation', category: 'celebrations', es: { word: 'Graduación', clue: 'Toga' }, en: { word: 'Graduation', clue: 'Gown' } },

  // Hogar / Home
  { id: 'kitchen', category: 'home', es: { word: 'Cocina', clue: 'Reunión' }, en: { word: 'Kitchen', clue: 'Gathering' } },
  { id: 'couch', category: 'home', es: { word: 'Sofá', clue: 'Domingo' }, en: { word: 'Couch', clue: 'Sunday' } },
  { id: 'shower', category: 'home', es: { word: 'Ducha', clue: 'Ideas' }, en: { word: 'Shower', clue: 'Ideas' } },
  { id: 'fridge', category: 'home', es: { word: 'Nevera', clue: 'Costumbre' }, en: { word: 'Fridge', clue: 'Habit' } },
  { id: 'stairs', category: 'home', es: { word: 'Escalera', clue: 'Ascenso' }, en: { word: 'Stairs', clue: 'Climb' } },

  // Ficción / Fiction
  { id: 'superhero', category: 'fiction', es: { word: 'Superhéroe', clue: 'Identidad' }, en: { word: 'Superhero', clue: 'Identity' } },
  { id: 'pirate', category: 'fiction', es: { word: 'Pirata', clue: 'Saqueo' }, en: { word: 'Pirate', clue: 'Plunder' } },
  { id: 'ghost', category: 'fiction', es: { word: 'Fantasma', clue: 'Aparición' }, en: { word: 'Ghost', clue: 'Apparition' } },
  { id: 'dragon', category: 'fiction', es: { word: 'Dragón', clue: 'Escamas' }, en: { word: 'Dragon', clue: 'Scales' } },
  { id: 'witch', category: 'fiction', es: { word: 'Bruja', clue: 'Caldero' }, en: { word: 'Witch', clue: 'Cauldron' } },
];

// excludeIds: string[] — ids de palabras ya usadas en esta sesión (no se repiten).
// category filtra el banco por su clave interna (usa null o "all" para no filtrar).
export const getRandomWord = (excludeIds, category) => {
  const excluded = Array.isArray(excludeIds) ? excludeIds : (excludeIds ? [excludeIds] : []);

  const pool = category && category !== 'all'
    ? wordBank.filter(item => item.category === category)
    : wordBank;

  const source = pool.length > 0 ? pool : wordBank;

  // Candidatos que no han salido aún
  const available = source.filter(item => !excluded.includes(item.id));

  // Si ya se usaron todos, reiniciar el pool (evitar bloqueo)
  const candidates = available.length > 0 ? available : source;

  return candidates[Math.floor(Math.random() * candidates.length)];
};

// Devuelve las claves internas de categoría (sin traducir), ordenadas
// alfabéticamente por su nombre en español para que el orden sea estable.
export const getCategories = () => {
  const keys = [...new Set(wordBank.map(item => item.category))];
  const order = [
    'food', 'animals', 'transport', 'music', 'entertainment', 'places',
    'sports', 'science', 'technology', 'objects', 'professions', 'nature',
    'celebrations', 'home', 'fiction',
  ];
  return keys.sort((a, b) => order.indexOf(a) - order.indexOf(b));
};
