# issrc_2025_pw1_tp3
TP ReactJS

Ejercicio 1: Componente de Saludo Personalizado

Crear tu primer componente y pasarle un valor simple a través de props.
Crea un componente llamado Saludo.Este componente debe recibir una prop llamada nombre.Dentro del componente, renderiza un <h1> que muestre el mensaje: "¡Hola, [nombre]!".En tu componente principal (App.js), utiliza el componente Saludo varias veces con diferentes nombres. Por ejemplo: <Saludo nombre="Mundo" />, <Saludo nombre="React" />, <Saludo nombre="Ana" />.

Ejercicio 2: Tarjeta de Perfil

Crear un componente más complejo que acepte múltiples props de diferentes tipos.
Crea un componente llamado TarjetaPerfil.Este componente debe aceptar tres props: nombre (string), edad (número) y urlImagen (string).La tarjeta debe mostrar la imagen del perfil, el nombre y la edad.
Usa una etiqueta <img> para la imagen.
Usa un <h2> para el nombre.
Usa un <p> para la edad, con el texto "Edad: [edad] años".
En App.js, crea al menos dos tarjetas de perfil con datos diferentes.

Ejercicio 3: Interruptor de Luz (On/Off)

Usar useState con un valor booleano para cambiar estilos o texto.
Crea un componente llamado Interruptor.Usa useState para crear una variable de estado llamada estaEncendido, inicializada en false.Crea un div que represente la "luz". Su estilo de fondo debe cambiar dependiendo del estado estaEncendido (ej. yellow si es true, gray si es false).Añade un botón que, al hacer clic, invierta el valor de estaEncendido (de true a false y viceversa).El texto del botón también debe cambiar: "Apagar" si está encendido y "Encender" si está apagado.