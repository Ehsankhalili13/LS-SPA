import "./WhyUs.css";

const WhyUs = ({ lang = "fa" }) => {
  const content = {
    fa: {
      title: "چرا آموزشگاه ما؟",
      subtitle: "یادگیری زبان فقط شرکت در کلاس نیست.",
      items: [
        {
          icon: "🎯",
          title: "آموزش هدفمند",
          description:
            "مسیر آموزشی متناسب با سطح و هدف شما طراحی می‌شود تا پیشرفتتان واقعی و قابل اندازه‌گیری باشد.",
        },
        {
          icon: "👨‍🏫",
          title: "اساتید مجرب",
          description:
            "در کنار اساتید متخصص، تجربه‌ای حرفه‌ای و صمیمی از یادگیری زبان خواهید داشت.",
        },
        {
          icon: "💬",
          title: "تمرکز بر مکالمه",
          description:
            "هدف ما فقط حفظ کردن لغات و قواعد نیست؛ بلکه استفاده واقعی از زبان در موقعیت‌های روزمره است.",
        },
        {
          icon: "📚",
          title: "منابع آموزشی",
          description:
            "از منابع آموزشی به‌روز و روش‌های کاربردی برای تقویت مهارت‌های مختلف زبان استفاده می‌کنیم.",
        },
      ],
    },

    en: {
      title: "Why Choose Us?",
      subtitle: "Learning a language is more than just attending classes.",
      items: [
        {
          icon: "🎯",
          title: "Goal-Oriented Learning",
          description:
            "Your learning path is designed around your level and goals for measurable progress.",
        },
        {
          icon: "👨‍🏫",
          title: "Experienced Teachers",
          description:
            "Learn with experienced teachers in a professional and friendly environment.",
        },
        {
          icon: "💬",
          title: "Conversation Focus",
          description:
            "Our goal is not just memorizing vocabulary and grammar, but using the language in real situations.",
        },
        {
          icon: "📚",
          title: "Learning Resources",
          description:
            "We use up-to-date resources and practical methods to improve different language skills.",
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <section className="section why-us" id="why-us">
      <div className="container">
        <div className="why-us__header">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="why-us__grid">
          {t.items.map((item, index) => (
            <article
              className={`why-us__card glass-card ${
                index % 2 === 0 ? "s1" : "s2"
              }`}
              key={item.title}
            >
              <div className="why-us__icon">{item.icon}</div>

              <h3 className="why-us__title">{item.title}</h3>

              <p className="why-us__description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;