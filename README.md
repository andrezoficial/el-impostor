# 🕵️ El Impostor

Juego de fiesta para jugar en un solo dispositivo (pasando el celular). Todos los jugadores reciben una palabra secreta... excepto el impostor, que solo recibe una pista. Cada quien da una descripción y, al final, todos votan para descubrir quién es el impostor.

Creado por **Andrés Suárez Moreno** — Instagram: [@andres.suarez.moreno](https://instagram.com/andres.suarez.moreno)

## Cómo se juega

1. **Setup**: se ingresan los nombres de 3 a 12 jugadores.
2. **Roles**: el dispositivo pasa de jugador en jugador. Cada uno confirma que lo tiene ("Pasa el dispositivo a...") antes de ver su rol, así nadie ve información ajena. Los tripulantes ven la palabra; el impostor solo ve una pista.
3. **Descripciones**: cada jugador escribe una palabra o frase corta que describa (o disimule, si es el impostor) el objeto secreto.
4. **Votación**: el dispositivo vuelve a pasar de jugador en jugador para votar en privado por quien crean que es el impostor.
5. **Resultados**: se revela quién era el impostor, cuál era la palabra y quién ganó. Se puede jugar otra ronda con los mismos jugadores o empezar una partida nueva.

## Novedades de esta versión

- Pantalla de "pasar el dispositivo" antes de cada rol y cada voto, para más privacidad entre jugadores.
- Botón para jugar otra ronda con los mismos jugadores, sin tener que volver a escribir los nombres.
- La palabra y el impostor no se repiten dos veces seguidas.
- Validación de nombres de jugadores duplicados.
- Banco de palabras ampliado con más categorías.
- Crédito del autor visible en la app.

## Scripts disponibles

En la carpeta del proyecto puedes ejecutar:

### `npm install`

Instala las dependencias del proyecto.

### `npm start`

Corre la app en modo desarrollo. Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

### `npm run build`

Genera la versión de producción en la carpeta `build`, lista para desplegar.

---

Proyecto construido con [Create React App](https://github.com/facebook/create-react-app), [Framer Motion](https://www.framer.com/motion/) y [React Icons](https://react-icons.github.io/react-icons/).
