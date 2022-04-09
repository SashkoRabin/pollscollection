export default class Auth {
  static create(user) {
    return fetch(
      'https://kursak-40dd1-default-rtdb.europe-west1.firebasedatabase.app/users.json',
      {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => res.json());
  }
  static async get() {
    let b;
    await fetch(
      'https://kursak-40dd1-default-rtdb.europe-west1.firebasedatabase.app/users.json'
    )
      .then((res) => res.json())
      .then((res) => {
        return res
          ? Object.keys(res).map((key, index) => {
              return { ...res[key], id: index };
            })
          : [];
      })
      .then((res) => (b = res));
    return b;
  }

  static auth(email, password) {
    const APIkey = 'AIzaSyCo7Tu_HRAmgwwk_vIyEn5tZSDhcGldemo';
    return fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIkey}`,
      {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json)
      .then((data) => data.registered);
  }
}
