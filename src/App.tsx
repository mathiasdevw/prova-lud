import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { questions } from './questions';
import type { Question } from './questions';
import './App.css';

interface Score {
  id: number;
  name: string;
  score: number;
  percentage: number;
  timestamp: string;
}

type QuizState = 'start' | 'quiz' | 'result' | 'leaderboard';

function App() {
  const [quizState, setQuizState] = useState<QuizState>('start');
  const [userName, setUserName] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showHint, setShowHint] = useState(false);
  const [leaderboard, setLeaderboard] = useState<Score[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (quizState === 'quiz' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleNext();
    }
  }, [quizState, timeLeft]);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffled[i]!;
      shuffled[i] = shuffled[j]!;
      shuffled[j] = temp!;
    }
    return shuffled;
  };

  const startQuiz = () => {
    if (!userName.trim()) return;
    const shuffled = shuffleArray(questions);
    setShuffledQuestions(shuffled);
    setQuizState('quiz');
    setCurrentQuestionIndex(0);
    setTimeLeft(30);
    setAnswers({});
    setShowHint(false);
  };

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestionIndex]: answer }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30);
      setShowHint(false);
    } else {
      calculateResult();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setTimeLeft(30);
      setShowHint(false);
    }
  };

  const calculateResult = () => {
    let correct = 0;
    shuffledQuestions.forEach((question, index) => {
      const userAnswer = answers[index];
      if (userAnswer && userAnswer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim()) {
        correct++;
      }
    });
    const percentage = Math.round((correct / shuffledQuestions.length) * 100);
    submitScore(correct, percentage);
    setQuizState('result');
  };

  const submitScore = async (score: number, percentage: number) => {
    try {
      const { error } = await supabase
        .from('scores')
        .insert([{ name: userName, score, percentage }]);

      if (error) {
        console.error('Error submitting score:', error);
      }
    } catch (error) {
      console.error('Error submitting score:', error);
    }
  };

  const fetchLeaderboard = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('scores')
        .select('*')
        .order('percentage', { ascending: false })
        .limit(10);

      if (error) {
        console.error('Error fetching leaderboard:', error);
      } else {
        setLeaderboard(data || []);
      }
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    }
    setLoading(false);
  };

  const showLeaderboard = () => {
    setQuizState('leaderboard');
    fetchLeaderboard();
  };

  const resetQuiz = () => {
    setQuizState('start');
    setUserName('');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTimeLeft(30);
    setShowHint(false);
  };

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;

  if (quizState === 'start') {
    return (
      <div className="App">
        <div className="start-container">
          <h1>Simulado Redis</h1>
          <p>30 questões sobre estruturas de dados do Redis</p>
          <div className="name-input">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Digite seu nome"
              onKeyPress={(e) => e.key === 'Enter' && startQuiz()}
            />
            <button onClick={startQuiz} disabled={!userName.trim()}>
              Iniciar Simulado
            </button>
          </div>
          <button onClick={showLeaderboard} className="leaderboard-btn">
            Ver Ranking
          </button>
        </div>
      </div>
    );
  }

  if (quizState === 'quiz' && currentQuestion) {
    return (
      <div className="App">
        <div className="quiz-container">
          <div className="quiz-header">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="quiz-info">
              <span>Questão {currentQuestionIndex + 1} de {shuffledQuestions.length}</span>
              <span>Tempo: {timeLeft}s</span>
            </div>
          </div>

          <div className="question-card">
            <div className="question-category">{currentQuestion.category}</div>
            <h2>{currentQuestion.question}</h2>

            {currentQuestion.type === 'multiple-choice' && currentQuestion.options ? (
              <div className="options">
                {currentQuestion.options.map((option, index) => (
                  <label key={index} className="option">
                    <input
                      type="radio"
                      name="answer"
                      value={option.charAt(0)}
                      checked={answers[currentQuestionIndex] === option.charAt(0)}
                      onChange={(e) => handleAnswer(e.target.value)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ) : (
              <div className="text-input">
                <textarea
                  value={answers[currentQuestionIndex] || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                  placeholder="Digite sua resposta"
                  rows={3}
                />
              </div>
            )}

            {showHint && currentQuestion.hint && (
              <div className="hint">
                <strong>Dica:</strong> {currentQuestion.hint}
              </div>
            )}

            <div className="question-actions">
              <button onClick={() => setShowHint(!showHint)}>
                {showHint ? 'Ocultar Dica' : 'Mostrar Dica'}
              </button>
              <button onClick={handleNext} className="skip-btn">
                Pular
              </button>
            </div>
          </div>

          <div className="navigation">
            <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
              Anterior
            </button>
            <button onClick={handleNext}>
              {currentQuestionIndex === shuffledQuestions.length - 1 ? 'Finalizar' : 'Próxima'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (quizState === 'result') {
    const correct = Object.entries(answers).filter(([index, answer]) => {
      const question = shuffledQuestions[parseInt(index)];
      return answer && question && answer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
    }).length;
    const percentage = Math.round((correct / shuffledQuestions.length) * 100);

    return (
      <div className="App">
        <div className="result-container">
          <h1>Resultado Final</h1>
          <div className="score-display">
            <div className="score-number">{correct}/{shuffledQuestions.length}</div>
            <div className="percentage">{percentage}%</div>
          </div>

          <div className="answers-review">
            <h3>Revisão das Respostas</h3>
            {shuffledQuestions.map((question, index) => {
              const userAnswer = answers[index];
              const isCorrect = userAnswer && userAnswer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
              return (
                <div key={index} className={`answer-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                  <h4>Questão {index + 1} ({question.category})</h4>
                  <p>{question.question}</p>
                  <p><strong>Sua resposta:</strong> {userAnswer || 'Não respondida'}</p>
                  <p><strong>Correta:</strong> {question.correctAnswer}</p>
                  <p><em>{question.explanation}</em></p>
                </div>
              );
            })}
          </div>

          <div className="result-actions">
            <button onClick={showLeaderboard}>Ver Ranking</button>
            <button onClick={resetQuiz}>Novo Simulado</button>
          </div>
        </div>
      </div>
    );
  }

  if (quizState === 'leaderboard') {
    return (
      <div className="App">
        <div className="leaderboard-container">
          <h1>Ranking</h1>
          {loading ? (
            <p>Carregando ranking...</p>
          ) : (
            <div className="leaderboard-list">
              {leaderboard.map((score, index) => (
                <div key={score.id} className="leaderboard-item">
                  <span className="rank">#{index + 1}</span>
                  <span className="name">{score.name}</span>
                  <span className="score">{score.score}/30 ({score.percentage}%)</span>
                  <span className="date">{new Date(score.timestamp).toLocaleDateString()}</span>
                </div>
              ))}
            </div>
          )}
          <button onClick={resetQuiz}>Voltar ao Início</button>
        </div>
      </div>
    );
  }

  return null;
}

export default App;
