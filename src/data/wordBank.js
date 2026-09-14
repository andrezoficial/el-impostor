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
  { id: 'apple', category: 'food', es: { word: 'Manzana', clue: 'Newton' }, en: { word: 'Apple', clue: 'Newton' } },
  { id: 'pizza', category: 'food', es: { word: 'Pizza', clue: 'Tortugas Ninja' }, en: { word: 'Pizza', clue: 'Ninja Turtles' } },
  { id: 'sushi', category: 'food', es: { word: 'Sushi', clue: 'Buscando a Nemo' }, en: { word: 'Sushi', clue: 'Finding Nemo' } },
  { id: 'burger', category: 'food', es: { word: 'Hamburguesa', clue: 'Bob Esponja' }, en: { word: 'Hamburger', clue: 'SpongeBob' } },
  { id: 'ice_cream', category: 'food', es: { word: 'Helado', clue: 'Elsa' }, en: { word: 'Ice Cream', clue: 'Elsa' } },
  { id: 'paella', category: 'food', es: { word: 'Paella', clue: 'Gordon Ramsay' }, en: { word: 'Paella', clue: 'Gordon Ramsay' } },
  { id: 'tacos', category: 'food', es: { word: 'Tacos', clue: 'Speedy Gonzales' }, en: { word: 'Tacos', clue: 'Speedy Gonzales' } },
  { id: 'chocolate', category: 'food', es: { word: 'Chocolate', clue: 'Willy Wonka' }, en: { word: 'Chocolate', clue: 'Willy Wonka' } },
  { id: 'lemon', category: 'food', es: { word: 'Limón', clue: 'Beyoncé' }, en: { word: 'Lemon', clue: 'Beyoncé' } },
  { id: 'honey', category: 'food', es: { word: 'Miel', clue: 'Winnie Pooh' }, en: { word: 'Honey', clue: 'Winnie the Pooh' } },
  { id: 'ramen', category: 'food', es: { word: 'Ramen', clue: 'Naruto' }, en: { word: 'Ramen', clue: 'Naruto' } },
  { id: 'donut', category: 'food', es: { word: 'Dona', clue: 'Homero Simpson' }, en: { word: 'Donut', clue: 'Homer Simpson' } },
  { id: 'spinach', category: 'food', es: { word: 'Espinaca', clue: 'Popeye' }, en: { word: 'Spinach', clue: 'Popeye' } },
  { id: 'coffee', category: 'food', es: { word: 'Café', clue: 'Central Perk' }, en: { word: 'Coffee', clue: 'Central Perk' } },

  // Animales / Animals
  { id: 'dog', category: 'animals', es: { word: 'Perro', clue: 'Scooby-Doo' }, en: { word: 'Dog', clue: 'Scooby-Doo' } },
  { id: 'cat', category: 'animals', es: { word: 'Gato', clue: 'Garfield' }, en: { word: 'Cat', clue: 'Garfield' } },
  { id: 'elephant', category: 'animals', es: { word: 'Elefante', clue: 'Dumbo' }, en: { word: 'Elephant', clue: 'Dumbo' } },
  { id: 'dolphin', category: 'animals', es: { word: 'Delfín', clue: 'Flipper' }, en: { word: 'Dolphin', clue: 'Flipper' } },
  { id: 'eagle', category: 'animals', es: { word: 'Águila', clue: 'Falcon' }, en: { word: 'Eagle', clue: 'Falcon' } },
  { id: 'shark', category: 'animals', es: { word: 'Tiburón', clue: 'Baby Shark' }, en: { word: 'Shark', clue: 'Baby Shark' } },
  { id: 'butterfly', category: 'animals', es: { word: 'Mariposa', clue: 'Muhammad Ali' }, en: { word: 'Butterfly', clue: 'Muhammad Ali' } },
  { id: 'snake', category: 'animals', es: { word: 'Serpiente', clue: 'Solid Snake' }, en: { word: 'Snake', clue: 'Solid Snake' } },
  { id: 'owl', category: 'animals', es: { word: 'Búho', clue: 'Hedwig' }, en: { word: 'Owl', clue: 'Hedwig' } },
  { id: 'chameleon', category: 'animals', es: { word: 'Camaleón', clue: 'Rango' }, en: { word: 'Chameleon', clue: 'Rango' } },
  { id: 'mouse', category: 'animals', es: { word: 'Ratón', clue: 'Mickey Mouse' }, en: { word: 'Mouse', clue: 'Mickey Mouse' } },
  { id: 'lion', category: 'animals', es: { word: 'León', clue: 'Simba' }, en: { word: 'Lion', clue: 'Simba' } },
  { id: 'monkey', category: 'animals', es: { word: 'Mono', clue: 'King Kong' }, en: { word: 'Monkey', clue: 'King Kong' } },
  { id: 'spider', category: 'animals', es: { word: 'Araña', clue: 'Spider-Man' }, en: { word: 'Spider', clue: 'Spider-Man' } },
  { id: 'panda', category: 'animals', es: { word: 'Panda', clue: 'Kung Fu Panda' }, en: { word: 'Panda', clue: 'Kung Fu Panda' } },
  { id: 'penguin', category: 'animals', es: { word: 'Pingüino', clue: 'Batman' }, en: { word: 'Penguin', clue: 'Batman' } },

  // Transporte / Transportation
  { id: 'car', category: 'transport', es: { word: 'Coche', clue: 'Rayo McQueen' }, en: { word: 'Car', clue: 'Lightning McQueen' } },
  { id: 'plane', category: 'transport', es: { word: 'Avión', clue: 'Top Gun' }, en: { word: 'Airplane', clue: 'Top Gun' } },
  { id: 'ship', category: 'transport', es: { word: 'Barco', clue: 'Titanic' }, en: { word: 'Ship', clue: 'Titanic' } },
  { id: 'bike', category: 'transport', es: { word: 'Bicicleta', clue: 'E.T.' }, en: { word: 'Bicycle', clue: 'E.T.' } },
  { id: 'train', category: 'transport', es: { word: 'Tren', clue: 'Hogwarts' }, en: { word: 'Train', clue: 'Hogwarts' } },
  { id: 'helicopter', category: 'transport', es: { word: 'Helicóptero', clue: 'Jurassic Park' }, en: { word: 'Helicopter', clue: 'Jurassic Park' } },
  { id: 'subway', category: 'transport', es: { word: 'Metro', clue: 'Spider-Man 2' }, en: { word: 'Subway', clue: 'Spider-Man 2' } },
  { id: 'rocket', category: 'transport', es: { word: 'Cohete', clue: 'Elon Musk' }, en: { word: 'Rocket', clue: 'Elon Musk' } },
  { id: 'skateboard', category: 'transport', es: { word: 'Patineta', clue: 'Marty McFly' }, en: { word: 'Skateboard', clue: 'Marty McFly' } },

  // Música / Music
  { id: 'guitar', category: 'music', es: { word: 'Guitarra', clue: 'Jimi Hendrix' }, en: { word: 'Guitar', clue: 'Jimi Hendrix' } },
  { id: 'piano', category: 'music', es: { word: 'Piano', clue: 'Beethoven' }, en: { word: 'Piano', clue: 'Beethoven' } },
  { id: 'drums', category: 'music', es: { word: 'Batería', clue: 'Animal (Los Muppets)' }, en: { word: 'Drums', clue: 'Animal (Muppets)' } },
  { id: 'microphone', category: 'music', es: { word: 'Micrófono', clue: 'Freddie Mercury' }, en: { word: 'Microphone', clue: 'Freddie Mercury' } },
  { id: 'violin', category: 'music', es: { word: 'Violín', clue: 'Sherlock Holmes' }, en: { word: 'Violin', clue: 'Sherlock Holmes' } },

  // Entretenimiento / Entertainment
  { id: 'movie', category: 'entertainment', es: { word: 'Película', clue: 'Óscar' }, en: { word: 'Movie', clue: 'Oscar' } },
  { id: 'book', category: 'entertainment', es: { word: 'Libro', clue: 'Hermione' }, en: { word: 'Book', clue: 'Hermione' } },
  { id: 'museum', category: 'entertainment', es: { word: 'Museo', clue: 'Una Noche en el Museo' }, en: { word: 'Museum', clue: 'Night at the Museum' } },
  { id: 'theater', category: 'entertainment', es: { word: 'Teatro', clue: 'Shakespeare' }, en: { word: 'Theater', clue: 'Shakespeare' } },
  { id: 'videogame', category: 'entertainment', es: { word: 'Videojuego', clue: 'Mario' }, en: { word: 'Video Game', clue: 'Mario' } },
  { id: 'circus', category: 'entertainment', es: { word: 'Circo', clue: 'El Guasón' }, en: { word: 'Circus', clue: 'The Joker' } },
  { id: 'concert', category: 'entertainment', es: { word: 'Concierto', clue: 'Coldplay' }, en: { word: 'Concert', clue: 'Coldplay' } },

  // Lugares / Places
  { id: 'beach', category: 'places', es: { word: 'Playa', clue: 'Guardianes de la Bahía' }, en: { word: 'Beach', clue: 'Baywatch' } },
  { id: 'mountain', category: 'places', es: { word: 'Montaña', clue: 'El Rey León' }, en: { word: 'Mountain', clue: 'The Lion King' } },
  { id: 'forest', category: 'places', es: { word: 'Bosque', clue: 'Shrek' }, en: { word: 'Forest', clue: 'Shrek' } },
  { id: 'city', category: 'places', es: { word: 'Ciudad', clue: 'Batman' }, en: { word: 'City', clue: 'Batman' } },
  { id: 'desert', category: 'places', es: { word: 'Desierto', clue: 'Star Wars' }, en: { word: 'Desert', clue: 'Star Wars' } },
  { id: 'park', category: 'places', es: { word: 'Parque', clue: 'Pokémon GO' }, en: { word: 'Park', clue: 'Pokémon GO' } },
  { id: 'waterfall', category: 'places', es: { word: 'Cascada', clue: 'Avatar' }, en: { word: 'Waterfall', clue: 'Avatar' } },
  { id: 'castle', category: 'places', es: { word: 'Castillo', clue: 'Cenicienta' }, en: { word: 'Castle', clue: 'Cinderella' } },
  { id: 'island', category: 'places', es: { word: 'Isla', clue: 'Perdidos' }, en: { word: 'Island', clue: 'Lost' } },
  { id: 'jungle', category: 'places', es: { word: 'Selva', clue: 'Tarzán' }, en: { word: 'Jungle', clue: 'Tarzan' } },

  // Deportes / Sports
  { id: 'soccer', category: 'sports', es: { word: 'Fútbol', clue: 'Messi' }, en: { word: 'Soccer', clue: 'Messi' } },
  { id: 'basketball', category: 'sports', es: { word: 'Baloncesto', clue: 'Michael Jordan' }, en: { word: 'Basketball', clue: 'Michael Jordan' } },
  { id: 'tennis', category: 'sports', es: { word: 'Tenis', clue: 'Nadal' }, en: { word: 'Tennis', clue: 'Nadal' } },
  { id: 'swimming', category: 'sports', es: { word: 'Natación', clue: 'Michael Phelps' }, en: { word: 'Swimming', clue: 'Michael Phelps' } },
  { id: 'cycling', category: 'sports', es: { word: 'Ciclismo', clue: 'Lance Armstrong' }, en: { word: 'Cycling', clue: 'Lance Armstrong' } },
  { id: 'boxing', category: 'sports', es: { word: 'Boxeo', clue: 'Rocky Balboa' }, en: { word: 'Boxing', clue: 'Rocky Balboa' } },
  { id: 'surfing', category: 'sports', es: { word: 'Surf', clue: 'Punto de Quiebre' }, en: { word: 'Surfing', clue: 'Point Break' } },
  { id: 'wrestling', category: 'sports', es: { word: 'Lucha Libre', clue: 'John Cena' }, en: { word: 'Wrestling', clue: 'John Cena' } },
  { id: 'golf', category: 'sports', es: { word: 'Golf', clue: 'Tiger Woods' }, en: { word: 'Golf', clue: 'Tiger Woods' } },

  // Ciencia / Science
  { id: 'microscope', category: 'science', es: { word: 'Microscopio', clue: 'Bill Nye' }, en: { word: 'Microscope', clue: 'Bill Nye' } },
  { id: 'telescope', category: 'science', es: { word: 'Telescopio', clue: 'Galileo' }, en: { word: 'Telescope', clue: 'Galileo' } },
  { id: 'atom', category: 'science', es: { word: 'Átomo', clue: 'Rick Sanchez' }, en: { word: 'Atom', clue: 'Rick Sanchez' } },
  { id: 'dna', category: 'science', es: { word: 'ADN', clue: 'Jurassic Park' }, en: { word: 'DNA', clue: 'Jurassic Park' } },
  { id: 'gravity', category: 'science', es: { word: 'Gravedad', clue: 'Newton' }, en: { word: 'Gravity', clue: 'Newton' } },

  // Tecnología / Technology
  { id: 'computer', category: 'technology', es: { word: 'Computadora', clue: 'Steve Jobs' }, en: { word: 'Computer', clue: 'Steve Jobs' } },
  { id: 'phone', category: 'technology', es: { word: 'Teléfono', clue: 'Siri' }, en: { word: 'Phone', clue: 'Siri' } },
  { id: 'internet', category: 'technology', es: { word: 'Internet', clue: 'Matrix' }, en: { word: 'Internet', clue: 'The Matrix' } },
  { id: 'robot', category: 'technology', es: { word: 'Robot', clue: 'Terminator' }, en: { word: 'Robot', clue: 'Terminator' } },
  { id: 'drone', category: 'technology', es: { word: 'Dron', clue: 'Iron Man' }, en: { word: 'Drone', clue: 'Iron Man' } },
  { id: 'ai', category: 'technology', es: { word: 'Inteligencia Artificial', clue: 'HAL 9000' }, en: { word: 'Artificial Intelligence', clue: 'HAL 9000' } },
  { id: 'videocall', category: 'technology', es: { word: 'Videollamada', clue: 'Zoom' }, en: { word: 'Video Call', clue: 'Zoom' } },

  // Objetos / Objects
  { id: 'lamp', category: 'objects', es: { word: 'Lámpara', clue: 'Aladdín' }, en: { word: 'Lamp', clue: 'Aladdin' } },
  { id: 'clock', category: 'objects', es: { word: 'Reloj', clue: 'Cenicienta' }, en: { word: 'Clock', clue: 'Cinderella' } },
  { id: 'mirror', category: 'objects', es: { word: 'Espejo', clue: 'Alicia en el País de las Maravillas' }, en: { word: 'Mirror', clue: 'Alice in Wonderland' } },
  { id: 'hat', category: 'objects', es: { word: 'Sombrero', clue: 'Indiana Jones' }, en: { word: 'Hat', clue: 'Indiana Jones' } },
  { id: 'umbrella', category: 'objects', es: { word: 'Paraguas', clue: 'Mary Poppins' }, en: { word: 'Umbrella', clue: 'Mary Poppins' } },
  { id: 'key', category: 'objects', es: { word: 'Llave', clue: 'Zelda' }, en: { word: 'Key', clue: 'Zelda' } },
  { id: 'sword', category: 'objects', es: { word: 'Espada', clue: 'Zoro (One Piece)' }, en: { word: 'Sword', clue: 'Zoro (One Piece)' } },
  { id: 'shield', category: 'objects', es: { word: 'Escudo', clue: 'Capitán América' }, en: { word: 'Shield', clue: 'Captain America' } },
  { id: 'ring', category: 'objects', es: { word: 'Anillo', clue: 'Frodo' }, en: { word: 'Ring', clue: 'Frodo' } },
  { id: 'crown', category: 'objects', es: { word: 'Corona', clue: 'Juego de Tronos' }, en: { word: 'Crown', clue: 'Game of Thrones' } },
  { id: 'wand', category: 'objects', es: { word: 'Varita Mágica', clue: 'Harry Potter' }, en: { word: 'Magic Wand', clue: 'Harry Potter' } },

  // Profesiones / Professions
  { id: 'doctor', category: 'professions', es: { word: 'Médico', clue: 'Doctor House' }, en: { word: 'Doctor', clue: 'Dr. House' } },
  { id: 'teacher', category: 'professions', es: { word: 'Maestro', clue: 'Dumbledore' }, en: { word: 'Teacher', clue: 'Dumbledore' } },
  { id: 'police', category: 'professions', es: { word: 'Policía', clue: 'Robocop' }, en: { word: 'Police Officer', clue: 'Robocop' } },
  { id: 'firefighter', category: 'professions', es: { word: 'Bombero', clue: 'Bomberman' }, en: { word: 'Firefighter', clue: 'Bomberman' } },
  { id: 'chef', category: 'professions', es: { word: 'Chef', clue: 'Ratatouille' }, en: { word: 'Chef', clue: 'Ratatouille' } },
  { id: 'astronaut', category: 'professions', es: { word: 'Astronauta', clue: 'Buzz Lightyear' }, en: { word: 'Astronaut', clue: 'Buzz Lightyear' } },
  { id: 'detective', category: 'professions', es: { word: 'Detective', clue: 'Sherlock Holmes' }, en: { word: 'Detective', clue: 'Sherlock Holmes' } },
  { id: 'lawyer', category: 'professions', es: { word: 'Abogado', clue: 'Better Call Saul' }, en: { word: 'Lawyer', clue: 'Better Call Saul' } },
  { id: 'pilot', category: 'professions', es: { word: 'Piloto', clue: 'Top Gun' }, en: { word: 'Pilot', clue: 'Top Gun' } },
  { id: 'scientist', category: 'professions', es: { word: 'Científico', clue: 'Breaking Bad' }, en: { word: 'Scientist', clue: 'Breaking Bad' } },

  // Naturaleza / Nature
  { id: 'rainbow', category: 'nature', es: { word: 'Arcoíris', clue: 'My Little Pony' }, en: { word: 'Rainbow', clue: 'My Little Pony' } },
  { id: 'rain', category: 'nature', es: { word: 'Lluvia', clue: 'Cantando Bajo la Lluvia' }, en: { word: 'Rain', clue: "Singin' in the Rain" } },
  { id: 'snow', category: 'nature', es: { word: 'Nieve', clue: 'Juego de Tronos' }, en: { word: 'Snow', clue: 'Game of Thrones' } },
  { id: 'volcano', category: 'nature', es: { word: 'Volcán', clue: 'Moana' }, en: { word: 'Volcano', clue: 'Moana' } },
  { id: 'ocean', category: 'nature', es: { word: 'Océano', clue: 'Aquaman' }, en: { word: 'Ocean', clue: 'Aquaman' } },
  { id: 'star', category: 'nature', es: { word: 'Estrella', clue: 'Patricio Estrella' }, en: { word: 'Star', clue: 'Patrick Star' } },
  { id: 'river', category: 'nature', es: { word: 'Río', clue: 'Moisés' }, en: { word: 'River', clue: 'Moses' } },
  { id: 'earthquake', category: 'nature', es: { word: 'Terremoto', clue: 'Godzilla' }, en: { word: 'Earthquake', clue: 'Godzilla' } },
  { id: 'moon', category: 'nature', es: { word: 'Luna', clue: 'Sailor Moon' }, en: { word: 'Moon', clue: 'Sailor Moon' } },
  { id: 'sun', category: 'nature', es: { word: 'Sol', clue: 'Ícaro' }, en: { word: 'Sun', clue: 'Icarus' } },
  { id: 'lightning', category: 'nature', es: { word: 'Rayo', clue: 'Zeus' }, en: { word: 'Lightning', clue: 'Zeus' } },

  // Celebraciones / Celebrations
  { id: 'birthday', category: 'celebrations', es: { word: 'Cumpleaños', clue: 'Marilyn Monroe' }, en: { word: 'Birthday', clue: 'Marilyn Monroe' } },
  { id: 'wedding', category: 'celebrations', es: { word: 'Boda', clue: 'El Cadáver de la Novia' }, en: { word: 'Wedding', clue: 'Corpse Bride' } },
  { id: 'christmas', category: 'celebrations', es: { word: 'Navidad', clue: 'Papá Noel' }, en: { word: 'Christmas', clue: 'Santa Claus' } },
  { id: 'carnival', category: 'celebrations', es: { word: 'Carnaval', clue: 'V de Vendetta' }, en: { word: 'Carnival', clue: 'V for Vendetta' } },
  { id: 'graduation', category: 'celebrations', es: { word: 'Graduación', clue: 'High School Musical' }, en: { word: 'Graduation', clue: 'High School Musical' } },
  { id: 'halloween', category: 'celebrations', es: { word: 'Halloween', clue: 'Jack Skellington' }, en: { word: 'Halloween', clue: 'Jack Skellington' } },

  // Hogar / Home
  { id: 'kitchen', category: 'home', es: { word: 'Cocina', clue: 'MasterChef' }, en: { word: 'Kitchen', clue: 'MasterChef' } },
  { id: 'couch', category: 'home', es: { word: 'Sofá', clue: 'Friends' }, en: { word: 'Couch', clue: 'Friends' } },
  { id: 'shower', category: 'home', es: { word: 'Ducha', clue: 'Psicosis' }, en: { word: 'Shower', clue: 'Psycho' } },
  { id: 'fridge', category: 'home', es: { word: 'Nevera', clue: 'Homero Simpson' }, en: { word: 'Fridge', clue: 'Homer Simpson' } },
  { id: 'stairs', category: 'home', es: { word: 'Escalera', clue: 'El Guasón' }, en: { word: 'Stairs', clue: 'Joker' } },
  { id: 'garage', category: 'home', es: { word: 'Garaje', clue: 'Steve Jobs' }, en: { word: 'Garage', clue: 'Steve Jobs' } },
  { id: 'attic', category: 'home', es: { word: 'Ático', clue: 'Anne Frank' }, en: { word: 'Attic', clue: 'Anne Frank' } },

  // Ficción / Fiction
  { id: 'superhero', category: 'fiction', es: { word: 'Superhéroe', clue: 'Superman' }, en: { word: 'Superhero', clue: 'Superman' } },
  { id: 'pirate', category: 'fiction', es: { word: 'Pirata', clue: 'Jack Sparrow' }, en: { word: 'Pirate', clue: 'Jack Sparrow' } },
  { id: 'ghost', category: 'fiction', es: { word: 'Fantasma', clue: 'Casper' }, en: { word: 'Ghost', clue: 'Casper' } },
  { id: 'dragon', category: 'fiction', es: { word: 'Dragón', clue: 'Cómo Entrenar a tu Dragón' }, en: { word: 'Dragon', clue: 'How to Train Your Dragon' } },
  { id: 'witch', category: 'fiction', es: { word: 'Bruja', clue: 'El Mago de Oz' }, en: { word: 'Witch', clue: 'The Wizard of Oz' } },
  { id: 'vampire', category: 'fiction', es: { word: 'Vampiro', clue: 'Drácula' }, en: { word: 'Vampire', clue: 'Dracula' } },
  { id: 'zombie', category: 'fiction', es: { word: 'Zombi', clue: 'The Walking Dead' }, en: { word: 'Zombie', clue: 'The Walking Dead' } },
  { id: 'wizard', category: 'fiction', es: { word: 'Mago', clue: 'Gandalf' }, en: { word: 'Wizard', clue: 'Gandalf' } },
  { id: 'alien', category: 'fiction', es: { word: 'Alienígena', clue: 'E.T.' }, en: { word: 'Alien', clue: 'E.T.' } },
  { id: 'werewolf', category: 'fiction', es: { word: 'Hombre Lobo', clue: 'Crepúsculo' }, en: { word: 'Werewolf', clue: 'Twilight' } },
  { id: 'giant', category: 'fiction', es: { word: 'Gigante', clue: 'Jack y las Habichuelas Mágicas' }, en: { word: 'Giant', clue: 'Jack and the Beanstalk' } },
  { id: 'mermaid', category: 'fiction', es: { word: 'Sirena', clue: 'Ariel' }, en: { word: 'Mermaid', clue: 'Ariel' } },

  // Superpoderes / Superpowers
  { id: 'teleportation', category: 'powers', es: { word: 'Teletransportación', clue: 'Goku' }, en: { word: 'Teleportation', clue: 'Goku' } },
  { id: 'invisibility', category: 'powers', es: { word: 'Invisibilidad', clue: 'Harry Potter' }, en: { word: 'Invisibility', clue: 'Harry Potter' } },
  { id: 'flight', category: 'powers', es: { word: 'Volar', clue: 'Superman' }, en: { word: 'Flying', clue: 'Superman' } },
  { id: 'super_strength', category: 'powers', es: { word: 'Superfuerza', clue: 'Hulk' }, en: { word: 'Super Strength', clue: 'Hulk' } },
  { id: 'super_speed', category: 'powers', es: { word: 'Supervelocidad', clue: 'Flash' }, en: { word: 'Super Speed', clue: 'The Flash' } },
  { id: 'immortality', category: 'powers', es: { word: 'Inmortalidad', clue: 'Wolverine' }, en: { word: 'Immortality', clue: 'Wolverine' } },
  { id: 'healing', category: 'powers', es: { word: 'Curación', clue: 'Ave Fénix' }, en: { word: 'Healing', clue: 'Phoenix' } },
  { id: 'mind_control', category: 'powers', es: { word: 'Control Mental', clue: 'Profesor X' }, en: { word: 'Mind Control', clue: 'Professor X' } },
  { id: 'heat_vision', category: 'powers', es: { word: 'Visión de Calor', clue: 'Cíclope' }, en: { word: 'Heat Vision', clue: 'Cyclops' } },
  { id: 'ice_powers', category: 'powers', es: { word: 'Congelar', clue: 'Mr. Freeze' }, en: { word: 'Freezing', clue: 'Mr. Freeze' } },
  { id: 'shapeshifting', category: 'powers', es: { word: 'Cambiar de Forma', clue: 'Mystique' }, en: { word: 'Shapeshifting', clue: 'Mystique' } },
  { id: 'time_travel', category: 'powers', es: { word: 'Viajar en el Tiempo', clue: 'Marty McFly' }, en: { word: 'Time Travel', clue: 'Marty McFly' } },
  { id: 'telekinesis', category: 'powers', es: { word: 'Telequinesis', clue: 'Eleven (Stranger Things)' }, en: { word: 'Telekinesis', clue: 'Eleven (Stranger Things)' } },
  { id: 'x_ray_vision', category: 'powers', es: { word: 'Visión de Rayos X', clue: 'Superman' }, en: { word: 'X-Ray Vision', clue: 'Superman' } },
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
    'celebrations', 'home', 'fiction', 'powers',
  ];
  return keys.sort((a, b) => order.indexOf(a) - order.indexOf(b));
};
