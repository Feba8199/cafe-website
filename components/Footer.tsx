export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copy">
        <span className="copyright">&copy;</span>
        {new Date().getFullYear()} Destination Cafe
      </p>

      <p className="footer-signature">
        Designed & Developed by <a rel="noopener noreferrer">Feba Johny</a>
      </p>
    </footer>
  );
}
