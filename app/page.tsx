export default function Home() {
  const productos = [
    {
      id: 1,
      nombre: "Proteína Whey 1kg",
      precio: "$45.000",
      imagen: "/whey.jpg",
    },
    {
      id: 2,
      nombre: "Creatina Monohidratada",
      precio: "$28.000",
      imagen: "/creatina.jpg",
    },
    {
      id: 3,
      nombre: "Pre Entreno Explosivo",
      precio: "$32.000",
      imagen: "/preentreno.jpg",
    },
    {
      id: 4,
      nombre: "Aminoácidos BCAA",
      precio: "$26.000",
      imagen: "/bcaa.jpg",
    },
  ];

  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "Arial",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #111, #1f1f1f)",
        color: "white",
      }}
    >
      {/* LOGO + NOMBRE */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <img
          src="/logo.png"
          alt="Wolf Supplements Logo"
          style={{ width: "120px", marginBottom: "10px" }}
        />
        <h1 style={{ fontSize: "40px", margin: 0 }}>
          🐺 Wolf Supplements
        </h1>
      </div>

      {/* PRODUCTOS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {productos.map((producto) => (
          <div
            key={producto.id}
            style={{
              borderRadius: "12px",
              padding: "20px",
              backgroundColor: "#222",
              boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
              textAlign: "center",
            }}
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <h2 style={{ marginTop: "15px" }}>{producto.nombre}</h2>

            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {producto.precio}
            </p>

            <button
              style={{
                padding: "10px 20px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#ff3c00",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>

      {/* BOTÓN WHATSAPP */}
      <a
        href="https://wa.me/5493435720031?text=Hola%20quiero%20consultar%20por%20los%20suplementos"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          padding: "16px 20px",
          borderRadius: "50%",
          fontSize: "26px",
          textDecoration: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        }}
      >
        💬
      </a>
    </main>
  );
}
