import { useState } from "react";
import "./PlacementTest.css";

const PlacementTest = ({ lang = "fa" }) => {
  const content = {
    fa: {
      title: "تعیین سطح زبان",
      subtitle: "با چند سؤال ساده، سطح فعلی زبانت را پیدا کن.",

      startTitle: "سطح زبانت را نمی‌دانی؟",
      startDescription:
        "در این آزمون کوتاه شرکت کن تا بر اساس پاسخ‌ها، یک سطح تقریبی برایت مشخص کنیم.",
      startButton: "شروع آزمون",

      question: "سؤال",
      of: "از",
      next: "سؤال بعد",
      previous: "سؤال قبل",
      finish: "مشاهده نتیجه",

      resultTitle: "نتیجه تعیین سطح",
      resultDescription:
        "بر اساس پاسخ‌های شما، سطح تقریبی زبان شما مشخص شده است.",
      recommended: "سطح پیشنهادی شما",
      restart: "انجام دوباره آزمون",
      courses: "مشاهده دوره‌های مناسب",

      questions: [
        {
          question: "She _____ from Canada.",
          options: ["are", "is", "am", "be"],
          answer: 1,
        },
        {
          question: "I _____ to school every day.",
          options: ["go", "goes", "going", "gone"],
          answer: 0,
        },
        {
          question: "They _____ watching TV right now.",
          options: ["is", "are", "was", "be"],
          answer: 1,
        },
        {
          question: "I have lived here _____ 2020.",
          options: ["for", "since", "from", "during"],
          answer: 1,
        },
        {
          question: "If I had more time, I _____ travel more.",
          options: ["will", "would", "can", "am"],
          answer: 1,
        },
        {
          question: "She has _____ finished her homework.",
          options: ["already", "yet", "still", "ever"],
          answer: 0,
        },
        {
          question: "Which word is closest in meaning to 'rapid'?",
          options: ["Slow", "Quick", "Weak", "Late"],
          answer: 1,
        },
        {
          question: "By next year, I _____ English for five years.",
          options: [
            "will study",
            "will have studied",
            "have studied",
            "studied",
          ],
          answer: 1,
        },
        {
          question:
            "If she _____ earlier, she would have caught the train.",
          options: ["left", "had left", "has left", "would leave"],
          answer: 1,
        },
        {
          question:
            "The project was completed _____ the team working together.",
          options: ["because", "despite", "due to", "although"],
          answer: 2,
        },
      ],
    },

    en: {
      title: "Placement Test",
      subtitle: "Find your current language level with a few simple questions.",

      startTitle: "Not sure about your level?",
      startDescription:
        "Take this short test and we'll estimate your current language level based on your answers.",
      startButton: "Start Test",

      question: "Question",
      of: "of",
      next: "Next Question",
      previous: "Previous",
      finish: "See Result",

      resultTitle: "Placement Result",
      resultDescription:
        "Based on your answers, we have estimated your current language level.",
      recommended: "Your Recommended Level",
      restart: "Take Test Again",
      courses: "View Suitable Courses",

      questions: [
        {
          question: "She _____ from Canada.",
          options: ["are", "is", "am", "be"],
          answer: 1,
        },
        {
          question: "I _____ to school every day.",
          options: ["go", "goes", "going", "gone"],
          answer: 0,
        },
        {
          question: "They _____ watching TV right now.",
          options: ["is", "are", "was", "be"],
          answer: 1,
        },
        {
          question: "I have lived here _____ 2020.",
          options: ["for", "since", "from", "during"],
          answer: 1,
        },
        {
          question: "If I had more time, I _____ travel more.",
          options: ["will", "would", "can", "am"],
          answer: 1,
        },
        {
          question: "She has _____ finished her homework.",
          options: ["already", "yet", "still", "ever"],
          answer: 0,
        },
        {
          question: "Which word is closest in meaning to 'rapid'?",
          options: ["Slow", "Quick", "Weak", "Late"],
          answer: 1,
        },
        {
          question: "By next year, I _____ English for five years.",
          options: [
            "will study",
            "will have studied",
            "have studied",
            "studied",
          ],
          answer: 1,
        },
        {
          question:
            "If she _____ earlier, she would have caught the train.",
          options: ["left", "had left", "has left", "would leave"],
          answer: 1,
        },
        {
          question:
            "The project was completed _____ the team working together.",
          options: ["because", "despite", "due to", "although"],
          answer: 2,
        },
      ],
    },
  };

  const t = content[lang];

  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const totalQuestions = t.questions.length;

  const handleAnswer = (optionIndex) => {
    setAnswers((previousAnswers) => {
      const updatedAnswers = [...previousAnswers];
      updatedAnswers[currentQuestion] = optionIndex;
      return updatedAnswers;
    });
  };

  const getLevel = () => {
    const score = answers.reduce((total, answer, index) => {
      if (answer === t.questions[index].answer) {
        return total + 1;
      }

      return total;
    }, 0);

    if (score <= 2) return "A1";
    if (score <= 4) return "A2";
    if (score <= 6) return "B1";
    if (score <= 8) return "B2";

    return "C1";
  };

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((previous) => previous + 1);
    } else {
      setFinished(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((previous) => previous - 1);
    }
  };

  const restartTest = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setFinished(false);
  };

  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <section className="section placement-test" id="placement-test">
      <div className="container">
        <div className="placement-test__header">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="placement-test__card glass-card">
          {!started && !finished && (
            <div className="placement-test__start">
              <div className="placement-test__icon">?</div>

              <h3>{t.startTitle}</h3>

              <p>{t.startDescription}</p>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setStarted(true)}
              >
                {t.startButton}
              </button>
            </div>
          )}

          {started && !finished && (
            <div className="placement-test__quiz">
              <div className="placement-test__top">
                <span>
                  {t.question} {currentQuestion + 1} {t.of} {totalQuestions}
                </span>

                <span>{Math.round(progress)}%</span>
              </div>

              <div className="placement-test__progress">
                <span style={{ width: `${progress}%` }} />
              </div>

              <div className="placement-test__question">
                <span className="placement-test__question-number">
                  {String(currentQuestion + 1).padStart(2, "0")}
                </span>

                <h3>{t.questions[currentQuestion].question}</h3>
              </div>

              <div className="placement-test__options">
                {t.questions[currentQuestion].options.map(
                  (option, index) => (
                    <button
                      type="button"
                      key={option}
                      className={`placement-test__option ${
                        answers[currentQuestion] === index ? "selected" : ""
                      }`}
                      onClick={() => handleAnswer(index)}
                    >
                      <span>
                        {String.fromCharCode(65 + index)}
                      </span>

                      {option}
                    </button>
                  )
                )}
              </div>

              <div className="placement-test__actions">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={previousQuestion}
                  disabled={currentQuestion === 0}
                >
                  {t.previous}
                </button>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={nextQuestion}
                  disabled={answers[currentQuestion] === undefined}
                >
                  {currentQuestion === totalQuestions - 1
                    ? t.finish
                    : t.next}
                </button>
              </div>
            </div>
          )}

          {finished && (
            <div className="placement-test__result">
              <div className="placement-test__result-icon">✓</div>

              <span className="placement-test__result-label">
                {t.recommended}
              </span>

              <div className="placement-test__result-level">
                {getLevel()}
              </div>

              <h3>{t.resultTitle}</h3>

              <p>{t.resultDescription}</p>

              <div className="placement-test__result-actions">
                <a
                  href="#courses"
                  className="btn btn-primary"
                >
                  {t.courses}
                </a>

                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={restartTest}
                >
                  {t.restart}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlacementTest;