import React from 'react';
import Polls from './components/Polls/Polls';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import cl from './components/Polls/Polls.module.css';

const MainPage = ({ setLoginSign, loginSign, authorized, setAuthorized }) => {
  return (
    <div className={cl.main_wrapper}>
      <Header
        authorized={authorized}
        setAuthorized={setAuthorized}
        loginSign={loginSign}
        setLoginSign={setLoginSign}
      />
      <article>
        <p className={cl.warning}>
          <strong>ВНИМАНИЕ!!!</strong> Результаты опросов созданы лишь в
          развлекательных целях. Никакого отношения к адекватному оцениванию они
          не имеют.
        </p>
        <br />
        <h2 className={cl.available_polls}>Доступные опросы</h2>
        <br />
        <Polls />
      </article>
      <Footer />
    </div>
  );
};

export default MainPage;
