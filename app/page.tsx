"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const products = [
    {
      name: "Whey Protein",
      img: "/whey.jpg",
      price: 25000,
      objetivo: ["masa", "definicion"],
      description: {
        sirve: "Ayuda a aumentar masa muscular y mejorar la recuperación.",
        efectos: "Proteína de rápida absorción ideal post entrenamiento.",
        recomendado: "Personas que entrenan fuerza o hipertrofia.",
      },
    },
    {
      name: "Creatina",
      img: "/creatina.jpg",
      price: 18000,
      objetivo: ["masa", "energia"],
      description: {
        sirve: "Mejora la fuerza y el rendimiento físico.",
        efectos: "Aumenta la energía en ejercicios explosivos.",
        recomendado: "Deportistas de alta intensidad.",
      },
    },
    {
      name: "Pre Entreno",
      img: "/preentreno.jpg",
      price: 22000,
      objetivo: ["energia"],
      description: {
        sirve: "Aumenta energía y concentración antes de entrenar.",
        efectos: "Mayor enfoque y resistencia.",
        recomendado: "Entrenamientos intensos.",
      },
    },
    {
      name: "BCAA",
      img: "/bcaa.jpg",
      price: 15000,
      objetivo: ["definicion", "salud"],
      description: {
        sirve: "Reduce fatiga muscular.",
        efectos: "Ayuda a preservar masa muscular.",
        recomendado: "Entrenamientos largos.",
      },
    },
  ];

  const [cart, setCart] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [infoOpen, setInfoOpen] = useState<number | null>(null);
  const [goalOpen, setGoalOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const filteredProducts = selectedGoal
    ? products.filter((p) => p.objetivo.includes(selectedGoal))
    : products;

  if (checkout) {
    return (
      <main style={{ minHeight: "100vh", color: "white", padding: "40px 20px" }}>
        <h1 style={{ textAlign: "center" }}>Cómo pagar</h1>
        <p style={{ textAlign: "center" }}>Total: ${total}</p>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", color: "white", padding: "40px 20px" }}>
      
      {/* CARRITO */}
      <div style={{ position: "fixed", top: 20, right: 20 }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "#111",
            color: "white",
            border: "1px solid #333",
            padding: "10px 15px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          🛒 ({cart.length})
        </button>

        {open && (
          <div
            style={{
              background: "#111",
              border: "1px solid #333",
              padding: "15px",
              borderRadius: "10px",
              marginTop: "10px",
              width: "260px",
            }}
          >
            {cart.length === 0 && <p>Carrito vacío</p>}

            {cart.map((item, i) => (
              <p key={i}>
                {item.name} – ${item.price}
              </p>
            ))}

            <hr style={{ borderColor: "#333" }} />
            <p><strong>Total:</strong> ${total}</p>

            {cart.length > 0 && (
              <button
                onClick={() => setCheckout(true)}
                style={{
                  marginTop: "10px",
                  width: "100%",
                  padding: "10px",
                  background: "#25D366",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Finalizar compra
              </button>
            )}
          </div>
        )}
      </div>

      {/* LOGO */}
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>

      <h1 style={{ textAlign: "center", fontSize: "42px" }}>
        Wolf Supplements
      </h1>

      {/* OBJETIVO */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => setGoalOpen(!goalOpen)}
          style={{
            padding: "10px 20px",
            background: "#00ff88",
 color: "#000",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ¿Cuál Es Tu Objetivo?
        </button>

        {goalOpen && (
          <div style={{ marginTop: "15px" }}>
            {[
              { label: "Aumento De Masa Muscular", value: "masa" },
              { label: "Definición Muscular", value: "definicion" },
              { label: "Energía Para El Entrenamiento", value: "energia" },
              { label: "Salud y Bienestar", value: "salud" },
            ].map((option, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedGoal(option.value);
                  setGoalOpen(false);
                }}
                style={{
                  display: "block",
                  margin: "10px auto",
                  padding: "8px 15px",
                  background: "#111",
                  color: "white",
                  border: "1px solid #333",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                {option.label}
              </button>
            ))}

            <button
              onClick={() => setSelectedGoal(null)}
              style={{
                marginTop: "10px",
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Mostrar todos
            </button>
          </div>
        )}
      </div>

      {/* PRODUCTOS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          margin: "40px auto",
        }}
      >
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.06)",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <Image
              src={product.img}
              alt={product.name}
              width={220}
              height={220}
            />

            <h3>{product.name}</h3>

            <p style={{ color: "#00ff88", fontWeight: "bold" }}>
              ${product.price}
            </p>

            <button
              onClick={() =>
                setInfoOpen(infoOpen === index ? null : index)
              }
              style={{
                marginTop: "10px",
                padding: "8px",
                width: "100%",
                background: "#444",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Acerca de
            </button>

            {infoOpen === index && (
              <div
                style={{
                  background: "#111",
                  marginTop: "10px",
                  padding: "10px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  textAlign: "left",
                }}
              >
                <p><strong>¿Para qué sirve?</strong><br />{product.description.sirve}</p>
                <p><strong>Efectos:</strong><br />{product.description.efectos}</p>
                <p><strong>Recomendado para:</strong><br />{product.description.recomendado}</p>
              </div>
            )}

            <button
              onClick={() => addToCart(product)}
              style={{
                marginTop: "10px",
                padding: "10px",
                background: "#25D366",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      {/* WHATSAPP FLOTANTE CON MENSAJE */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "white",
            color: "black",
            padding: "8px 12px",
            borderRadius: "10px",
            fontSize: "13px",
            marginBottom: "5px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          Cualquier consulta clickeá aquí
          <div style={{ fontSize: "16px" }}>⬇️</div>
        </div>

        <a
          href="https://wa.me/5493435720031?text=Hola!%20Quiero%20consultar%20sobre%20un%20suplemento"
          target="_blank"
          style={{
            backgroundColor: "#25D366",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            color: "white",
            textDecoration: "none",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          💬
        </a>
      </div>
    </main>
  );
}