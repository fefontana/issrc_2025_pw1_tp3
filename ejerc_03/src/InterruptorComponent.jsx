import { useState } from "react";

function Interruptor() {
  // Estado inicial: la luz está apagada
  const [estaEncendido, setEstaEncendido] = useState(false);

  // Función para alternar el estado
  const alternarLuz = () => {
    setEstaEncendido(!estaEncendido);
  };

  // Estilo dinámico según el estado
  const estiloLuz = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    backgroundColor: estaEncendido ? "yellow" : "gray",
    margin: "20px auto",
    boxShadow: estaEncendido ? "0 0 30px yellow" : "none",
    transition: "0.3s"
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={estiloLuz}></div>
      <button onClick={alternarLuz}>
        {estaEncendido ? "Apagar" : "Encender"}
      </button>
    </div>
  );
}

export default Interruptor;
