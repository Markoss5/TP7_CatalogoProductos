function Footer() {
    return (
      <footer className="footer">
        <div className="footer__content">
          © {new Date().getFullYear()} MiCatálogo. Todos los derechos reservados.
        </div>
      </footer>
    );
  }
  
  export default Footer;