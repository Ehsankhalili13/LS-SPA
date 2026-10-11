import { useState } from "react";
import "./LearningPath.css";

const LearningPath = ({ lang = "fa" }) => {
  const content = {
    fa: {
      title: "مسیر یادگیری شما",
      subtitle: "قدم‌به‌قدم تا تسلط بیشتر بر زبان",

      levels: [
        {
          id: "A1",
          title: "مقدماتی",
          description:
            "در این سطح با مفاهیم پایه زبان، عبارات روزمره، واژگان ابتدایی و ساختارهای ساده آشنا می‌شوید.",
          skills: ["مکالمات ساده", "واژگان پایه", "گرامر مقدماتی"],
        },
        {
          id: "A2",
          title: "پیش‌مقدماتی",
          description:
            "می‌توانید درباره موضوعات آشنا صحبت کنید و در موقعیت‌های ساده روزمره ارتباط برقرار کنید.",
          skills: ["مکالمه روزمره", "درک متون ساده", "گرامر کاربردی"],
        },
        {
          id: "B1",
          title: "متوسط",
          description:
            "توانایی برقراری ارتباط مستقل‌تر و صحبت درباره موضوعات مختلف را به دست می‌آورید.",
          skills: ["مکالمه مستقل", "نوشتار", "شنیدار"],
        },
        {
          id: "B2",
          title: "فوق متوسط",
          description:
            "می‌توانید با اعتمادبه‌نفس بیشتری درباره موضوعات پیچیده صحبت کنید و متون دشوارتر را درک کنید.",
          skills: ["مکالمه روان", "بحث و گفتگو", "درک متون تخصصی"],
        },
        {
          id: "C1",
          title: "پیشرفته",
          description:
            "به سطح بالایی از تسلط می‌رسید و می‌توانید زبان را در محیط‌های حرفه‌ای و دانشگاهی استفاده کنید.",
          skills: ["تسلط بالا", "مکالمه حرفه‌ای", "نوشتار پیشرفته"],
        },
      ],
    },

    en: {
      title: "Your Learning Path",
      subtitle: "Step by step toward greater language proficiency",

      levels: [
        {
          id: "A1",
          title: "Beginner",
          description:
            "Learn basic language concepts, everyday expressions, essential vocabulary and simple structures.",
          skills: ["Basic conversations", "Basic vocabulary", "Beginner grammar"],
        },
        {
          id: "A2",
          title: "Elementary",
          description:
            "Talk about familiar topics and communicate in simple everyday situations.",
          skills: ["Daily conversation", "Simple texts", "Practical grammar"],
        },
        {
          id: "B1",
          title: "Intermediate",
          description:
            "Develop the ability to communicate independently and discuss a wider range of topics.",
          skills: ["Independent speaking", "Writing", "Listening"],
        },
        {
          id: "B2",
          title: "Upper Intermediate",
          description:
            "Communicate more confidently about complex topics and understand more difficult texts.",
          skills: ["Fluent conversation", "Discussion", "Advanced reading"],
        },
        {
          id: "C1",
          title: "Advanced",
          description:
            "Reach a high level of proficiency and use the language in professional and academic environments.",
          skills: ["High proficiency", "Professional speaking", "Advanced writing"],
        },
      ],
    },
  };

  const t = content[lang];

  const [activeLevel, setActiveLevel] = useState(0);

  const selectedLevel = t.levels[activeLevel];

  return (
    <section className="section learning-path" id="learning-path">
      <div className="container">
        <div className="learning-path__header">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="learning-path__wrapper glass-card">
          <div className="learning-path__levels">
            {t.levels.map((level, index) => (
              <button
                type="button"
                key={level.id}
                className={`learning-level ${
                  activeLevel === index ? "active" : ""
                }`}
                onClick={() => setActiveLevel(index)}
              >
                <span className="learning-level__circle">
                  {level.id}
                </span>

                <span className="learning-level__text">
                  {level.title}
                </span>
              </button>
            ))}
          </div>

          <div className="learning-path__line">
            <span
              className="learning-path__progress"
              style={{
                width: `${(activeLevel / (t.levels.length - 1)) * 100}%`,
              }}
            />
          </div>

          <div className="learning-path__details">
            <div className="learning-path__badge">
              {selectedLevel.id}
            </div>

            <div className="learning-path__content">
              <span className="learning-path__level">
                {selectedLevel.title}
              </span>

              <h3>{selectedLevel.id}</h3>

              <p>{selectedLevel.description}</p>

              <div className="learning-path__skills">
                {selectedLevel.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;