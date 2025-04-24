import "../styles/ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-container">
      <h1>Contacto</h1>
      <a
        href="https://wa.me/961642598"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
      >
        <i className="fab fa-whatsapp"></i> {/* Icono de WhatsApp de Font Awesome */}
      </a>
    </div>
  );
}

export default ContactPage;
