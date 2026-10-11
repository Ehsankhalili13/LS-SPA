import { useState } from "react";
import "./Courses.css";

const Courses = ({ lang = "fa" }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const content = {
    fa: {
      title: "دوره‌های آموزشی",
      subtitle: "دوره مناسب خودت را پیدا کن.",

      filters: [
        { id: "all", label: "همه" },
        { id: "children", label: "کودکان" },
        { id: "teenagers", label: "نوجوانان" },
        { id: "adults", label: "بزرگسالان" },
        { id: "exam", label: "آزمون‌ها" },
      ],

      courses: [
        {
          id: 1,
          category: "children",
          title: "زبان انگلیسی کودکان",
          level: "مقدماتی",
          duration: "۳ ماه",
          description:
            "آموزش زبان انگلیسی با روش‌های جذاب و متناسب با سن کودکان.",
        },
        {
          id: 2,
          category: "teenagers",
          title: "زبان انگلیسی نوجوانان",
          level: "A1 تا B2",
          duration: "۳ ماه",
          description:
            "تقویت مکالمه، گرامر، واژگان و مهارت شنیداری برای نوجوانان.",
        },
        {
          id: 3,
          category: "adults",
          title: "زبان انگلیسی بزرگسالان",
          level: "A1 تا C1",
          duration: "۳ ماه",
          description:
            "دوره جامع زبان انگلیسی برای افرادی که می‌خواهند زبان را کاربردی یاد بگیرند.",
        },
        {
          id: 4,
          category: "exam",
          title: "آمادگی آزمون IELTS",
          level: "B1 به بالا",
          duration: "۲ ماه",
          description:
            "آمادگی تخصصی برای بخش‌های مختلف آزمون IELTS با تمرکز بر تکنیک‌های آزمون.",
        },
        {
          id: 5,
          category: "adults",
          title: "مکالمه کاربردی",
          level: "A2 به بالا",
          duration: "۲ ماه",
          description:
            "تمرکز ویژه بر مکالمه و استفاده از زبان در موقعیت‌های واقعی.",
        },
        {
          id: 6,
          category: "exam",
          title: "آمادگی آزمون TOEFL",
          level: "B1 به بالا",
          duration: "۲ ماه",
          description:
            "تقویت مهارت‌های مورد نیاز برای موفقیت در آزمون TOEFL.",
        },
      ],

      level: "سطح",
      duration: "مدت دوره",
      details: "مشاهده جزئیات",
      close: "بستن",
      register: "تماس برای ثبت‌نام",
    },

    en: {
      title: "Courses",
      subtitle: "Find the right course for you.",

      filters: [
        { id: "all", label: "All" },
        { id: "children", label: "Children" },
        { id: "teenagers", label: "Teenagers" },
        { id: "adults", label: "Adults" },
        { id: "exam", label: "Exams" },
      ],

      courses: [
        {
          id: 1,
          category: "children",
          title: "English for Children",
          level: "Beginner",
          duration: "3 Months",
          description:
            "English lessons designed specifically for children using engaging learning methods.",
        },
        {
          id: 2,
          category: "teenagers",
          title: "English for Teenagers",
          level: "A1 to B2",
          duration: "3 Months",
          description:
            "Improve speaking, grammar, vocabulary and listening skills for teenagers.",
        },
        {
          id: 3,
          category: "adults",
          title: "English for Adults",
          level: "A1 to C1",
          duration: "3 Months",
          description:
            "A comprehensive English course focused on practical language skills.",
        },
        {
          id: 4,
          category: "exam",
          title: "IELTS Preparation",
          level: "B1+",
          duration: "2 Months",
          description:
            "Specialized preparation for all sections of the IELTS exam.",
        },
        {
          id: 5,
          category: "adults",
          title: "Practical Conversation",
          level: "A2+",
          duration: "2 Months",
          description:
            "A conversation-focused course for using English in real-life situations.",
        },
        {
          id: 6,
          category: "exam",
          title: "TOEFL Preparation",
          level: "B1+",
          duration: "2 Months",
          description:
            "Improve the skills required to succeed in the TOEFL exam.",
        },
      ],

      level: "Level",
      duration: "Duration",
      details: "View Details",
      close: "Close",
      register: "Contact for Registration",
    },
  };

  const t = content[lang];

  const filteredCourses =
    activeFilter === "all"
      ? t.courses
      : t.courses.filter((course) => course.category === activeFilter);

  return (
    <section className="section courses" id="courses">
      <div className="container">
        <div className="courses__header">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="courses__filters">
          {t.filters.map((filter) => (
            <button
              type="button"
              key={filter.id}
              className={`courses__filter ${
                activeFilter === filter.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="courses__grid">
          {filteredCourses.map((course, index) => (
            <article
              className={`course-card glass-card ${
                index % 2 === 0 ? "s1" : "s2"
              }`}
              key={course.id}
            >
              <div className="course-card__top">
                <span className="course-card__number">
                  {String(course.id).padStart(2, "0")}
                </span>

                <span className="course-card__category">
                  {t.filters.find(
                    (filter) => filter.id === course.category
                  )?.label}
                </span>
              </div>

              <div className="course-card__content">
                <h3 className="course-card__title">{course.title}</h3>

                <p className="course-card__description">
                  {course.description}
                </p>
              </div>

              <div className="course-card__meta">
                <div>
                  <span>{t.level}</span>
                  <strong>{course.level}</strong>
                </div>

                <div>
                  <span>{t.duration}</span>
                  <strong>{course.duration}</strong>
                </div>
              </div>

              <button
                type="button"
                className="course-card__button"
                onClick={() => setSelectedCourse(course)}
              >
                {t.details}
                <span>←</span>
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedCourse && (
        <div
          className="course-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="course-modal__content glass-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="course-modal__close"
              aria-label={t.close}
              onClick={() => setSelectedCourse(null)}
            >
              ×
            </button>

            <span className="course-modal__category">
              {t.filters.find(
                (filter) => filter.id === selectedCourse.category
              )?.label}
            </span>

            <h3>{selectedCourse.title}</h3>

            <p>{selectedCourse.description}</p>

            <div className="course-modal__info">
              <div>
                <span>{t.level}</span>
                <strong>{selectedCourse.level}</strong>
              </div>

              <div>
                <span>{t.duration}</span>
                <strong>{selectedCourse.duration}</strong>
              </div>
            </div>

            <a
              href="#contact"
              className="btn btn-primary course-modal__button"
              onClick={() => setSelectedCourse(null)}
            >
              {t.register}
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;