import { useState } from "react";
import "./Testimonials.css";

const Testimonials = ({ lang = "fa" }) => {
  const content = {
    fa: {
      title: "نظر زبان‌آموزان",
      subtitle: "تجربه کسانی که مسیر یادگیری زبان را با ما شروع کرده‌اند.",

      testimonials: [
        {
          id: 1,
          name: "سارا محمدی",
          course: "دوره مکالمه بزرگسالان",
          text: "محیط آموزشگاه خیلی صمیمی بود و چیزی که بیشتر از همه دوست داشتم، تمرکز کلاس روی مکالمه بود.",
          rating: 5,
          initial: "س",
        },
        {
          id: 2,
          name: "امیر رضایی",
          course: "دوره زبان نوجوانان",
          text: "قبل از شروع کلاس اعتمادبه‌نفس زیادی برای صحبت کردن نداشتم، ولی بعد از چند ماه پیشرفت خیلی خوبی داشتم.",
          rating: 5,
          initial: "ا",
        },
        {
          id: 3,
          name: "نگار احمدی",
          course: "آمادگی IELTS",
          text: "برنامه آموزشی و پیگیری استادها برای من خیلی مفید بود و باعث شد با آمادگی بیشتری سراغ آزمون بروم.",
          rating: 5,
          initial: "ن",
        },
        {
          id: 4,
          name: "محمد کریمی",
          course: "مکالمه کاربردی",
          text: "کلاس‌ها فقط تئوری نبودند و تقریباً در هر جلسه فرصت صحبت کردن و تمرین واقعی داشتیم.",
          rating: 4,
          initial: "م",
        },
      ],
    },

    en: {
      title: "What Our Students Say",
      subtitle:
        "The experience of students who started their language journey with us.",

      testimonials: [
        {
          id: 1,
          name: "Sara Mohammadi",
          course: "Adult Conversation",
          text: "The atmosphere was very friendly, and what I liked most was the strong focus on conversation.",
          rating: 5,
          initial: "S",
        },
        {
          id: 2,
          name: "Amir Rezaei",
          course: "Teenagers English",
          text: "I wasn't very confident speaking English before, but after a few months I made great progress.",
          rating: 5,
          initial: "A",
        },
        {
          id: 3,
          name: "Negar Ahmadi",
          course: "IELTS Preparation",
          text: "The learning plan and teacher support were very helpful and gave me more confidence for the exam.",
          rating: 5,
          initial: "N",
        },
        {
          id: 4,
          name: "Mohammad Karimi",
          course: "Practical Conversation",
          text: "The classes weren't only theoretical. We had plenty of opportunities to speak and practice.",
          rating: 4,
          initial: "M",
        },
      ],
    },
  };

  const t = content[lang];

  const [activeIndex, setActiveIndex] = useState(0);

  const current = t.testimonials[activeIndex];

  const previous = () => {
    setActiveIndex((index) =>
      index === 0 ? t.testimonials.length - 1 : index - 1
    );
  };

  const next = () => {
    setActiveIndex((index) =>
      index === t.testimonials.length - 1 ? 0 : index + 1
    );
  };

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="testimonials__slider">
          <button
            type="button"
            className="testimonials__arrow testimonials__arrow--prev"
            onClick={previous}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <article className="testimonial-card glass-card s1">
            <div className="testimonial-card__top">
              <div className="testimonial-card__user">
                <div className="testimonial-card__avatar">
                  {current.initial}
                </div>

                <div>
                  <h3>{current.name}</h3>
                  <span>{current.course}</span>
                </div>
              </div>

              <div className="testimonial-card__rating">
                {"★".repeat(current.rating)}
                {"☆".repeat(5 - current.rating)}
              </div>
            </div>

            <div className="testimonial-card__quote">
              <span className="testimonial-card__quote-mark">“</span>

              <p>{current.text}</p>
            </div>
          </article>

          <button
            type="button"
            className="testimonials__arrow testimonials__arrow--next"
            onClick={next}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        <div className="testimonials__dots">
          {t.testimonials.map((testimonial, index) => (
            <button
              type="button"
              key={testimonial.id}
              className={`testimonials__dot ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;