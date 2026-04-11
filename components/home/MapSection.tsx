export default function MapSection() {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Destination+Cafe+1+Marewa+Road+Greenlane+Auckland+1051';

  return (
    <section className="home-map-section">
      <div className="home-map-shell">
        <div className="home-map-copy">
          <p className="section-kicker">Visit Us</p>
          <h2>Find Destination Cafe</h2>
          <p className="home-map-description">
            Stop by for coffee, brunch, and a warm neighbourhood atmosphere in
            Greenlane.
          </p>

          <div className="home-map-details">
            <p>1 Marewa Road, Greenlane, Auckland 1051</p>
          </div>

          <div className="home-map-cta">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-button"
            >
              Take Me There
            </a>
          </div>
        </div>

        <div className="home-map-frame">
          <iframe
            src="https://www.google.com/maps?q=1%20Marewa%20Road%20Greenlane%20Auckland%201051&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Destination Cafe map"
          />
        </div>
      </div>
    </section>
  );
}
