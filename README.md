# 🕵️ El Impostor

Juego de fiesta para jugar en un solo dispositivo (pasando el celular). Todos los jugadores reciben una palabra secreta... excepto el impostor, que solo recibe una pista difícil de descifrar. Cada quien dice algo relacionado en voz alta y, al final, todos votan para eliminar a quien crean que es el impostor.

Creado por **Andrés Suárez Moreno** — Instagram: [@andres.suarez.moreno](https://instagram.com/andres.suarez.moreno)

## Cómo se juega

1. **Setup**: se ingresan los nombres de 3 a 12 jugadores y se elige una categoría de palabras (o "Todas").
2. **Roles**: el dispositivo pasa de jugador en jugador. Cada uno confirma que lo tiene ("Pasa el dispositivo a...") antes de ver su rol. Los tripulantes ven la palabra; el impostor solo ve una pista difícil e indirecta.
3. **Ronda de pistas**: por turnos, cada jugador dice en voz alta (no se escribe en la app) una palabra o frase relacionada con la palabra secreta, sin decirla directamente.
4. **Votación para eliminar**: el dispositivo vuelve a pasar de jugador en jugador. Cada uno vota en privado por quién quiere eliminar.
5. **Resultados**: se revela a quién eliminó el grupo, si era el impostor, cuál era la palabra y quién ganó. Se puede jugar otra ronda con los mismos jugadores y categoría, o empezar una partida nueva.

## Características

- Pantalla de "pasar el dispositivo" antes de cada rol y cada voto, para más privacidad entre jugadores.
- Selector de categoría de palabras (Comida, Animales, Lugares, Deportes, etc. o todas mezcladas).
- Pistas del impostor deliberadamente indirectas (dichos, datos curiosos, asociaciones) en lugar de definiciones fáciles.
- Votación pensada como "eliminar" a un sospechoso, con la revelación correspondiente en resultados.
- Botón para jugar otra ronda con los mismos jugadores y categoría, sin reescribir nombres.
- La palabra y el impostor no se repiten dos veces seguidas.
- Validación de nombres de jugadores duplicados.
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
