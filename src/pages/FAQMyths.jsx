import "../styling/FAQMyths.css";
import { useState } from 'react';

export default function MythsFacts() {
  const mythsData = [
    {
      myth: "Breast cancer only affects women.",
      fact: "Men can also develop breast cancer, although the percentage is much lower (less than 1%)."
    },
    {
      myth: "A lump in the breast always means cancer.",
      fact: "Not all lumps are cancerous — many are benign, but they should always be medically examined to confirm."
    },
    {
      myth: "There's no need for screening if I have no symptoms.",
      fact: "Early detection (even without symptoms) greatly increases the chances of recovery."
    },
    {
      myth: "Mammograms are painful and dangerous.",
      fact: "Mammograms are safe; the radiation dose is very low and not harmful."
    },
    {
      myth: "Breastfeeding doesn't affect cancer risk.",
      fact: "Breastfeeding actually reduces the risk of developing breast cancer."
    },
    {
      myth: "If I don't have a family history, I won't get cancer.",
      fact: "70% of breast cancer patients have no family history of the disease."
    },
    {
      myth: "Surgery causes cancer to spread in the body.",
      fact: "This is false — surgery helps remove the tumor and does not cause its spread."
    },
    {
      myth: "There's no point in treatment if the cancer has spread.",
      fact: "Even in advanced stages, treatment can relieve symptoms and improve quality of life."
    },
    {
      myth: "Wearing a tight bra causes breast cancer.",
      fact: "There is no scientific evidence linking any type of bra to breast cancer."
    },
    {
      myth: "Young people don't get breast cancer.",
      fact: "It can affect all age groups, though the risk increases with age."
    }
  ];

  const quizData = [
    {
      question: "What is breast cancer?",
      options: [
        "An abnormal growth of cells in the breast tissue",
        "A viral infection of the breast",
        "A fungal infection in breast tissue",
        "A temporary inflammation"
      ],
      correctAnswer: 0,
      explanation: "Breast cancer is an abnormal growth of cells in the breast tissue that can spread to other parts of the body if not detected early."
    },
    {
      question: "What are the symptoms of breast cancer?",
      options: [
        "Only severe pain in the breast",
        "A lump or swelling in the breast or underarm",
        "Only changes in breast color",
        "Only nipple discharge"
      ],
      correctAnswer: 1,
      explanation: "Symptoms include a lump or swelling in the breast or underarm, changes in size or shape, unusual nipple discharge, skin changes, and persistent pain."
    },
    {
      question: "Does every lump in the breast mean cancer?",
      options: [
        "Yes, all lumps are cancerous",
        "No, many lumps are benign but should be examined",
        "Only painful lumps are cancerous",
        "Lumps in young people are never cancerous"
      ],
      correctAnswer: 1,
      explanation: "No — many lumps are benign (such as cysts or fibroadenomas), but any new lump should be examined by a doctor to confirm."
    },
    {
      question: "What percentage of breast cancer patients have no family history?",
      options: [
        "30%",
        "50%",
        "70%",
        "90%"
      ],
      correctAnswer: 2,
      explanation: "70% of breast cancer patients have no family history of the disease, which means everyone should be aware and practice early detection."
    },
    {
      question: "How often should women aged 40+ get a mammogram?",
      options: [
        "Every month",
        "Every six months",
        "Every two years",
        "Every five years"
      ],
      correctAnswer: 2,
      explanation: "Women aged 40 and above should get a mammogram (breast X-ray) every two years for early detection."
    },
    {
      question: "Can breast cancer be prevented?",
      options: [
        "No, it cannot be prevented at all",
        "Yes, by maintaining a healthy lifestyle",
        "Only by medication",
        "Only by surgery"
      ],
      correctAnswer: 1,
      explanation: "While not entirely preventable, maintaining a healthy weight, exercising regularly, eating a balanced diet, avoiding smoking and alcohol, and breastfeeding can reduce the risk."
    },
    {
      question: "What is the survival rate for early-stage breast cancer?",
      options: [
        "Less than 50%",
        "Around 60%",
        "Around 75%",
        "Exceeds 90%"
      ],
      correctAnswer: 3,
      explanation: "Recovery is very possible, especially with early detection. Survival rates in early stages exceed 90%."
    },
    {
      question: "Does surgery cause cancer to spread in the body?",
      options: [
        "Yes, always",
        "Yes, sometimes",
        "No, this is false",
        "Only in late stages"
      ],
      correctAnswer: 2,
      explanation: "This is false — surgery helps remove the tumor and does not cause its spread. This is a common myth."
    },
    {
      question: "Can breast cancer return after recovery?",
      options: [
        "No, never",
        "Yes, relapse may occur in some cases",
        "Only if not treated properly",
        "Only in men"
      ],
      correctAnswer: 1,
      explanation: "Relapse may occur in some cases. Regular follow-ups and periodic checkups are strongly recommended after treatment."
    },
    {
      question: "What should you do if you discover a lump or symptoms?",
      options: [
        "Wait and see if it goes away",
        "Do not delay visiting a doctor",
        "Only check again after a month",
        "Ignore it if it doesn't hurt"
      ],
      correctAnswer: 1,
      explanation: "Do not delay visiting a doctor. Don't be afraid — early detection saves lives. Maintain regular self-exams and medical checkups."
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const handleAnswerSelect = (index) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      const isCorrect = index === quizData[currentQuestion].correctAnswer;
      if (isCorrect) {
        setScore(score + 1);
      }
      setAnsweredQuestions([...answeredQuestions, {
        question: currentQuestion,
        selected: index,
        correct: quizData[currentQuestion].correctAnswer
      }]);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
  };

  return (
    <div className="myths-container">
      <section className="myths-text">
        <h2>🔍 Myths vs. Facts</h2>
        <p>Let's clear up some <span>common misconceptions</span> about breast cancer.</p>
        <p>Knowledge is power — understanding the <b>truth</b> can save lives.</p>
      </section>

      <section className="myths-table">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Myth</th>
                <th>Fact</th>
              </tr>
            </thead>
            <tbody>
              {mythsData.map((item, index) => (
                <tr key={index}>
                  <td className="myth-cell">{item.myth}</td>
                  <td className="fact-cell">{item.fact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="quiz-container">
        <section className="quiz-header">
          <h2>Test Your Knowledge - Breast Cancer Quiz</h2>
          <p>Challenge yourself with these <span>important questions</span> about breast cancer.</p>
          <p>Learn while you play — every <b>answer</b> helps you understand better.</p>
        </section>

        {!showResult ? (
          <section className="quiz-content">
            <div className="quiz-progress">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
                ></div>
              </div>
              <p className="progress-text">
                Question {currentQuestion + 1} of {quizData.length}
              </p>
            </div>

            <div className="quiz-question-card">
              <h3 className="quiz-question">{quizData[currentQuestion].question}</h3>
              
              <div className="quiz-options">
                {quizData[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={`quiz-option ${
                      selectedAnswer === index
                        ? index === quizData[currentQuestion].correctAnswer
                          ? 'correct'
                          : 'incorrect'
                        : ''
                    } ${
                      selectedAnswer !== null && index === quizData[currentQuestion].correctAnswer
                        ? 'correct'
                        : ''
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                  >
                    <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                    <span className="option-text">{option}</span>
                  </button>
                ))}
              </div>

              {selectedAnswer !== null && (
                <div className="quiz-explanation">
                  <h4>
                    {selectedAnswer === quizData[currentQuestion].correctAnswer ? '✅ Correct!' : '❌ Incorrect'}
                  </h4>
                  <p>{quizData[currentQuestion].explanation}</p>
                  <button className="quiz-next-btn" onClick={handleNextQuestion}>
                    {currentQuestion < quizData.length - 1 ? 'Next Question' : 'See Results'}
                  </button>
                </div>
              )}
            </div>
          </section>
        ) : (
          <section className="quiz-result">
            <div className="result-card">
              <h3 className="result-title">🎉 Quiz Complete!</h3>
              <div className="result-score">
                <span className="score-number">{score}</span>
                <span className="score-total">/ {quizData.length}</span>
              </div>
              <p className="result-percentage">
                You scored {Math.round((score / quizData.length) * 100)}%
              </p>
              <div className="result-message">
                {score === quizData.length && <p>🌟 Perfect! You're a breast cancer awareness expert!</p>}
                {score >= quizData.length * 0.7 && score < quizData.length && <p>👏 Great job! You have excellent knowledge!</p>}
                {score >= quizData.length * 0.5 && score < quizData.length * 0.7 && <p>👍 Good effort! Keep learning!</p>}
                {score < quizData.length * 0.5 && <p>💪 Keep studying! Every bit of knowledge helps!</p>}
              </div>
              <button className="quiz-restart-btn" onClick={resetQuiz}>
                Take Quiz Again
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}