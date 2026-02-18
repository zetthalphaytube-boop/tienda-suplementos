"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const products = [
    { name: "Whey Protein", img: "/whey.jpg", price: 25000 },
    { name: "Creatina", img: "/creatina.jpg", price: 18000 },
    { name: "Pre Entreno", img: "/preentreno.jpg", price: 22000 },
    { name: "BCAA", img: "/bcaa.jpg", price: 15000 },
  ];

  const [cart, setCart] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  // ---------------- CHECKOUT SCREEN ----------------
  if (checkout) {
    return (
      <main style={{ minHeight: "100vh", color: "white", padding: "40px 20px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Cómo pagar
        </h1>

        <div
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            background: "rgba(255,255,255,0.05)",
            padding: "30px",
            borderRadius: "15px",
          }}
        >
          <p><strong>Total a pagar:</strong> ${total}</p>

          <hr style={{ margin: "20px 0", borderColor: "#333" }} />

          <h3>Transferencia bancaria</h3>
          <p>Alias: wolf.supplements</p>
          <p>CBU: 0000003100000000000000</p>

          <hr style={{ margin: "20px 0", borderColor: "#333" }} />

          <h3>Enviar comprobante</h3>
          <a
            href="https://wa.me/5493435720031"
            target="_blank"
            style={{
              display: "block",
              marginTop: "10px",
              textAlign: "center",
              background: "#25D366",
              padding: "10px",
              borderRadius: "8px",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Enviar comprobante por WhatsApp
          </a>

          <button
            onClick={() => setCheckout(false)}
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "10px",
              background: "#111",
              color: "white",
              border: "1px solid #333",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Volver a la tienda
          </button>
        </div>
      </main>
    );
  }

  // ---------------- STORE ----------------
  return (
    <main style={{ minHeight: "100vh", color: "white", padding: "40px 20px" }}>
      {/* Carrito */}
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

      {/* Logo */}
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>

      <h1 style={{ textAlign: "center", fontSize: "42px", marginBottom: "50px" }}>
        Wolf Supplements
      </h1>

      {/* Productos */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {products.map((product, index) => (
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

            <h3 style={{ marginTop: "15px" }}>{product.name}</h3>

            <p style={{ color: "#00ff88", fontWeight: "bold" }}>
              ${product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
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
    </main>
  );
}
