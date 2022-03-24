import React, { useRef } from 'react';
import cl from '../../PollPage.module.css';

const PollQuest = ({
  setScore,
  questIndex,
  setQuestIndex,
  quest,
  totalQuest,
}) => {
  const form = useRef();
  const radioID1 = Date.now();
  const radioID2 = Date.now() + 5;

  const clickHandler = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    let value = '';
    for (const entry of data) {
      value = +entry[1];
    }
    if (!value && value !== 0) return;
    setQuestIndex((prev) => prev + 1);
    setScore((prev) => prev + value);
  };

  return (
    <div className="poll">
      <h3>
        Вопрос {questIndex + 1} из {totalQuest}
      </h3>
      <form ref={form} className={cl.quest}>
        <h1>{quest}</h1>
        <span className={cl.option}>
          <input type="radio" name="quest" id={radioID1} value="1" />
          <label htmlFor={radioID1}>Да</label>
        </span>
        <span className={cl.option}>
          <input type="radio" name="quest" id={radioID2} value="0" />
          <label htmlFor={radioID2}>Нет</label>
        </span>
        <button type="submit" onClick={clickHandler}>
          Ответить
        </button>
      </form>
    </div>
  );
};

export default PollQuest;