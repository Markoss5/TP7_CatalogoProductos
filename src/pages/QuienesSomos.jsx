function QuienesSomos() {
  return (
    <div className="apple-aboutpage">
      <section className="apple-about__hero">
        <div className="apple-about__hero-center">
          <h1 className="apple-about__title">Nuestra Historia</h1>
          <p className="apple-about__subtitle">
            Inspirados por la innovación y el diseño.
          </p>
        </div>
      </section>

      <section className="apple-about__content">
        <div className="apple-about__imgbox">
          <img
            src="https://www.apple.com/v/home/ab/images/promos/iphone-15-pro/promo_iphone15pro__e48p7n5x6mky_large.jpg"
            alt="Equipo trabajando"
          />
        </div>
        <div className="apple-about__text">
          <h2>Nuestra misión</h2>
          <p>
            En <b>Apple Inspired Store</b>, creemos que la tecnología debe ser sencilla, elegante y poderosa. 
            Desde nuestros inicios, nos propusimos acercar las mejores experiencias tecnológicas a las personas, ofreciendo productos y servicios que marcan la diferencia.
          </p>
          <h2>Nuestros valores</h2>
          <ul>
            <li>Innovación constante</li>
            <li>Diseño centrado en el usuario</li>
            <li>Compromiso con la calidad</li>
            <li>Responsabilidad social y ambiental</li>
          </ul>
          <p>
            Nuestro equipo está formado por soñadores, creadores y especialistas que buscan superar los límites en todo momento.
          </p>
        </div>
      </section>

      <section className="apple-about__footercta">
        <h2>¿Quieres formar parte de nuestra historia?</h2>
        <a href="/contacto" className="apple-cta">Contáctanos</a>
      </section>
    </div>
  );
}

export default QuienesSomos;