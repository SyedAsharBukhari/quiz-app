import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function QuizApp() {
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState(0);
  const [questionResult, setQuestionResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "Hyper Text Markup Language",
        "Hyper Transfer Markup Language",
      ],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      id: 2,
      question: "Which HTML tag is used to define an internal style sheet?",
      options: ["<style>", "<css>", "<script>", "<design>"],
      correctAnswer: "<style>",
    },
    {
      id: 3,
      question: "Which property is used to change the background color in CSS?",
      options: ["color", "bgcolor", "background-color", "background"],
      correctAnswer: "background-color",
    },
    {
      id: 4,
      question: "In JavaScript, which symbol is used for comments?",
      options: ["//", "/* */", "#", "<!-- -->"],
      correctAnswer: "//",
    },
    {
      id: 5,
      question: "What does DOM stand for in JavaScript?",
      options: [
        "Document Object Model",
        "Data Object Method",
        "Digital Ordinance Model",
        "Document Order Management",
      ],
      correctAnswer: "Document Object Model",
    },
    {
      id: 6,
      question: "Which hook is used to manage state in React?",
      options: ["useRef", "useState", "useEffect", "useContext"],
      correctAnswer: "useState",
    },
    {
      id: 7,
      question: "Which of the following is used to render elements in React?",
      options: [
        "ReactDOM.render()",
        "React.render()",
        "ReactDOM.create()",
        "Render.React()",
      ],
      correctAnswer: "ReactDOM.render()",
    },
    {
      id: 8,
      question: "What is the correct syntax to import a React component?",
      options: [
        "import { Component } from 'react'",
        "include Component from 'react'",
        "require Component from 'react'",
        "get Component from 'react'",
      ],
      correctAnswer: "import { Component } from 'react'",
    },
    {
      id: 9,
      question: "In CSS, how do you select an element with the id 'main'?",
      options: [".main", "#main", "main", "*main"],
      correctAnswer: "#main",
    },
    {
      id: 10,
      question: "In JavaScript, which keyword declares a constant variable?",
      options: ["let", "var", "const", "static"],
      correctAnswer: "const",
    },
  ];

  const handleClick = (opt) => {
    if (isAnswered) return;

    setSelectedAnswer(opt);
    setIsAnswered(true);

    const isCorrect = quizQuestions[index].correctAnswer === opt;
    
    if (isCorrect) {
      setResult((prev) => prev + 1);
    }

    setQuestionResult([
      ...questionResult,
      {
        ...quizQuestions[index],
        userAnswer: opt,
        isCorrect: isCorrect,
      },
    ]);

    setTimeout(() => {
      if (index < quizQuestions.length - 1) {
        setIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setIndex(0);
    setResult(0);
    setQuestionResult([]);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setStartQuiz(false);
  };

  const getScoreMessage = () => {
    const percentage = (result / quizQuestions.length) * 100;
    if (percentage === 100) return "Perfect Score! 🏆";
    if (percentage >= 80) return "Excellent Work! 🌟";
    if (percentage >= 60) return "Good Job! 👍";
    if (percentage >= 40) return "Keep Practicing! 💪";
    return "Don't Give Up!";
  };



  if (!startQuiz) {
    return (
      <>
        <div className="quiz-wrapper">
          <div className="welcome-card text-center">
            <h1 className="quiz-title">Web Dev Quiz</h1>
            <p className="quiz-subtitle">Test your HTML, CSS, JS & React knowledge!</p>
            
            <div className="info-box">
              <div className="info-item">
                <span className="info-label">📝 Questions</span>
                <span className="info-value">{quizQuestions.length}</span>
              </div>
              <div className="info-item">
                <span className="info-label">⏱️ Time</span>
                <span className="info-value">Unlimited</span>
              </div>
              <div className="info-item">
                <span className="info-label">🎓 Difficulty</span>
                <span className="info-value">Beginner</span>
              </div>
            </div>

            <button onClick={() => setStartQuiz(true)} className="start-btn w-100">
              Start Quiz 
            </button>
          </div>
        </div>
      </>
    );
  }

  if (showResult) {
    return (
      <>
        <div className="quiz-wrapper">
          <div className="result-card">
            <div className="text-center">
         
              <h2 className="result-message">{getScoreMessage()}</h2>
              <div className="result-score">
                {result}/{quizQuestions.length}
              </div>
              <div className="result-progress">
                <div
                  className="result-progress-bar"
                  style={{ width: `${(result / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
              <p className="result-percentage">
                You got {((result / quizQuestions.length) * 100).toFixed(0)}% correct!
              </p>
            </div>

            <div className="results-list">
              {questionResult.map((q, idx) => (
                <div
                  key={q.id}
                  className={`result-item ${q.isCorrect ? 'correct' : 'wrong'}`}
                >
                  <div className="result-item-content">
                    <span className="result-emoji">{q.isCorrect ? "✅" : "❌"}</span>
                    <div className="flex-grow-1">
                      <p className="result-question">
                        {idx + 1}. {q.question.replace(/^\d+\.\s*/, '')}
                      </p>
                      <p className="result-answer">
                        <span className="result-answer-label">Your answer: </span>
                        <span className={q.isCorrect ? 'user-answer-correct' : 'user-answer-wrong'}>
                          {q.userAnswer}
                        </span>
                      </p>
                      {!q.isCorrect && (
                        <p className="result-answer">
                          <span className="result-answer-label">Correct answer: </span>
                          <span className="correct-answer-text">{q.correctAnswer}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={restartQuiz} className="restart-btn w-100">
              Retake Quiz
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="quiz-wrapper">
        <div className="quiz-card">
          <div className="question-header">
            <span className="question-number">
              Question {index + 1} of {quizQuestions.length}
            </span>
            <span className="score-display">
              Score: {result}/{index}
            </span>
          </div>
          
          <div className="custom-progress">
            <div
              className="custom-progress-bar"
              style={{ width: `${((index + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>

          <h3 className="question-text">
            {quizQuestions[index]?.question.replace(/^\d+\.\s*/, '')}
          </h3>
          
          <div>
            {quizQuestions[index]?.options.map((opt, idx) => {
              const isSelected = selectedAnswer === opt;
              const isCorrect = quizQuestions[index].correctAnswer === opt;
              const showResult = isAnswered && isSelected;

              return (
                <button
                  key={idx}
                  onClick={() => handleClick(opt)}
                  disabled={isAnswered}
                  className={`option-btn ${
                    showResult
                      ? isCorrect
                        ? 'correct'
                        : 'wrong'
                      : isAnswered
                      ? 'disabled'
                      : ''
                  }`}
                >
                  <span>{opt}</span>
                  {showResult && (
                    <span style={{fontSize: '24px'}}>
                      {isCorrect ? "✓" : "✗"}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="text-center mt-4">
              <div className="next-indicator">
                <div className="pulse-dot"></div>
                <span>Moving to next question...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default QuizApp;