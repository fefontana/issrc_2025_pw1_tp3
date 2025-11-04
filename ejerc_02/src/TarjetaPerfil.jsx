// src/TarjetaPerfil.jsx
function TarjetaPerfil({ nombre, edad, urlImagen }) {
  return (
    <div
      style={{
        border: "2px solid #ccc",
        borderRadius: "10px",
        padding: "16px",
        margin: "12px",
        width: "250px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={urlImagen}
        alt={`Foto de ${nombre}`}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />
      <h2>{nombre}</h2>
      <p>Edad: {edad} años</p>
    </div>
  );
}

export default TarjetaPerfil;
