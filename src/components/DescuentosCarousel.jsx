import { useEffect, useRef, useState } from "react";
const DESCUENTOS = [
  {
    id: 1,
    titulo: "¡10% OFF en iPhone 15 Pro!",
    texto: "Aprovecha el mejor precio del año. Solo por tiempo limitado.",
    img: "https://www.apple.com/v/iphone-15-pro/a/images/overview/hero/hero_iphone15pro__i70z9oz3hj2i_large.jpg"
  },
  {
    id: 2,
    titulo: "Descuento en MacBook Air",
    texto: "15% OFF en MacBook Air M2, potencia y elegancia a tu alcance.",
    img: "https://www.apple.com/v/macbook-air-13-and-15-m2/a/images/overview/hero/macbook_air_hero__fx5x4xw2fu2u_large.jpg"
  },
  {
    id: 3,
    titulo: "Apple Watch Series 9 con 20% OFF",
    texto: "Salud y tecnología en tu muñeca. Promoción exclusiva online.",
    img: "https://www.apple.com/v/apple-watch-series-9/a/images/overview/hero/hero_watch_series_9__x5wo4ptz2giu_large.jpg"
  }
];

function DescuentosCarousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % DESCUENTOS.length);
    }, 4500);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  const goTo = (i) => setIndex(i);

  return (
    <div className="descuentos-carousel">
      {DESCUENTOS.map((item, i) => (
        <div
          className={`descuento-slide${i === index ? " active" : ""}`}
          key={item.id}
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="descuento-slide__overlay" />
          <div className="descuento-slide__content">
            <h3>{item.titulo}</h3>
            <p>{item.texto}</p>
          </div>
        </div>
      ))}
      <div className="descuento-carousel__dots">
        {DESCUENTOS.map((_, i) => (
          <button
            key={i}
            className={`descuento-dot${i === index ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Ir al descuento ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default DescuentosCarousel;