import { Link } from "react-router-dom";

import DescuentosCarousel from "../components/DescuentosCarousel";

function Home() {
  return (
    <div className="apple-home">
      {/* HERO CON CARROUSEL */}
      <section className="apple-hero" style={{minHeight: "calc(60vh + 100px)", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <DescuentosCarousel />
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="apple-featured" id="destacados">
        <div className="apple-featured__grid">
          <div className="apple-feature-card">
            <img src="https://www.apple.com/v/iphone-15-pro/a/images/overview/hero/hero_iphone15pro__i70z9oz3hj2i_large.jpg" alt="iPhone" />
            <h2>iPhone 15 Pro</h2>
            <p>Titanio. Cámara revolucionaria. Rendimiento Pro.</p>
            <a className="apple-link" href="#">Saber más</a>
          </div>
          <div className="apple-feature-card">
            <img src="https://www.apple.com/v/macbook-air-13-and-15-m2/a/images/overview/hero/macbook_air_hero__fx5x4xw2fu2u_large.jpg" alt="MacBook Air" />
            <h2>MacBook Air</h2>
            <p>Ligero. Potente. Increíblemente portátil.</p>
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