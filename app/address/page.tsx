export default function AddressPage() {
  return (
    <main className="page-content">
      <section className="content-section">
        <h1>Visit Us</h1>
        <p>We’d love to see you at our cafe.</p>

        <div className="address-block">
          <h2>Address</h2>
          <p>
            Destination Cafe
            <br />
            1 Marewa Road
            <br />
            Greenlane, Auckland 1051
            <br />
            New Zealand
          </p>
        </div>

        <div className="address-block">
          <h2>Phone</h2>
          <p>+64 0228505733</p>
        </div>

        <div className="address-block">
          <h2>Opening Hours</h2>

          <ul className="hours-list">
            <li>
              <span>Monday</span> <span>6:30 AM – 3:00 PM</span>
            </li>
            <li>
              <span>Tuesday</span> <span>6:30 AM – 3:00 PM</span>
            </li>
            <li>
              <span>Wednesday</span> <span>6:30 AM – 3:00 PM</span>
            </li>
            <li>
              <span>Thursday</span> <span>6:30 AM – 3:00 PM</span>
            </li>
            <li>
              <span>Friday</span> <span>6:30 AM – 3:00 PM</span>
            </li>
            <li>
              <span>Saturday</span> <span> Closed</span>
            </li>
            <li>
              <span>Sunday</span> <span>Closed</span>
            </li>
          </ul>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps?q=1%20Marewa%20Road%20Greenlane%20Auckland&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
