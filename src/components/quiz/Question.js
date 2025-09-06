import React from 'react';
import './Quiz.css';

const Question = ({ question, options, selectedOption, onSelect, questionNumber, totalQuestions }) => {
  return (
    <div className="question-container">
      <div className="progress">Вопрос {questionNumber} из {totalQuestions}</div>
      <h3 className="question-text">{question}</h3>
      <div className="options-container">
        {options.map((option, index) => (
          <div 
            key={index} 
            className={`option ${selectedOption === index ? 'selected' : ''}`}
            onClick={() => onSelect(index)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;