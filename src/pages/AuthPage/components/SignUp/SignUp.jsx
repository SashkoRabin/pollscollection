import React, { useRef, useState } from 'react';
import cl from '../../AuthPage.module.css';
import Auth from '../../../../db/auth/auth';

const SignUp = ({ setHasAccount }) => {
  const [alertText, setAlertText] = useState('');
  const nameInput = useRef('');
  const emailInput = useRef('');
  const passwordInput = useRef('');
  const alert = useRef('');
  const signupBtn = useRef('');

  const showAlert = (text) => {
    setAlertText(text);
    alert.current.style.display = 'block';
    setTimeout(() => {
      alert.current.style.display = 'none';
      signupBtn.current.disabled = false;
    }, 4000);
  };
  const createUser = () => {
    signupBtn.current.disabled = true;
    if (
      !nameInput.current.value ||
      !emailInput.current.value ||
      !passwordInput.current.value
    ) {
      showAlert('Заполните все поля!');
      return;
    }
    const userName = nameInput.current.value;
    const userEmail = emailInput.current.value;
    const userPassword = passwordInput.current.value;
    if (userName.length < 2) {
      showAlert('Введите корректное имя!');
      return;
    }
    if (!userEmail.includes('@')) {
      showAlert('Введите корректный email!');
      return;
    }
    if (userPassword.length < 6) {
      showAlert('Пароль должен состоять из 6 символов и более!');
      return;
    }
    const user = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };
    Auth.create(user).then(() => setHasAccount(true));
  };
  return (
    <div className={cl.signup_card}>
      <h3 ref={alert} className={cl.alert_message}>
        {alertText}
      </h3>
      <h2 className={cl.box_title}>Sign Up</h2>
      <div className={cl.card_body}>
        <div className={cl.input_group_name}>
          <i className="fa-solid fa-user"></i>
          <input ref={nameInput} type="text" placeholder="Full Name" />
        </div>
        <div className={cl.input_group_email}>
          <i className="fa-solid fa-envelope"></i>
          <input ref={emailInput} type="text" placeholder="Email" />
        </div>
        <div className={cl.input_group_password}>
          <i className="fa-solid fa-lock"></i>
          <input ref={passwordInput} type="password" placeholder="Password" />
        </div>
      </div>
      <div className={cl.card_footer}>
        <span>
          Do you have an account?
          <button className={cl.hasAcc} onClick={() => setHasAccount(true)}>
            Log in
          </button>
        </span>
        <button
          ref={signupBtn}
          type="submit"
          onClick={createUser}
          className={cl.signup_btn}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
