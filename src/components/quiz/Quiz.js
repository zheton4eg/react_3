
import React, { useState } from 'react';
import Results from './Results';
import './Quiz.css';

// Данные вопросов
const quizData = [
  {
    id: 1,
    topic: "Процедурное программирование на языке C++",
    questions: [
      {
        id: 1,
        question: "Что такое переменная в C++?",
        options: [
          "Именованная область памяти для хранения данных",
          "Функция для выполнения математических операций",
          "Тип данных для хранения текста",
          "Оператор цикла"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Какой оператор используется для вывода данных в консоль в C++?",
        options: [
          "cout «",
          "console.log",
          "printf",
          "System.out.println"
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "Что означает ключевое слово 'void' в C++?",
        options: [
          "Отсутствие типа",
          "Пустая переменная",
          "Бесконечный цикл",
          "Неинициализированное значение"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 2,
    topic: "Объектно-ориентированное программирование на языке C++",
    questions: [
      {
        id: 1,
        question: "Что такое класс в C++?",
        options: [
          "Пользовательский тип данных, содержащий данные и методы",
          "Функция для создания объектов",
          "Библиотека стандартных функций",
          "Специальный тип переменной"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Что такое инкапсуляция в ООП?",
        options: [
          "Объединение данных и методов в единый объект",
          "Наследование свойств родительского класса",
          "Способность объекта принимать разные формы",
          "Процесс освобождения памяти"
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "Какой оператор используется для динамического выделения памяти в C++?",
        options: [
          "new",
          "malloc",
          "alloc",
          "create"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 3,
    topic: "Data Containers",
    questions: [
      {
        id: 1,
        question: "Что такое std::vector в C++?",
        options: [
          "Динамический массив",
          "Связный список",
          "Ассоциативный массив",
          "Очередь"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Какой контейнер STL реализует структуру данных 'очередь'?",
        options: [
          "std::queue",
          "std::stack",
          "std::deque",
          "std::list"
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "Что такое итератор в C++?",
        options: [
          "Объект для обхода элементов контейнера",
          "Функция для сортировки элементов",
          "Оператор для доступа к элементам массива",
          "Метод для вставки элементов"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 4,
    topic: "Насколько хорошо вы знаете своего учителя - Олега Анатольевича",
    questions: [
      {
        id: 1,
        question: "Как удивляется Олег Анатольевич?",
        options: [
          "Ёшкин матрешкин!",
          "Ядрена кочерыжка!",
          "Египетская сила!",
          "Ёжики мои!"
        ],
        correctAnswer: 3
      },
      {
        id: 2,
        question: "Любимая группа Олега Анатольевича?",
        options: [
          "Ария",
          "Рамштайн",
          "Виагра",
          "Dark tranquility"
        ],
        correctAnswer: 3
      },
      {
        id: 3,
        question: "Какое домашнее животное есть у Олега Анатольевича?",
        options: [
          "Собака",
          "Кошка",
          "Карликовая коза",
          "Хомяк"
        ],
        correctAnswer: 0
      }
    ]
  }
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);


const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  
  // Получаем все вопросы в одном плоском массиве
  const allQuestions = quizData.flatMap(topic => 
    topic.questions.map(question => ({
      ...question,
      topic: topic.topic
    }))
  );
  
  const currentQuestion = allQuestions[currentQuestionIndex];
  const totalQuestions = allQuestions.length;
  
  const handleOptionSelect = (optionIndex) => {
    // Сохраняем выбранный вариант
    const newSelectedOptions = {
      ...selectedOptions,
      [currentQuestionIndex]: optionIndex
    };
    setSelectedOptions(newSelectedOptions);
    
    // Сохраняем ответ пользователя
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newUserAnswers);
  };
  
  const handleNextQuestion = () => {
    // Проверяем, был ли дан ответ на текущий вопрос
    if (selectedOptions[currentQuestionIndex] === undefined) {
      alert('Пожалуйста, выберите вариант ответа');
      return;
    }
    
    // Проверяем, правильный ли ответ
    if (selectedOptions[currentQuestionIndex] === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    
    // Переходим к следующему вопросу или показываем результаты
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions({});
    setScore(0);
    setShowResults(false);
    setUserAnswers([]);
  };
  
  if (showResults) {
    return (
      <Results 
        score={score} 
        totalQuestions={totalQuestions} 
        userAnswers={userAnswers}
        questions={allQuestions}
        onRestart={handleRestart}
      />
    );
  }
  
  return (
    <div className="quiz-container">
      <h2>Викторина по C++</h2>
      <div className="topic-info">
        Тема: {currentQuestion.topic}
      </div>
      
      <div className="progress">Вопрос {currentQuestionIndex + 1} из {totalQuestions}</div>
      
      <h3 className="question-text">{currentQuestion.question}</h3>
      
      <div className="options-container">
        {currentQuestion.options.map((option, index) => (
          <div 
            key={index} 
            className={`option ${selectedOptions[currentQuestionIndex] === index ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(index)}
          >
            {option}
          </div>
        ))}
      </div>
      
      <button className="next-button" onClick={handleNextQuestion}>
        {currentQuestionIndex < totalQuestions - 1 ? 'Следующий вопрос' : 'Завершить викторину'}
      </button>
    </div>
  );
};

export default Quiz;