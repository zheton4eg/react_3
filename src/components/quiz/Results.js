import React from 'react';
import './Quiz.css';

const Results = ({ score, totalQuestions, userAnswers, questions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  // Находим вопросы про учителя
  const teacherQuestions = questions.filter(q => 
    q.topic === "Насколько хорошо вы знаете своего учителя - Олега Анатольевича"
  );
  
  // Подсчитываем правильные ответы на вопросы про учителя
  let teacherCorrectAnswers = 0;
  teacherQuestions.forEach((question, index) => {
    // Находим индекс этого вопроса в общем массиве
    const globalIndex = questions.findIndex(q => q.id === question.id && q.topic === question.topic);
    if (globalIndex !== -1 && userAnswers[globalIndex] === question.correctAnswer) {
      teacherCorrectAnswers++;
    }
  });
  
  // Определяем сообщение о знании учителя
  let teacherMessage = '';
  if (teacherQuestions.length > 0) {
    if (teacherCorrectAnswers === teacherQuestions.length) {
      teacherMessage = 'Вы отлично знаете своего учителя!';
    } else if (teacherCorrectAnswers === teacherQuestions.length - 1) {
      teacherMessage = 'Вы хорошо знаете своего учителя, но неплохо бы не пропускать занятия без уважительной причины!';
    } else if (teacherCorrectAnswers === teacherQuestions.length - 2) {
      teacherMessage = 'Вам бы стоило чаще посещать занятия Олега Анатольевича!';
    } else if (teacherCorrectAnswers === 0) {
      teacherMessage = 'Вы совсем не посещаете занятия! В вашем случае "два" - это не цифра и не число, а оценка!';
    } else {
      teacherMessage = `Вы ответили правильно на ${teacherCorrectAnswers} из ${teacherQuestions.length} вопросов об Олеге Анатольевиче.`;
    }
  }
  
  // Определяем общее сообщение о результате
  let overallMessage = '';
  if (percentage >= 80) {
    overallMessage = 'Отличный результат! Вы отлично знаете C++!';
  } else if (percentage >= 60) {
    overallMessage = 'Хороший результат! Но есть куда стремиться.';
  } else {
    overallMessage = 'Попробуйте еще раз! Изучение C++ требует практики.';
  }

  return (
    <div className="results-container">
      <h2>Результаты викторины</h2>
      
      <div className="score-circle">
        <div className="score-percentage">{percentage}%</div>
        <div className="score-text">
          {score} из {totalQuestions}
        </div>
      </div>
      
      <div className="result-message">
        <p>{overallMessage}</p>
        {teacherMessage && (
          <div className="teacher-message">
            <h4>Результаты по теме "Знание учителя":</h4>
            <p>{teacherMessage}</p>
          </div>
        )}
      </div>
      
      <div className="detailed-results">
        <h3>Детальные результаты:</h3>
        {questions.map((question, index) => {
          const userAnswer = userAnswers[index];
          const isCorrect = userAnswer === question.correctAnswer;
          
          return (
            <div key={index} className={`question-review ${isCorrect ? 'correct' : 'incorrect'}`}>
              <h4>Вопрос {index + 1}: {question.question}</h4>
              <p>Ваш ответ: {question.options[userAnswer]}</p>
              {!isCorrect && <p>Правильный ответ: {question.options[question.correctAnswer]}</p>}
              <p className="topic-badge">Тема: {question.topic}</p>
            </div>
          );
        })}
      </div>
      
      <button className="restart-button" onClick={onRestart}>
        Попробовать снова
      </button>
    </div>
  );
};

export default Results;