import videoLanding from '../assets/Videos/VideoLanding.mp4';

function Home() {
  return (
    <div className="apple-home">
      <section className="apple-hero hero-landing">
        <div className="hero-overlay" />
        <video
          className="hero-video"
          src={videoLanding}
          autoPlay
          loop
          muted
          playsInline
        >
          Tu navegador no soporta el video.
        </video>
        <div className="hero-content">
          <h1 className="hero-title">¡Bienvenido a MarcoShops!</h1>
          <p className="hero-desc">
            Descubrí la experiencia definitiva en compras online.<br />
            Productos seleccionados, empaque profesional y entrega garantizada.<br />
            <b>Optimizá tu negocio o tu hogar con la mejor atención personalizada y el respaldo de un equipo apasionado por la excelencia.</b>
          </p>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="apple-featured" id="destacados">
        <div className="apple-featured__grid">
          <div className="apple-feature-card">
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Mochila" />
            <h2>Mochila de Aventura</h2>
            <p>Ideal para viajes, resistente y cómoda para todo tipo de actividades.</p>
            <a className="apple-link" href="#">Saber más</a>
          </div>
          <div className="apple-feature-card">
            <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="Reloj Moderno" />
            <h2>Reloj Moderno</h2>
            <p>Elegante, preciso y perfecto para cualquier ocasión.</p>
            <a className="apple-link" href="#">Saber más</a>
          </div>
        </div>
      </section>

      <section className="apple-calltoaction">
        <h2>¿Listo para descubrir más?</h2>
        <a className="apple-cta apple-cta--dark" href="/productos">Ir al catálogo</a>
      </section>
    </div>
  );
}

export default Home;