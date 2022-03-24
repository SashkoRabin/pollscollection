/* eslint-disable eqeqeq */
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
    [
      'Я - человек с принципами!',
      'Я постоянно думаю о сложностях жизни',
      'Я очень толерантен/толерантна',
      'Слёзы часто накатываются на глазах',
      'Многие говорят мне что я слишком серьёзен',
      'Я очень часто злюсь',
      'Я предпочитаю друзей старше меня по возрасту',
      'Постоянно встаю рано утром',
      'Я не уделяю особое время одежде и прическе',
      'Я всегда думаю прежде чем делать что-либо',
      'Жизнь меня слегка потрепала',
      'Я хочу дожить до старости',
      'Никогда не смеюсь над другими',
      'Предпочитаю жить за городом, а не в мегаполисе',
      'Надо мной часто подшучивают',
      'Моя работа всегда готова в срок',
    ],
  ];
  const [questIndex, setQuestIndex] = useState(0);
  const [score, setScore] = useState(0);
  if (questIndex >= questions[id].length) {
    if (id == 0) {
      let temper = '';
      if (score >= 0) temper = 'Флегматик';
      if (score >= 3) temper = 'Сангвиник';
      if (score >= 6) temper = 'Меланхолик';
      if (score >= 10) temper = 'Холерик';
      return (
        <>
          <h2>Вас счёт = {score}</h2>
          <h1>Вы: {temper}</h1>
        </>
      );
    }
    if (id == 1) {
      const age = score * 6;
      return (
        <>
          <h1>Вам {age}!!!</h1>
        </>
      );
    }
  }

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