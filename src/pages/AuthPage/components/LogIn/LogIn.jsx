import React, { useRef, useState } from 'react';
import Auth from '../../../../db/auth/auth';
import cl from '../../AuthPage.module.css';

const LogIn = ({ setLoginSign, setHasAccount, setAuthorized, authorized }) => {
  const emailInput = useRef('');
  const passwordInput = useRef('');
  const [alertText, setAlertText] = useState('');
  const alert = useRef('');
  const showAlert = (text) => {
    setAlertText(text);
    alert.current.style.display = 'block';
    setTimeout(() => {
      alert.current.style.display = 'none';
    }, 4000);
  };

  const loginSuccess = async () => {
    if (!emailInput.current.value || !passwordInput.current.value) {
      showAlert('Заполните все поля!');
      return;
    }

    const accounts = await Auth.get();
    const correctEmail = await accounts.filter(
      (item) => item.email === emailInput.current.value
    );
    const current = await correctEmail.filter(
      (item) => item.password === passwordInput.current.value
    );

    if (current.length > 0) {
      await setAuthorized((prev) => !prev);
      setLoginSign(current[0].email);
    } else {
      showAlert('Введены неверные данные!');
    }
  };

  return (
    <div className={cl.login_card}>
      <h3 ref={alert} className={cl.alert_message}>
        {alertText}
      </h3>
      <h2 className={cl.box_title}>Login</h2>
      <div className={cl.card_body}>
        <div className={cl.input_group_email}>
          <i className="fa-solid fa-user"></i>
          <input ref={emailInput} type="text" placeholder="Email" />
        </div>

        <div className={cl.input_group_password}>
          <i className="fa-solid fa-lock"></i>
          <input ref={passwordInput} type="password" placeholder="Password" />
        </div>
      </div>
      <div className={cl.card_footer}>
        <span>
          Don`t have an account?{' '}
          <button className={cl.hasAcc} onClick={() => setHasAccount(false)}>
            Sign up
          </button>
        </span>
        <button type="submit" onClick={loginSuccess} className={cl.login_btn}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default LogIn;
