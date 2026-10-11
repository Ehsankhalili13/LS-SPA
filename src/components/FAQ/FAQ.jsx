import { useState } from "react";
import "./FAQ.css";

const FAQ = ({ lang = "fa" }) => {
  const content = {
    fa: {
      title: "سؤالات متداول",
      subtitle: "پاسخ سؤالاتی که ممکن است قبل از شروع داشته باشید.",

      questions: [
        {
          question: "چطور می‌توانم در دوره‌ها ثبت‌نام کنم؟",
          answer:
            "برای ثبت‌نام کافی است با آموزشگاه تماس بگیرید. کارشناسان ما شما را درباره دوره مناسب، زمان برگزاری و مراحل ثبت‌نام راهنمایی می‌کنند.",
        },
        {
          question: "آیا قبل از ثبت‌نام تعیین سطح انجام می‌شود؟",
          answer:
            "بله. می‌توانید از بخش تعیین سطح سایت در یک آزمون کوتاه شرکت کنید تا سطح تقریبی شما مشخص شود. در صورت نیاز، آموزشگاه می‌تواند تعیین سطح دقیق‌تری نیز انجام دهد.",
        },
        {
          question: "کلاس‌ها برای چه گروه‌های سنی برگزار می‌شوند؟",
          answer:
            "دوره‌های آموزشی برای کودکان، نوجوانان و بزرگسالان طراحی شده‌اند و محتوای آموزشی هر گروه متناسب با سن و سطح زبان آن‌هاست.",
        },
        {
          question: "آیا کلاس‌ها به‌صورت آنلاین برگزار می‌شوند؟",
          answer:
            "بسته به دوره و برنامه آموزشگاه، امکان برگزاری کلاس‌ها به‌صورت حضوری یا آنلاین وجود دارد. برای اطلاع از شرایط دوره موردنظر با آموزشگاه تماس بگیرید.",
        },
        {
          question: "مدت زمان هر دوره چقدر است؟",
          answer:
            "مدت دوره‌ها با توجه به نوع دوره، سطح زبان و برنامه آموزشی متفاوت است. جزئیات هر دوره را می‌توانید در بخش دوره‌های آموزشی مشاهده کنید.",
        },
        {
          question: "آیا دوره آمادگی آزمون IELTS هم دارید؟",
          answer:
            "بله. دوره‌های آمادگی آزمون برای زبان‌آموزانی که قصد شرکت در آزمون‌های بین‌المللی را دارند ارائه می‌شود.",
        },
      ],
    },

    en: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to common questions you may have before getting started.",

      questions: [
        {
          question: "How can I register for a course?",
          answer:
            "Simply contact the school. Our team will help you choose the right course and guide you through the registration process.",
        },
        {
          question: "Do I need to take a placement test?",
          answer:
            "Yes. You can take the short placement test on this website to get an estimated level. The school can also provide a more detailed assessment if needed.",
        },
        {
          question: "What age groups do you teach?",
          answer:
            "Our courses are designed for children, teenagers and adults, with content adapted to each group's age and language level.",
        },
        {
          question: "Are online classes available?",
          answer:
            "Depending on the course and schedule, classes may be available online or in person. Contact the school for current availability.",
        },
        {
          question: "How long does each course take?",
          answer:
            "Course duration depends on the course type, language level and learning plan. You can find more details in the courses section.",
        },
        {
          question: "Do you offer IELTS preparation?",
          answer:
            "Yes. Exam preparation courses are available for students who are planning to take international language exams.",
        },
      ],
    },
  };

  const t = content[lang];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="faq__header">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="faq__list">
          {t.questions.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                className={`faq-item glass-card ${
                  isOpen ? "active" : ""
                }`}
                key={item.question}
              >
                <button
                  type="button"
                  className="faq-item__question"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                >
                  <span>
                    <small>
                      {String(index + 1).padStart(2, "0")}
                    </small>

                    {item.question}
                  </span>

                  <span className="faq-item__icon">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`faq-item__answer ${
                    isOpen ? "open" : ""
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;