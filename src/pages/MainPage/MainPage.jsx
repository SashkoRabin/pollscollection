import React from 'react';
import Polls from './components/Polls/Polls';
import Header from '../../components/Header/Header';

const MainPage = () => {
  return (
    <div>
      <Header />
      <article>
        <p>
          <strong>ВНИМАНИЕ!!!</strong> Результаты опросов созданы лишь в
          развлекательных целях. Никакого отношения к адекватному оцениванию они
          не имеют.
        </p>
        <br />
        <h2>Доступные опросы</h2>
        <br />
        <Polls />
      </article>
    </div>
  );
};

export default MainPage;
