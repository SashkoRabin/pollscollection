import React, { useState } from 'react';
import PollQuest from './PollQuest';

const PollBody = ({ id }) => {
  const questions = [
    [
      'Нравится ли вам находиться в веселой и шумной компании?',
      'Вам часто нужна помощь других людей?',
      'Быстро ли вы отвечаете на поставленный вопрос?',
      'Можете ли вы рассердиться или быть раздраженным?',
      'Ваше настроение часто меняется?',
      'Вы иногда предпочитаете одиночество, вместо встречи с друзьями',
      'Тревожат ли вас перед сном различные мысли, мешающие уснуть?',
      'Вы всегда приходите вовремя?',
      'Любите ли вы подшутить над другими?',
      'Бывает ли вам грустно без причины?',
      'Можно ли назвать вас весёлым человеком?',
      'Случается ли, что вас раздражает всё вокруг?',
      'Нравится ли вам выполнять работу, где всё нужно делать быстро?',
    ],
    ['Yes'],
  ];
  const [questIndex, setQuestIndex] = useState(0);
  const [score, setScore] = useState(0);
  if (questIndex >= questions[id].length)
    return <h1>Wow, your score = {score}</h1>;
  if (!id) return <div className="poll_wrapper">Nothing there...</div>;
  return (
    <div className="poll_wrapper">
      <PollQuest
        key={Date.now()}
        totalQuest={questions[id].length}
        questIndex={questIndex}
        setQuestIndex={setQuestIndex}
        quest={questions[id][questIndex]}
        setScore={setScore}
      />
    </div>
  );
};

export default PollBody;
