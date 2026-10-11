import './ContactCTA.css'

const ContactCTA = ({ lang = "fa" }) => {
  const isFa = lang === "fa";

  return (
    <section id="contact" className="contact-cta section">
      <div className="container">
        <div className="contact-cta-card glass-card">
          <div className="contact-cta-content">
            <span className="contact-cta-badge">
              {isFa ? "شروع یک مسیر جدید" : "Start a New Journey"}
            </span>

            <h2>
              {isFa
                ? "آماده‌ای یادگیری زبان رو شروع کنی؟"
                : "Ready to Start Learning?"}
            </h2>

            <p>
              {isFa
                ? "دوره مناسب خودت رو پیدا کن و مسیر یادگیری زبان رو با ما شروع کن."
                : "Find the right course and start your language learning journey with us."}
            </p>

            <div className="contact-cta-actions">
              <a href="#courses" className="btn btn-primary">
                {isFa ? "مشاهده دوره‌ها" : "View Courses"}
              </a>

              <a href="#faq" className="btn btn-ghost">
                {isFa ? "سؤالات متداول" : "FAQ"}
              </a>
            </div>
          </div>

          <div className="contact-cta-decoration">
            <span>EN</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;