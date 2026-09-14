// Las pistas del impostor son REFERENCIAS (personajes, películas, marcas,
// figuras de cultura pop) que se relacionan con la palabra real sin
// describirla directamente. Por ejemplo: la palabra "Teletransportación"
// tiene como pista "Goku" (Teletransportación instantánea de Dragon Ball).
// El impostor debe improvisar sin saber la palabra exacta.
//
// Cada entrada tiene un id estable (para no repetir palabras aunque el
// idioma cambie a mitad de sesión) y sus textos en español e inglés.
// "category" es una clave interna (no traducida) — su nombre visible
// se resuelve con categories.<key> en translations.js.
export const wordBank = [
  // Comida / Food
  { id: 'apple', category: 'food', difficulty: 'easy', es: { word: 'Manzana', clue: 'Newton' }, en: { word: 'Apple', clue: 'Newton' } },
  { id: 'pizza', category: 'food', difficulty: 'medium', es: { word: 'Pizza', clue: 'Tortugas Ninja' }, en: { word: 'Pizza', clue: 'Ninja Turtles' } },
  { id: 'sushi', category: 'food', difficulty: 'medium', es: { word: 'Sushi', clue: 'Buscando a Nemo' }, en: { word: 'Sushi', clue: 'Finding Nemo' } },
  { id: 'burger', category: 'food', difficulty: 'easy', es: { word: 'Hamburguesa', clue: 'Bob Esponja' }, en: { word: 'Hamburger', clue: 'SpongeBob' } },
  { id: 'ice_cream', category: 'food', difficulty: 'easy', es: { word: 'Helado', clue: 'Elsa' }, en: { word: 'Ice Cream', clue: 'Elsa' } },
  { id: 'paella', category: 'food', difficulty: 'medium', es: { word: 'Paella', clue: 'Gordon Ramsay' }, en: { word: 'Paella', clue: 'Gordon Ramsay' } },
  { id: 'tacos', category: 'food', difficulty: 'medium', es: { word: 'Tacos', clue: 'Speedy Gonzales' }, en: { word: 'Tacos', clue: 'Speedy Gonzales' } },
  { id: 'chocolate', category: 'food', difficulty: 'easy', es: { word: 'Chocolate', clue: 'Willy Wonka' }, en: { word: 'Chocolate', clue: 'Willy Wonka' } },
  { id: 'lemon', category: 'food', difficulty: 'hard', es: { word: 'Limón', clue: 'Beyoncé' }, en: { word: 'Lemon', clue: 'Beyoncé' } },
  { id: 'honey', category: 'food', difficulty: 'medium', es: { word: 'Miel', clue: 'Winnie Pooh' }, en: { word: 'Honey', clue: 'Winnie the Pooh' } },
  { id: 'ramen', category: 'food', difficulty: 'medium', es: { word: 'Ramen', clue: 'Naruto' }, en: { word: 'Ramen', clue: 'Naruto' } },
  { id: 'donut', category: 'food', difficulty: 'easy', es: { word: 'Dona', clue: 'Homero Simpson' }, en: { word: 'Donut', clue: 'Homer Simpson' } },
  { id: 'spinach', category: 'food', difficulty: 'easy', es: { word: 'Espinaca', clue: 'Popeye' }, en: { word: 'Spinach', clue: 'Popeye' } },
  { id: 'coffee', category: 'food', difficulty: 'easy', es: { word: 'Café', clue: 'Central Perk' }, en: { word: 'Coffee', clue: 'Central Perk' } },

  // Animales / Animals
  { id: 'dog', category: 'animals', difficulty: 'easy', es: { word: 'Perro', clue: 'Scooby-Doo' }, en: { word: 'Dog', clue: 'Scooby-Doo' } },
  { id: 'cat', category: 'animals', difficulty: 'easy', es: { word: 'Gato', clue: 'Garfield' }, en: { word: 'Cat', clue: 'Garfield' } },
  { id: 'elephant', category: 'animals', difficulty: 'easy', es: { word: 'Elefante', clue: 'Dumbo' }, en: { word: 'Elephant', clue: 'Dumbo' } },
  { id: 'dolphin', category: 'animals', difficulty: 'medium', es: { word: 'Delfín', clue: 'Flipper' }, en: { word: 'Dolphin', clue: 'Flipper' } },
  { id: 'eagle', category: 'animals', difficulty: 'medium', es: { word: 'Águila', clue: 'Falcon' }, en: { word: 'Eagle', clue: 'Falcon' } },
  { id: 'shark', category: 'animals', difficulty: 'easy', es: { word: 'Tiburón', clue: 'Baby Shark' }, en: { word: 'Shark', clue: 'Baby Shark' } },
  { id: 'butterfly', category: 'animals', difficulty: 'hard', es: { word: 'Mariposa', clue: 'Muhammad Ali' }, en: { word: 'Butterfly', clue: 'Muhammad Ali' } },
  { id: 'snake', category: 'animals', difficulty: 'medium', es: { word: 'Serpiente', clue: 'Solid Snake' }, en: { word: 'Snake', clue: 'Solid Snake' } },
  { id: 'owl', category: 'animals', difficulty: 'medium', es: { word: 'Búho', clue: 'Hedwig' }, en: { word: 'Owl', clue: 'Hedwig' } },
  { id: 'chameleon', category: 'animals', difficulty: 'medium', es: { word: 'Camaleón', clue: 'Rango' }, en: { word: 'Chameleon', clue: 'Rango' } },
  { id: 'mouse', category: 'animals', difficulty: 'easy', es: { word: 'Ratón', clue: 'Mickey Mouse' }, en: { word: 'Mouse', clue: 'Mickey Mouse' } },
  { id: 'lion', category: 'animals', difficulty: 'easy', es: { word: 'León', clue: 'Simba' }, en: { word: 'Lion', clue: 'Simba' } },
  { id: 'monkey', category: 'animals', difficulty: 'medium', es: { word: 'Mono', clue: 'King Kong' }, en: { word: 'Monkey', clue: 'King Kong' } },
  { id: 'spider', category: 'animals', difficulty: 'easy', es: { word: 'Araña', clue: 'Spider-Man' }, en: { word: 'Spider', clue: 'Spider-Man' } },
  { id: 'panda', category: 'animals', difficulty: 'medium', es: { word: 'Panda', clue: 'Kung Fu Panda' }, en: { word: 'Panda', clue: 'Kung Fu Panda' } },
  { id: 'penguin', category: 'animals', difficulty: 'medium', es: { word: 'Pingüino', clue: 'Batman' }, en: { word: 'Penguin', clue: 'Batman' } },

  // Transporte / Transportation
  { id: 'car', category: 'transport', difficulty: 'easy', es: { word: 'Coche', clue: 'Rayo McQueen' }, en: { word: 'Car', clue: 'Lightning McQueen' } },
  { id: 'plane', category: 'transport', difficulty: 'medium', es: { word: 'Avión', clue: 'Top Gun' }, en: { word: 'Airplane', clue: 'Top Gun' } },
  { id: 'ship', category: 'transport', difficulty: 'medium', es: { word: 'Barco', clue: 'Titanic' }, en: { word: 'Ship', clue: 'Titanic' } },
  { id: 'bike', category: 'transport', difficulty: 'easy', es: { word: 'Bicicleta', clue: 'E.T.' }, en: { word: 'Bicycle', clue: 'E.T.' } },
  { id: 'train', category: 'transport', difficulty: 'medium', es: { word: 'Tren', clue: 'Hogwarts' }, en: { word: 'Train', clue: 'Hogwarts' } },
  { id: 'helicopter', category: 'transport', difficulty: 'medium', es: { word: 'Helicóptero', clue: 'Jurassic Park' }, en: { word: 'Helicopter', clue: 'Jurassic Park' } },
  { id: 'subway', category: 'transport', difficulty: 'hard', es: { word: 'Metro', clue: 'Spider-Man 2' }, en: { word: 'Subway', clue: 'Spider-Man 2' } },
  { id: 'rocket', category: 'transport', difficulty: 'medium', es: { word: 'Cohete', clue: 'Elon Musk' }, en: { word: 'Rocket', clue: 'Elon Musk' } },
  { id: 'skateboard', category: 'transport', difficulty: 'medium', es: { word: 'Patineta', clue: 'Marty McFly' }, en: { word: 'Skateboard', clue: 'Marty McFly' } },

  // Música / Music
  { id: 'guitar', category: 'music', difficulty: 'medium', es: { word: 'Guitarra', clue: 'Jimi Hendrix' }, en: { word: 'Guitar', clue: 'Jimi Hendrix' } },
  { id: 'piano', category: 'music', difficulty: 'easy', es: { word: 'Piano', clue: 'Beethoven' }, en: { word: 'Piano', clue: 'Beethoven' } },
  { id: 'drums', category: 'music', difficulty: 'medium', es: { word: 'Batería', clue: 'Animal (Los Muppets)' }, en: { word: 'Drums', clue: 'Animal (Muppets)' } },
  { id: 'microphone', category: 'music', difficulty: 'easy', es: { word: 'Micrófono', clue: 'Freddie Mercury' }, en: { word: 'Microphone', clue: 'Freddie Mercury' } },
  { id: 'violin', category: 'music', difficulty: 'hard', es: { word: 'Violín', clue: 'Sherlock Holmes' }, en: { word: 'Violin', clue: 'Sherlock Holmes' } },

  // Entretenimiento / Entertainment
  { id: 'movie', category: 'entertainment', difficulty: 'easy', es: { word: 'Película', clue: 'Óscar' }, en: { word: 'Movie', clue: 'Oscar' } },
  { id: 'book', category: 'entertainment', difficulty: 'medium', es: { word: 'Libro', clue: 'Hermione' }, en: { word: 'Book', clue: 'Hermione' } },
  { id: 'museum', category: 'entertainment', difficulty: 'hard', es: { word: 'Museo', clue: 'Una Noche en el Museo' }, en: { word: 'Museum', clue: 'Night at the Museum' } },
  { id: 'theater', category: 'entertainment', difficulty: 'easy', es: { word: 'Teatro', clue: 'Shakespeare' }, en: { word: 'Theater', clue: 'Shakespeare' } },
  { id: 'videogame', category: 'entertainment', difficulty: 'easy', es: { word: 'Videojuego', clue: 'Mario' }, en: { word: 'Video Game', clue: 'Mario' } },
  { id: 'circus', category: 'entertainment', difficulty: 'medium', es: { word: 'Circo', clue: 'El Guasón' }, en: { word: 'Circus', clue: 'The Joker' } },
  { id: 'concert', category: 'entertainment', difficulty: 'easy', es: { word: 'Concierto', clue: 'Coldplay' }, en: { word: 'Concert', clue: 'Coldplay' } },

  // Lugares / Places
  { id: 'beach', category: 'places', difficulty: 'medium', es: { word: 'Playa', clue: 'Guardianes de la Bahía' }, en: { word: 'Beach', clue: 'Baywatch' } },
  { id: 'mountain', category: 'places', difficulty: 'hard', es: { word: 'Montaña', clue: 'El Rey León' }, en: { word: 'Mountain', clue: 'The Lion King' } },
  { id: 'forest', category: 'places', difficulty: 'medium', es: { word: 'Bosque', clue: 'Shrek' }, en: { word: 'Forest', clue: 'Shrek' } },
  { id: 'city', category: 'places', difficulty: 'medium', es: { word: 'Ciudad', clue: 'Batman' }, en: { word: 'City', clue: 'Batman' } },
  { id: 'desert', category: 'places', difficulty: 'easy', es: { word: 'Desierto', clue: 'Star Wars' }, en: { word: 'Desert', clue: 'Star Wars' } },
  { id: 'park', category: 'places', difficulty: 'medium', es: { word: 'Parque', clue: 'Pokémon GO' }, en: { word: 'Park', clue: 'Pokémon GO' } },
  { id: 'waterfall', category: 'places', difficulty: 'hard', es: { word: 'Cascada', clue: 'Avatar' }, en: { word: 'Waterfall', clue: 'Avatar' } },
  { id: 'castle', category: 'places', difficulty: 'medium', es: { word: 'Castillo', clue: 'Cenicienta' }, en: { word: 'Castle', clue: 'Cinderella' } },
  { id: 'island', category: 'places', difficulty: 'hard', es: { word: 'Isla', clue: 'Perdidos' }, en: { word: 'Island', clue: 'Lost' } },
  { id: 'jungle', category: 'places', difficulty: 'easy', es: { word: 'Selva', clue: 'Tarzán' }, en: { word: 'Jungle', clue: 'Tarzan' } },

  // Deportes / Sports
  { id: 'soccer', category: 'sports', difficulty: 'medium', es: { word: 'Fútbol', clue: 'Messi' }, en: { word: 'Soccer', clue: 'Messi' } },
  { id: 'basketball', category: 'sports', difficulty: 'easy', es: { word: 'Baloncesto', clue: 'Michael Jordan' }, en: { word: 'Basketball', clue: 'Michael Jordan' } },
  { id: 'tennis', category: 'sports', difficulty: 'medium', es: { word: 'Tenis', clue: 'Nadal' }, en: { word: 'Tennis', clue: 'Nadal' } },
  { id: 'swimming', category: 'sports', difficulty: 'easy', es: { word: 'Natación', clue: 'Michael Phelps' }, en: { word: 'Swimming', clue: 'Michael Phelps' } },
  { id: 'cycling', category: 'sports', difficulty: 'hard', es: { word: 'Ciclismo', clue: 'Lance Armstrong' }, en: { word: 'Cycling', clue: 'Lance Armstrong' } },
  { id: 'boxing', category: 'sports', difficulty: 'easy', es: { word: 'Boxeo', clue: 'Rocky Balboa' }, en: { word: 'Boxing', clue: 'Rocky Balboa' } },
  { id: 'surfing', category: 'sports', difficulty: 'medium', es: { word: 'Surf', clue: 'Punto de Quiebre' }, en: { word: 'Surfing', clue: 'Point Break' } },
  { id: 'wrestling', category: 'sports', difficulty: 'easy', es: { word: 'Lucha Libre', clue: 'John Cena' }, en: { word: 'Wrestling', clue: 'John Cena' } },
  { id: 'golf', category: 'sports', difficulty: 'easy', es: { word: 'Golf', clue: 'Tiger Woods' }, en: { word: 'Golf', clue: 'Tiger Woods' } },

  // Ciencia / Science
  { id: 'microscope', category: 'science', difficulty: 'hard', es: { word: 'Microscopio', clue: 'Bill Nye' }, en: { word: 'Microscope', clue: 'Bill Nye' } },
  { id: 'telescope', category: 'science', difficulty: 'medium', es: { word: 'Telescopio', clue: 'Galileo' }, en: { word: 'Telescope', clue: 'Galileo' } },
  { id: 'atom', category: 'science', difficulty: 'hard', es: { word: 'Átomo', clue: 'Rick Sanchez' }, en: { word: 'Atom', clue: 'Rick Sanchez' } },
  { id: 'dna', category: 'science', difficulty: 'medium', es: { word: 'ADN', clue: 'Jurassic Park' }, en: { word: 'DNA', clue: 'Jurassic Park' } },
  { id: 'gravity', category: 'science', difficulty: 'easy', es: { word: 'Gravedad', clue: 'Newton' }, en: { word: 'Gravity', clue: 'Newton' } },

  // Tecnología / Technology
  { id: 'computer', category: 'technology', difficulty: 'medium', es: { word: 'Computadora', clue: 'Steve Jobs' }, en: { word: 'Computer', clue: 'Steve Jobs' } },
  { id: 'phone', category: 'technology', difficulty: 'medium', es: { word: 'Teléfono', clue: 'Siri' }, en: { word: 'Phone', clue: 'Siri' } },
  { id: 'internet', category: 'technology', difficulty: 'hard', es: { word: 'Internet', clue: 'Matrix' }, en: { word: 'Internet', clue: 'The Matrix' } },
  { id: 'robot', category: 'technology', difficulty: 'medium', es: { word: 'Robot', clue: 'Terminator' }, en: { word: 'Robot', clue: 'Terminator' } },
  { id: 'drone', category: 'technology', difficulty: 'medium', es: { word: 'Dron', clue: 'Iron Man' }, en: { word: 'Drone', clue: 'Iron Man' } },
  { id: 'ai', category: 'technology', difficulty: 'hard', es: { word: 'Inteligencia Artificial', clue: 'HAL 9000' }, en: { word: 'Artificial Intelligence', clue: 'HAL 9000' } },
  { id: 'videocall', category: 'technology', difficulty: 'medium', es: { word: 'Videollamada', clue: 'Zoom' }, en: { word: 'Video Call', clue: 'Zoom' } },

  // Objetos / Objects
  { id: 'lamp', category: 'objects', difficulty: 'medium', es: { word: 'Lámpara', clue: 'Aladdín' }, en: { word: 'Lamp', clue: 'Aladdin' } },
  { id: 'clock', category: 'objects', difficulty: 'medium', es: { word: 'Reloj', clue: 'Cenicienta' }, en: { word: 'Clock', clue: 'Cinderella' } },
  { id: 'mirror', category: 'objects', difficulty: 'hard', es: { word: 'Espejo', clue: 'Alicia en el País de las Maravillas' }, en: { word: 'Mirror', clue: 'Alice in Wonderland' } },
  { id: 'hat', category: 'objects', difficulty: 'medium', es: { word: 'Sombrero', clue: 'Indiana Jones' }, en: { word: 'Hat', clue: 'Indiana Jones' } },
  { id: 'umbrella', category: 'objects', difficulty: 'easy', es: { word: 'Paraguas', clue: 'Mary Poppins' }, en: { word: 'Umbrella', clue: 'Mary Poppins' } },
  { id: 'key', category: 'objects', difficulty: 'medium', es: { word: 'Llave', clue: 'Zelda' }, en: { word: 'Key', clue: 'Zelda' } },
  { id: 'sword', category: 'objects', difficulty: 'medium', es: { word: 'Espada', clue: 'Zoro (One Piece)' }, en: { word: 'Sword', clue: 'Zoro (One Piece)' } },
  { id: 'shield', category: 'objects', difficulty: 'medium', es: { word: 'Escudo', clue: 'Capitán América' }, en: { word: 'Shield', clue: 'Captain America' } },
  { id: 'ring', category: 'objects', difficulty: 'medium', es: { word: 'Anillo', clue: 'Frodo' }, en: { word: 'Ring', clue: 'Frodo' } },
  { id: 'crown', category: 'objects', difficulty: 'medium', es: { word: 'Corona', clue: 'Juego de Tronos' }, en: { word: 'Crown', clue: 'Game of Thrones' } },
  { id: 'wand', category: 'objects', difficulty: 'easy', es: { word: 'Varita Mágica', clue: 'Harry Potter' }, en: { word: 'Magic Wand', clue: 'Harry Potter' } },

  // Profesiones / Professions
  { id: 'doctor', category: 'professions', difficulty: 'medium', es: { word: 'Médico', clue: 'Doctor House' }, en: { word: 'Doctor', clue: 'Dr. House' } },
  { id: 'teacher', category: 'professions', difficulty: 'medium', es: { word: 'Maestro', clue: 'Dumbledore' }, en: { word: 'Teacher', clue: 'Dumbledore' } },
  { id: 'police', category: 'professions', difficulty: 'medium', es: { word: 'Policía', clue: 'Robocop' }, en: { word: 'Police Officer', clue: 'Robocop' } },
  { id: 'firefighter', category: 'professions', difficulty: 'medium', es: { word: 'Bombero', clue: 'Bomberman' }, en: { word: 'Firefighter', clue: 'Bomberman' } },
  { id: 'chef', category: 'professions', difficulty: 'medium', es: { word: 'Chef', clue: 'Ratatouille' }, en: { word: 'Chef', clue: 'Ratatouille' } },
  { id: 'astronaut', category: 'professions', difficulty: 'medium', es: { word: 'Astronauta', clue: 'Buzz Lightyear' }, en: { word: 'Astronaut', clue: 'Buzz Lightyear' } },
  { id: 'detective', category: 'professions', difficulty: 'medium', es: { word: 'Detective', clue: 'Sherlock Holmes' }, en: { word: 'Detective', clue: 'Sherlock Holmes' } },
  { id: 'lawyer', category: 'professions', difficulty: 'medium', es: { word: 'Abogado', clue: 'Better Call Saul' }, en: { word: 'Lawyer', clue: 'Better Call Saul' } },
  { id: 'pilot', category: 'professions', difficulty: 'medium', es: { word: 'Piloto', clue: 'Top Gun' }, en: { word: 'Pilot', clue: 'Top Gun' } },
  { id: 'scientist', category: 'professions', difficulty: 'medium', es: { word: 'Científico', clue: 'Breaking Bad' }, en: { word: 'Scientist', clue: 'Breaking Bad' } },

  // Naturaleza / Nature
  { id: 'rainbow', category: 'nature', difficulty: 'medium', es: { word: 'Arcoíris', clue: 'My Little Pony' }, en: { word: 'Rainbow', clue: 'My Little Pony' } },
  { id: 'rain', category: 'nature', difficulty: 'medium', es: { word: 'Lluvia', clue: 'Cantando Bajo la Lluvia' }, en: { word: 'Rain', clue: "Singin' in the Rain" } },
  { id: 'snow', category: 'nature', difficulty: 'medium', es: { word: 'Nieve', clue: 'Juego de Tronos' }, en: { word: 'Snow', clue: 'Game of Thrones' } },
  { id: 'volcano', category: 'nature', difficulty: 'medium', es: { word: 'Volcán', clue: 'Moana' }, en: { word: 'Volcano', clue: 'Moana' } },
  { id: 'ocean', category: 'nature', difficulty: 'medium', es: { word: 'Océano', clue: 'Aquaman' }, en: { word: 'Ocean', clue: 'Aquaman' } },
  { id: 'star', category: 'nature', difficulty: 'easy', es: { word: 'Estrella', clue: 'Patricio Estrella' }, en: { word: 'Star', clue: 'Patrick Star' } },
  { id: 'river', category: 'nature', difficulty: 'medium', es: { word: 'Río', clue: 'Moisés' }, en: { word: 'River', clue: 'Moses' } },
  { id: 'earthquake', category: 'nature', difficulty: 'medium', es: { word: 'Terremoto', clue: 'Godzilla' }, en: { word: 'Earthquake', clue: 'Godzilla' } },
  { id: 'moon', category: 'nature', difficulty: 'medium', es: { word: 'Luna', clue: 'Sailor Moon' }, en: { word: 'Moon', clue: 'Sailor Moon' } },
  { id: 'sun', category: 'nature', difficulty: 'medium', es: { word: 'Sol', clue: 'Ícaro' }, en: { word: 'Sun', clue: 'Icarus' } },
  { id: 'lightning', category: 'nature', difficulty: 'easy', es: { word: 'Rayo', clue: 'Zeus' }, en: { word: 'Lightning', clue: 'Zeus' } },

  // Celebraciones / Celebrations
  { id: 'birthday', category: 'celebrations', difficulty: 'medium', es: { word: 'Cumpleaños', clue: 'Marilyn Monroe' }, en: { word: 'Birthday', clue: 'Marilyn Monroe' } },
  { id: 'wedding', category: 'celebrations', difficulty: 'medium', es: { word: 'Boda', clue: 'El Cadáver de la Novia' }, en: { word: 'Wedding', clue: 'Corpse Bride' } },
  { id: 'christmas', category: 'celebrations', difficulty: 'easy', es: { word: 'Navidad', clue: 'Papá Noel' }, en: { word: 'Christmas', clue: 'Santa Claus' } },
  { id: 'carnival', category: 'celebrations', difficulty: 'hard', es: { word: 'Carnaval', clue: 'V de Vendetta' }, en: { word: 'Carnival', clue: 'V for Vendetta' } },
  { id: 'graduation', category: 'celebrations', difficulty: 'medium', es: { word: 'Graduación', clue: 'High School Musical' }, en: { word: 'Graduation', clue: 'High School Musical' } },
  { id: 'halloween', category: 'celebrations', difficulty: 'easy', es: { word: 'Halloween', clue: 'Jack Skellington' }, en: { word: 'Halloween', clue: 'Jack Skellington' } },

  // Hogar / Home
  { id: 'kitchen', category: 'home', difficulty: 'medium', es: { word: 'Cocina', clue: 'MasterChef' }, en: { word: 'Kitchen', clue: 'MasterChef' } },
  { id: 'couch', category: 'home', difficulty: 'medium', es: { word: 'Sofá', clue: 'Friends' }, en: { word: 'Couch', clue: 'Friends' } },
  { id: 'shower', category: 'home', difficulty: 'medium', es: { word: 'Ducha', clue: 'Psicosis' }, en: { word: 'Shower', clue: 'Psycho' } },
  { id: 'fridge', category: 'home', difficulty: 'medium', es: { word: 'Nevera', clue: 'Homero Simpson' }, en: { word: 'Fridge', clue: 'Homer Simpson' } },
  { id: 'stairs', category: 'home', difficulty: 'hard', es: { word: 'Escalera', clue: 'El Guasón' }, en: { word: 'Stairs', clue: 'Joker' } },
  { id: 'garage', category: 'home', difficulty: 'hard', es: { word: 'Garaje', clue: 'Steve Jobs' }, en: { word: 'Garage', clue: 'Steve Jobs' } },
  { id: 'attic', category: 'home', difficulty: 'hard', es: { word: 'Ático', clue: 'Anne Frank' }, en: { word: 'Attic', clue: 'Anne Frank' } },

  // Ficción / Fiction
  { id: 'superhero', category: 'fiction', difficulty: 'easy', es: { word: 'Superhéroe', clue: 'Superman' }, en: { word: 'Superhero', clue: 'Superman' } },
  { id: 'pirate', category: 'fiction', difficulty: 'medium', es: { word: 'Pirata', clue: 'Jack Sparrow' }, en: { word: 'Pirate', clue: 'Jack Sparrow' } },
  { id: 'ghost', category: 'fiction', difficulty: 'medium', es: { word: 'Fantasma', clue: 'Casper' }, en: { word: 'Ghost', clue: 'Casper' } },
  { id: 'dragon', category: 'fiction', difficulty: 'medium', es: { word: 'Dragón', clue: 'Cómo Entrenar a tu Dragón' }, en: { word: 'Dragon', clue: 'How to Train Your Dragon' } },
  { id: 'witch', category: 'fiction', difficulty: 'hard', es: { word: 'Bruja', clue: 'El Mago de Oz' }, en: { word: 'Witch', clue: 'The Wizard of Oz' } },
  { id: 'vampire', category: 'fiction', difficulty: 'easy', es: { word: 'Vampiro', clue: 'Drácula' }, en: { word: 'Vampire', clue: 'Dracula' } },
  { id: 'zombie', category: 'fiction', difficulty: 'medium', es: { word: 'Zombi', clue: 'The Walking Dead' }, en: { word: 'Zombie', clue: 'The Walking Dead' } },
  { id: 'wizard', category: 'fiction', difficulty: 'medium', es: { word: 'Mago', clue: 'Gandalf' }, en: { word: 'Wizard', clue: 'Gandalf' } },
  { id: 'alien', category: 'fiction', difficulty: 'medium', es: { word: 'Alienígena', clue: 'E.T.' }, en: { word: 'Alien', clue: 'E.T.' } },
  { id: 'werewolf', category: 'fiction', difficulty: 'medium', es: { word: 'Hombre Lobo', clue: 'Crepúsculo' }, en: { word: 'Werewolf', clue: 'Twilight' } },
  { id: 'giant', category: 'fiction', difficulty: 'hard', es: { word: 'Gigante', clue: 'Jack y las Habichuelas Mágicas' }, en: { word: 'Giant', clue: 'Jack and the Beanstalk' } },
  { id: 'mermaid', category: 'fiction', difficulty: 'easy', es: { word: 'Sirena', clue: 'Ariel' }, en: { word: 'Mermaid', clue: 'Ariel' } },

  // Superpoderes / Superpowers
  { id: 'teleportation', category: 'powers', difficulty: 'hard', es: { word: 'Teletransportación', clue: 'Goku' }, en: { word: 'Teleportation', clue: 'Goku' } },
  { id: 'invisibility', category: 'powers', difficulty: 'hard', es: { word: 'Invisibilidad', clue: 'Harry Potter' }, en: { word: 'Invisibility', clue: 'Harry Potter' } },
  { id: 'flight', category: 'powers', difficulty: 'easy', es: { word: 'Volar', clue: 'Superman' }, en: { word: 'Flying', clue: 'Superman' } },
  { id: 'super_strength', category: 'powers', difficulty: 'easy', es: { word: 'Superfuerza', clue: 'Hulk' }, en: { word: 'Super Strength', clue: 'Hulk' } },
  { id: 'super_speed', category: 'powers', difficulty: 'easy', es: { word: 'Supervelocidad', clue: 'Flash' }, en: { word: 'Super Speed', clue: 'The Flash' } },
  { id: 'immortality', category: 'powers', difficulty: 'hard', es: { word: 'Inmortalidad', clue: 'Wolverine' }, en: { word: 'Immortality', clue: 'Wolverine' } },
  { id: 'healing', category: 'powers', difficulty: 'medium', es: { word: 'Curación', clue: 'Ave Fénix' }, en: { word: 'Healing', clue: 'Phoenix' } },
  { id: 'mind_control', category: 'powers', difficulty: 'hard', es: { word: 'Control Mental', clue: 'Profesor X' }, en: { word: 'Mind Control', clue: 'Professor X' } },
  { id: 'heat_vision', category: 'powers', difficulty: 'hard', es: { word: 'Visión de Calor', clue: 'Cíclope' }, en: { word: 'Heat Vision', clue: 'Cyclops' } },
  { id: 'ice_powers', category: 'powers', difficulty: 'medium', es: { word: 'Congelar', clue: 'Mr. Freeze' }, en: { word: 'Freezing', clue: 'Mr. Freeze' } },
  { id: 'shapeshifting', category: 'powers', difficulty: 'hard', es: { word: 'Cambiar de Forma', clue: 'Mystique' }, en: { word: 'Shapeshifting', clue: 'Mystique' } },
  { id: 'time_travel', category: 'powers', difficulty: 'medium', es: { word: 'Viajar en el Tiempo', clue: 'Marty McFly' }, en: { word: 'Time Travel', clue: 'Marty McFly' } },
  { id: 'telekinesis', category: 'powers', difficulty: 'medium', es: { word: 'Telequinesis', clue: 'Eleven (Stranger Things)' }, en: { word: 'Telekinesis', clue: 'Eleven (Stranger Things)' } },
  { id: 'x_ray_vision', category: 'powers', difficulty: 'hard', es: { word: 'Visión de Rayos X', clue: 'Superman' }, en: { word: 'X-Ray Vision', clue: 'Superman' } },
  // Nuevas palabras / New words
  { id: 'strawberry', category: 'food', difficulty: 'easy', es: { word: 'Fresa', clue: 'Strawberry Shortcake' }, en: { word: 'Strawberry', clue: 'Strawberry Shortcake' } },
  { id: 'popcorn', category: 'food', difficulty: 'medium', es: { word: 'Palomitas', clue: 'Michael Jackson' }, en: { word: 'Popcorn', clue: 'Michael Jackson' } },
  { id: 'cheese', category: 'food', difficulty: 'easy', es: { word: 'Queso', clue: 'Wallace' }, en: { word: 'Cheese', clue: 'Wallace' } },
  { id: 'cookie', category: 'food', difficulty: 'easy', es: { word: 'Galleta', clue: 'Cookie Monster' }, en: { word: 'Cookie', clue: 'Cookie Monster' } },
  { id: 'peanut', category: 'food', difficulty: 'medium', es: { word: 'Maní', clue: 'Charlie Brown' }, en: { word: 'Peanut', clue: 'Charlie Brown' } },
  { id: 'marshmallow', category: 'food', difficulty: 'medium', es: { word: 'Malvavisco', clue: 'Cazafantasmas' }, en: { word: 'Marshmallow', clue: 'Ghostbusters' } },
  { id: 'cinnamon', category: 'food', difficulty: 'hard', es: { word: 'Canela', clue: 'Shrek' }, en: { word: 'Cinnamon', clue: 'Shrek' } },
  { id: 'jam', category: 'food', difficulty: 'medium', es: { word: 'Mermelada', clue: 'Paddington' }, en: { word: 'Jam', clue: 'Paddington' } },
  { id: 'cow', category: 'animals', difficulty: 'medium', es: { word: 'Vaca', clue: 'Clarabelle' }, en: { word: 'Cow', clue: 'Clarabelle' } },
  { id: 'pig', category: 'animals', difficulty: 'easy', es: { word: 'Cerdo', clue: 'Babe' }, en: { word: 'Pig', clue: 'Babe' } },
  { id: 'frog', category: 'animals', difficulty: 'easy', es: { word: 'Rana', clue: 'Kermit' }, en: { word: 'Frog', clue: 'Kermit' } },
  { id: 'bee', category: 'animals', difficulty: 'easy', es: { word: 'Abeja', clue: 'Maya' }, en: { word: 'Bee', clue: 'Maya' } },
  { id: 'crocodile', category: 'animals', difficulty: 'easy', es: { word: 'Cocodrilo', clue: 'Peter Pan' }, en: { word: 'Crocodile', clue: 'Peter Pan' } },
  { id: 'bat', category: 'animals', difficulty: 'medium', es: { word: 'Murciélago', clue: 'Nosferatu' }, en: { word: 'Bat', clue: 'Nosferatu' } },
  { id: 'gorilla', category: 'animals', difficulty: 'medium', es: { word: 'Gorila', clue: 'Donkey Kong' }, en: { word: 'Gorilla', clue: 'Donkey Kong' } },
  { id: 'fox', category: 'animals', difficulty: 'medium', es: { word: 'Zorro', clue: 'Robin Hood' }, en: { word: 'Fox', clue: 'Robin Hood' } },
  { id: 'motorcycle', category: 'transport', difficulty: 'medium', es: { word: 'Motocicleta', clue: 'Easy Rider' }, en: { word: 'Motorcycle', clue: 'Easy Rider' } },
  { id: 'taxi', category: 'transport', difficulty: 'medium', es: { word: 'Taxi', clue: 'Taxi Driver' }, en: { word: 'Taxi', clue: 'Taxi Driver' } },
  { id: 'bus', category: 'transport', difficulty: 'easy', es: { word: 'Autobús', clue: 'Speed' }, en: { word: 'Bus', clue: 'Speed' } },
  { id: 'tram', category: 'transport', difficulty: 'hard', es: { word: 'Tranvía', clue: 'Un tranvía llamado Deseo' }, en: { word: 'Tram', clue: 'A Streetcar Named Desire' } },
  { id: 'sailboat', category: 'transport', difficulty: 'medium', es: { word: 'Velero', clue: 'Colón' }, en: { word: 'Sailboat', clue: 'Colón' } },
  { id: 'zeppelin', category: 'transport', difficulty: 'medium', es: { word: 'Zepelín', clue: 'Hindenburg' }, en: { word: 'Zeppelin', clue: 'Hindenburg' } },
  { id: 'saxophone', category: 'music', difficulty: 'medium', es: { word: 'Saxofón', clue: 'Lisa Simpson' }, en: { word: 'Saxophone', clue: 'Lisa Simpson' } },
  { id: 'trumpet', category: 'music', difficulty: 'easy', es: { word: 'Trompeta', clue: 'Louis Armstrong' }, en: { word: 'Trumpet', clue: 'Louis Armstrong' } },
  { id: 'bass', category: 'music', difficulty: 'medium', es: { word: 'Bajo', clue: 'Flea' }, en: { word: 'Bass', clue: 'Flea' } },
  { id: 'accordion', category: 'music', difficulty: 'medium', es: { word: 'Acordeón', clue: 'Amélie' }, en: { word: 'Accordion', clue: 'Amélie' } },
  { id: 'gramophone', category: 'music', difficulty: 'hard', es: { word: 'Gramófono', clue: 'Edison' }, en: { word: 'Gramophone', clue: 'Edison' } },
  { id: 'improvisation', category: 'music', difficulty: 'hard', es: { word: 'Improvisación', clue: 'Coltrane' }, en: { word: 'Improvisation', clue: 'Coltrane' } },
  { id: 'comic', category: 'entertainment', difficulty: 'easy', es: { word: 'Cómic', clue: 'Stan Lee' }, en: { word: 'Comic', clue: 'Stan Lee' } },
  { id: 'photograph', category: 'entertainment', difficulty: 'medium', es: { word: 'Fotografía', clue: 'Polaroid' }, en: { word: 'Photography', clue: 'Polaroid' } },
  { id: 'magic', category: 'entertainment', difficulty: 'easy', es: { word: 'Magia', clue: 'Houdini' }, en: { word: 'Magic', clue: 'Houdini' } },
  { id: 'puppet', category: 'entertainment', difficulty: 'medium', es: { word: 'Marioneta', clue: 'Saw' }, en: { word: 'Puppet', clue: 'Saw' } },
  { id: 'masquerade', category: 'entertainment', difficulty: 'easy', es: { word: 'Máscara', clue: 'Jim Carrey' }, en: { word: 'Mask', clue: 'Jim Carrey' } },
  { id: 'clown', category: 'entertainment', difficulty: 'easy', es: { word: 'Payaso', clue: 'Pennywise' }, en: { word: 'Clown', clue: 'Pennywise' } },
  { id: 'opera_house', category: 'entertainment', difficulty: 'medium', es: { word: 'Ópera', clue: 'Verdi' }, en: { word: 'Opera', clue: 'Verdi' } },
  { id: 'library', category: 'entertainment', difficulty: 'hard', es: { word: 'Biblioteca', clue: 'El nombre de la rosa' }, en: { word: 'Library', clue: 'The Name of the Rose' } },
  { id: 'pyramid', category: 'places', difficulty: 'easy', es: { word: 'Pirámide', clue: 'Keops' }, en: { word: 'Pyramid', clue: 'Keops' } },
  { id: 'hotel', category: 'places', difficulty: 'easy', es: { word: 'Hotel', clue: 'El Resplandor' }, en: { word: 'Hotel', clue: 'The Shining' } },
  { id: 'hospital', category: 'places', difficulty: 'easy', es: { word: 'Hospital', clue: 'Grey’s Anatomy' }, en: { word: 'Hospital', clue: 'Grey’s Anatomy' } },
  { id: 'school', category: 'places', difficulty: 'easy', es: { word: 'Escuela', clue: 'Matilda' }, en: { word: 'School', clue: 'Matilda' } },
  { id: 'airport', category: 'places', difficulty: 'medium', es: { word: 'Aeropuerto', clue: 'La Terminal' }, en: { word: 'Airport', clue: 'The Terminal' } },
  { id: 'zoo', category: 'places', difficulty: 'easy', es: { word: 'Zoológico', clue: 'Madagascar' }, en: { word: 'Zoo', clue: 'Madagascar' } },
  { id: 'farm', category: 'places', difficulty: 'hard', es: { word: 'Granja', clue: 'Clark Kent' }, en: { word: 'Farm', clue: 'Clark Kent' } },
  { id: 'elevator', category: 'places', difficulty: 'medium', es: { word: 'Ascensor', clue: 'El Guasón' }, en: { word: 'Elevator', clue: 'El Guasón' } },
  { id: 'baseball', category: 'sports', difficulty: 'medium', es: { word: 'Béisbol', clue: 'The Sandlot' }, en: { word: 'Baseball', clue: 'The Sandlot' } },
  { id: 'athletics', category: 'sports', difficulty: 'easy', es: { word: 'Atletismo', clue: 'Usain Bolt' }, en: { word: 'Athletics', clue: 'Usain Bolt' } },
  { id: 'skating', category: 'sports', difficulty: 'hard', es: { word: 'Patinaje', clue: 'Tonya Harding' }, en: { word: 'Skating', clue: 'Tonya Harding' } },
  { id: 'gymnastics', category: 'sports', difficulty: 'easy', es: { word: 'Gimnasia', clue: 'Simone Biles' }, en: { word: 'Gymnastics', clue: 'Simone Biles' } },
  { id: 'skiing', category: 'sports', difficulty: 'medium', es: { word: 'Esquí', clue: 'James Bond' }, en: { word: 'Skiing', clue: 'James Bond' } },
  { id: 'karate', category: 'sports', difficulty: 'easy', es: { word: 'Karate', clue: 'Cobra Kai' }, en: { word: 'Karate', clue: 'Cobra Kai' } },
  { id: 'chess', category: 'sports', difficulty: 'medium', es: { word: 'Ajedrez', clue: 'Beth Harmon' }, en: { word: 'Chess', clue: 'Beth Harmon' } },
  { id: 'evolution', category: 'science', difficulty: 'easy', es: { word: 'Evolución', clue: 'Darwin' }, en: { word: 'Evolution', clue: 'Darwin' } },
  { id: 'comet', category: 'science', difficulty: 'medium', es: { word: 'Cometa', clue: 'Halley' }, en: { word: 'Comet', clue: 'Halley' } },
  { id: 'penicillin', category: 'science', difficulty: 'medium', es: { word: 'Penicilina', clue: 'Fleming' }, en: { word: 'Penicillin', clue: 'Fleming' } },
  { id: 'fossil', category: 'science', difficulty: 'medium', es: { word: 'Fósil', clue: 'Ross Geller' }, en: { word: 'Fossil', clue: 'Ross Geller' } },
  { id: 'dinosaur', category: 'science', difficulty: 'easy', es: { word: 'Dinosaurio', clue: 'Jurassic Park' }, en: { word: 'Dinosaur', clue: 'Jurassic Park' } },
  { id: 'experiment', category: 'science', difficulty: 'medium', es: { word: 'Experimento', clue: 'Dexter' }, en: { word: 'Experiment', clue: 'Dexter' } },
  { id: 'laboratory', category: 'science', difficulty: 'medium', es: { word: 'Laboratorio', clue: 'Walter White' }, en: { word: 'Laboratory', clue: 'Walter White' } },
  { id: 'laser', category: 'science', difficulty: 'hard', es: { word: 'Láser', clue: 'Goldfinger' }, en: { word: 'Laser', clue: 'Goldfinger' } },
  { id: 'clone', category: 'science', difficulty: 'medium', es: { word: 'Clon', clue: 'Dolly' }, en: { word: 'Clone', clue: 'Dolly' } },
  { id: 'eclipse', category: 'science', difficulty: 'medium', es: { word: 'Eclipse', clue: 'Galileo' }, en: { word: 'Eclipse', clue: 'Galileo' } },
  { id: 'relativity', category: 'science', difficulty: 'easy', es: { word: 'Relatividad', clue: 'Einstein' }, en: { word: 'Relativity', clue: 'Einstein' } },
  { id: 'printing_press', category: 'technology', difficulty: 'medium', es: { word: 'Imprenta', clue: 'Gutenberg' }, en: { word: 'Printing Press', clue: 'Gutenberg' } },
  { id: 'electricity', category: 'technology', difficulty: 'easy', es: { word: 'Electricidad', clue: 'Tesla' }, en: { word: 'Electricity', clue: 'Tesla' } },
  { id: 'satellite', category: 'technology', difficulty: 'medium', es: { word: 'Satélite', clue: 'Sputnik' }, en: { word: 'Satellite', clue: 'Sputnik' } },
  { id: 'hologram', category: 'technology', difficulty: 'hard', es: { word: 'Holograma', clue: 'Tupac' }, en: { word: 'Hologram', clue: 'Tupac' } },
  { id: 'algorithm', category: 'technology', difficulty: 'hard', es: { word: 'Algoritmo', clue: 'Al-Juarismi' }, en: { word: 'Algorithm', clue: 'Al-Khwarizmi' } },
  { id: 'cryptography', category: 'technology', difficulty: 'hard', es: { word: 'Criptografía', clue: 'Enigma' }, en: { word: 'Cryptography', clue: 'Enigma' } },
  { id: 'television', category: 'technology', difficulty: 'medium', es: { word: 'Televisor', clue: 'Poltergeist' }, en: { word: 'Television', clue: 'Poltergeist' } },
  { id: 'vacuum', category: 'technology', difficulty: 'medium', es: { word: 'Aspiradora', clue: 'Los Supersónicos' }, en: { word: 'Vacuum Cleaner', clue: 'The Jetsons' } },
  { id: 'camera', category: 'technology', difficulty: 'easy', es: { word: 'Cámara', clue: 'Paparazzi' }, en: { word: 'Camera', clue: 'Paparazzi' } },
  { id: 'bed', category: 'objects', difficulty: 'easy', es: { word: 'Cama', clue: 'Freddy Krueger' }, en: { word: 'Bed', clue: 'Freddy Krueger' } },
  { id: 'brush', category: 'objects', difficulty: 'easy', es: { word: 'Cepillo', clue: 'Rapunzel' }, en: { word: 'Brush', clue: 'Rapunzel' } },
  { id: 'fan', category: 'objects', difficulty: 'medium', es: { word: 'Ventilador', clue: 'American Beauty' }, en: { word: 'Fan', clue: 'American Beauty' } },
  { id: 'hammer', category: 'objects', difficulty: 'easy', es: { word: 'Martillo', clue: 'Thor' }, en: { word: 'Hammer', clue: 'Thor' } },
  { id: 'knife', category: 'objects', difficulty: 'medium', es: { word: 'Cuchillo', clue: 'Psicosis' }, en: { word: 'Knife', clue: 'Psycho' } },
  { id: 'backpack', category: 'objects', difficulty: 'easy', es: { word: 'Mochila', clue: 'Dora' }, en: { word: 'Backpack', clue: 'Dora' } },
  { id: 'glasses', category: 'objects', difficulty: 'medium', es: { word: 'Gafas', clue: 'Clark Kent' }, en: { word: 'Glasses', clue: 'Clark Kent' } },
  { id: 'doctor_strange', category: 'fiction', difficulty: 'medium', es: { word: 'Hechicero', clue: 'Doctor Strange' }, en: { word: 'Sorcerer', clue: 'Doctor Strange' } },
  { id: 'ogre', category: 'fiction', difficulty: 'easy', es: { word: 'Ogro', clue: 'Shrek' }, en: { word: 'Ogre', clue: 'Shrek' } },
  { id: 'fairy', category: 'fiction', difficulty: 'easy', es: { word: 'Hada', clue: 'Campanita' }, en: { word: 'Fairy', clue: 'Tinker Bell' } },
  { id: 'demon', category: 'fiction', difficulty: 'medium', es: { word: 'Demonio', clue: 'Hellboy' }, en: { word: 'Demon', clue: 'Hellboy' } },
  { id: 'android', category: 'fiction', difficulty: 'hard', es: { word: 'Androide', clue: 'Blade Runner' }, en: { word: 'Android', clue: 'Blade Runner' } },
  { id: 'mayor', category: 'professions', difficulty: 'medium', es: { word: 'Alcalde', clue: 'Los Simpson' }, en: { word: 'Mayor', clue: 'Los Simpson' } },
  { id: 'judge', category: 'professions', difficulty: 'medium', es: { word: 'Juez', clue: 'Jurado 12' }, en: { word: 'Judge', clue: '12 Angry Men' } },
  { id: 'journalist', category: 'professions', difficulty: 'easy', es: { word: 'Periodista', clue: 'Superman' }, en: { word: 'Journalist', clue: 'Superman' } },
  { id: 'photographer', category: 'professions', difficulty: 'hard', es: { word: 'Fotógrafo', clue: 'Ansel Adams' }, en: { word: 'Photographer', clue: 'Ansel Adams' } },
  { id: 'architect', category: 'professions', difficulty: 'medium', es: { word: 'Arquitecto', clue: 'Gaudí' }, en: { word: 'Architect', clue: 'Gaudí' } },
  { id: 'aurora', category: 'nature', difficulty: 'medium', es: { word: 'Aurora', clue: 'Borealis' }, en: { word: 'Aurora', clue: 'Borealis' } },
  { id: 'tide', category: 'nature', difficulty: 'easy', es: { word: 'Marea', clue: 'Luna' }, en: { word: 'Tide', clue: 'Luna' } },
  { id: 'rainforest', category: 'nature', difficulty: 'medium', es: { word: 'Selva Tropical', clue: 'Amazonas' }, en: { word: 'Rainforest', clue: 'Amazonas' } },
  { id: 'coral', category: 'nature', difficulty: 'easy', es: { word: 'Coral', clue: 'Nemo' }, en: { word: 'Coral', clue: 'Nemo' } },
  { id: 'glacier', category: 'nature', difficulty: 'easy', es: { word: 'Glaciar', clue: 'Ice Age' }, en: { word: 'Glacier', clue: 'Ice Age' } },
  { id: 'tornado', category: 'nature', difficulty: 'medium', es: { word: 'Tornado', clue: 'Oz' }, en: { word: 'Tornado', clue: 'Oz' } },
  { id: 'thunder', category: 'nature', difficulty: 'easy', es: { word: 'Trueno', clue: 'Zeus' }, en: { word: 'Thunder', clue: 'Zeus' } },
  { id: 'easter', category: 'celebrations', difficulty: 'easy', es: { word: 'Pascua', clue: 'Conejo' }, en: { word: 'Easter', clue: 'Conejo' } },
  { id: 'new_year', category: 'celebrations', difficulty: 'easy', es: { word: 'Año Nuevo', clue: 'Times Square' }, en: { word: 'New Year', clue: 'Times Square' } },
  { id: 'valentines', category: 'celebrations', difficulty: 'medium', es: { word: 'San Valentín', clue: 'Cupido' }, en: { word: 'Valentine’s Day', clue: 'Cupido' } },
  { id: 'bedroom', category: 'home', difficulty: 'medium', es: { word: 'Dormitorio', clue: 'Monsters, Inc.' }, en: { word: 'Bedroom', clue: 'Monsters, Inc.' } },
  { id: 'garden', category: 'home', difficulty: 'medium', es: { word: 'Jardín', clue: 'Alicia' }, en: { word: 'Garden', clue: 'Alice' } },
];

// excludeIds: string[] — ids de palabras ya usadas en esta sesión (no se repiten).
// category filtra el banco por su clave interna (usa null o "all" para no filtrar).
export const getRandomWord = (excludeIds, category, difficulty = 'all') => {
  const excluded = Array.isArray(excludeIds) ? excludeIds : (excludeIds ? [excludeIds] : []);

  const categoryPool = category && category !== 'all'
    ? wordBank.filter(item => item.category === category)
    : wordBank;

  const pool = difficulty && difficulty !== 'all'
    ? categoryPool.filter(item => item.difficulty === difficulty)
    : categoryPool;

  const source = pool.length > 0
    ? pool
    : (categoryPool.length > 0 ? categoryPool : wordBank);

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
    'celebrations', 'home', 'fiction', 'powers',
  ];
  return keys.sort((a, b) => order.indexOf(a) - order.indexOf(b));
};
