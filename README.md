#  Buscaminas en JavaScript

Este es un proyecto simple del clásico juego **Buscaminas**, implementado usando **HTML**, **CSS** y **JavaScript puro**.

---

##  ¿Cómo funciona?

- El tablero es una cuadrícula de **10x10** celdas.
- Se colocan **20 minas** al azar.
- Al hacer clic en una celda:
  - Si es una mina 💣, pierdes el juego.
  - Si no, se muestra el número de minas alrededor o se revela un área vacía.
- Las celdas ya reveladas no se pueden volver a hacer clic.

---

##  Estructura del Proyecto

```
buscaminas/
├── index.html      # Estructura del juego
├── styles.css      # Estilo visual del tablero
└── script.js       # Lógica del juego (colocar minas, calcular vecinos, revelar)
```

---

##  Descripción de Archivos

### `index.html`

- Contenedor `<div id="game">` para el tablero.
- Carga `styles.css` y `script.js`.

### `styles.css`

- Crea una cuadrícula visible con celdas de 40x40px.
- Estilo de fondo, tipografía y efectos de hover/clic.

### `script.js`

- Coloca minas aleatoriamente.
- Calcula el número de minas vecinas.
- Maneja clics del usuario y expansión automática de celdas vacías.
- Lógica de fin de juego.

---

## Conceptos Usados

- DOM (Document Object Model)
- Eventos con `addEventListener`
- Manipulación de estilos con `style`
- Generación dinámica de celdas HTML
- Recursión para expandir celdas vacías

---

##  Cómo usar

1. Abre `index.html` en tu navegador.
2. Empieza a jugar haciendo clic en las celdas.

---

##  Mejoras Sugeridas

- Añadir un sistema de banderas (clic derecho).
- Cronómetro y contador de minas restantes.
- Niveles de dificultad.
- Mejorar interfaz gráfica.

---

##  Autor

Proyecto educativo básico de JavaScript para practicar manipulación de DOM y lógica de juegos.
