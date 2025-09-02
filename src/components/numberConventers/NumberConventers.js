// Импортируем необходимые модули из React
// useState - хук для управления состоянием компонента
import React, { useState } from 'react';

// Компонент для преобразования десятичного числа в двоичное
function DecimalToBinary() {
  // Используем хук useState для создания состояния:
  // decimal - хранит текущее значение десятичного числа (строка)
  // setDecimal - функция для обновления значения decimal
  const [decimal, setDecimal] = useState('');
  
  // binary - хранит результат преобразования (двоичное число)
  // setBinary - функция для обновления значения binary
  const [binary, setBinary] = useState('');

  // Обработчик события изменения значения в поле ввода
  const handleDecimalChange = (e) => {
    // Получаем текущее значение из поля ввода
    const value = e.target.value;
    
    // Проверяем, является ли введенное значение десятичным числом
    // (пустая строка или строка, содержащая только цифры)
    if (value === '' || /^\d+$/.test(value)) {
      // Обновляем состояние decimal новым значением
      setDecimal(value);
      
      // Если значение не пустое, преобразуем его в двоичное представление
      if (value !== '') {
        // Number(value) - преобразуем строку в число
        // .toString(2) - преобразуем число в строку с основанием 2 (двоичная система)
        setBinary(Number(value).toString(2));
      } else {
        // Если значение пустое, сбрасываем binary в пустую строку
        setBinary('');
      }
    }
    // Если введенное значение не соответствует формату, игнорируем его
  };

  // Возвращаем JSX для рендеринга компонента
  return (
    <div className="converter">
      {/* Заголовок компонента */}
      <h3>Десятичное в двоичное</h3>
      
      {/* Поле ввода для десятичного числа */}
      <input
        type="text" // Тип поля - текстовое
        value={decimal} // Привязываем значение к состоянию decimal
        onChange={handleDecimalChange} // Обработчик изменения значения
        placeholder="Введите десятичное число" // Подсказка в поле ввода
      />
      
      {/* Блок для отображения результата преобразования */}
      <div className="result">
        {/* Отображаем результат или прочерк, если результат пустой */}
        Двоичное: {binary || '—'}
      </div>
    </div>
  );
}

// Компонент для преобразования десятичного числа в шестнадцатеричное
function DecimalToHexadecimal() {
  // Аналогично первому компоненту, создаем состояния для десятичного числа и результата
  const [decimal, setDecimal] = useState('');
  const [hexadecimal, setHexadecimal] = useState('');

  // Обработчик изменения значения в поле ввода
  const handleDecimalChange = (e) => {
    const value = e.target.value;
    
    // Проверяем, является ли введенное значение десятичным числом
    if (value === '' || /^\d+$/.test(value)) {
      setDecimal(value);
      
      // Преобразуем десятичное число в шестнадцатеричное
      if (value !== '') {
        // Number(value).toString(16) - преобразуем в шестнадцатеричную систему
        // .toUpperCase() - переводим буквенные символы в верхний регистр (A-F)
        setHexadecimal(Number(value).toString(16).toUpperCase());
      } else {
        setHexadecimal('');
      }
    }
  };

  return (
    <div className="converter">
      <h3>Десятичное в шестнадцатеричное</h3>
      <input
        type="text"
        value={decimal}
        onChange={handleDecimalChange}
        placeholder="Введите десятичное число"
      />
      <div className="result">
        Шестнадцатеричное: {hexadecimal || '—'}
      </div>
    </div>
  );
}

// Компонент для преобразования двоичного числа в десятичное
function BinaryToDecimal() {
  // Создаем состояния для двоичного числа и результата преобразования
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');

  // Обработчик изменения значения в поле ввода
  const handleBinaryChange = (e) => {
    const value = e.target.value;
    
    // Проверяем, является ли введенное значение двоичнымчислом (только 0 и 1)
    if (value === '' || /^[0-1]+$/.test(value)) {
      setBinary(value);
      
      // Преобразуем двоичное число в десятичное
      if (value !== '') {
        // parseInt(value, 2) - преобразуем строку в число, интерпретируя ее как двоичное
        // .toString() - преобразуем число обратно в строку для отображения
        setDecimal(parseInt(value, 2).toString());
      } else {
        setDecimal('');
      }
    }
  };

  return (
    <div className="converter">
      <h3>Двоичное в десятичное</h3>
      <input
        type="text"
        value={binary}
        onChange={handleBinaryChange}
        placeholder="Введите двоичное число"
      />
      <div className="result">
        Десятичное: {decimal || '—'}
      </div>
    </div>
  );
}

// Компонент для преобразования шестнадцатеричного числа в десятичное
function HexadecimalToDecimal() {
  // Создаем состояния для шестнадцатеричного числа и результата преобразования
  const [hexadecimal, setHexadecimal] = useState('');
  const [decimal, setDecimal] = useState('');

  // Обработчик изменения значения в поле ввода
  const handleHexadecimalChange = (e) => {
    const value = e.target.value;
    
    // Проверяем, является ли введенное значение шестнадцатеричным числом
    // (цифры 0-9 и буквы A-F в любом регистре)
    if (value === '' || /^[0-9A-Fa-f]+$/.test(value)) {
      // Приводим значение к верхнему регистру для единообразия
      setHexadecimal(value.toUpperCase());
      
      // Преобразуем шестнадцатеричное число в десятичное
      if (value !== '') {
        // parseInt(value, 16) - преобразуем строку в число, интерпретируя ее как шестнадцатеричное
        setDecimal(parseInt(value, 16).toString());
      } else {
        setDecimal('');
      }
    }
  };

  return (
    <div className="converter">
      <h3>Шестнадцатеричное в десятичное</h3>
      <input
        type="text"
        value={hexadecimal}
        onChange={handleHexadecimalChange}
        placeholder="Введите шестнадцатеричное число"
      />
      <div className="result">
        Десятичное: {decimal || '—'}
      </div>
    </div>
  );
}

// Основной компонент, который объединяет все конвертеры
function NumberConverters() {
  return (
    // Контейнер для всех компонентов-конвертеров
    <div className="converters-container">
      {/* Общий заголовок для всех конвертеров */}
      <h2>Конвертеры систем счисления</h2>
      
      {/* Рендерим все компоненты-конвертеры */}
      <DecimalToBinary />
      <DecimalToHexadecimal />
      <BinaryToDecimal />
      <HexadecimalToDecimal />
    </div>
  );
}

// Экспортируем основной компонент по умолчанию
export default NumberConverters;