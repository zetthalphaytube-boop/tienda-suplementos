export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl font-bold mb-6 text-center">
        TIENDA DE SUPLEMENTOS
      </h1>

      <p className="text-xl mb-10 text-center max-w-2xl text-gray-300">
        Suplementación premium para maximizar tu rendimiento,
        aumentar masa muscular y mejorar tu recuperación.
      </p>

      <a
        href="#productos"
        className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
      >
        Ver Productos
      </a>

      <section id="productos" className="mt-32 text-center">
        <h2 className="text-3xl font-bold mb-6">Nuestros Productos</h2>
        <p className="text-gray-400">
          Próximamente agregaremos nuestros productos destacados.
        </p>
      </section>
    </main>
  );
}
