import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function SocialsSection() {
  return (
    <section className="socials-section">
      <div className="socials-container">
        <p className="section-kicker">Stay Connected</p>

        <h2>Find us on socials</h2>

        <p className="socials-description">
          Follow us for daily specials, fresh bakes, and a glimpse into our cafe
          life.
        </p>

        <div className="socials-links">
          <a
            href="https://www.instagram.com/destinationcafenz/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <FaInstagram size={18} />
            <span>Instagram</span>
          </a>

          <a
            href="https://www.facebook.com/people/Destination-Cafe-Greenlane/61587087418210"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <FaFacebook size={18} />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
}
