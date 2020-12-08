import Axios from "axios";
import React, { useState } from "react";
// importing styles
import styles from "./Auth.module.css";

const Auth = () => {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    mobile: Number,
    password: "",
    confirmPassword: "",
  });
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  //   checking password
  var checkPass = false;
  if (register.password !== register.confirmPassword) {
    checkPass = !checkPass;
  }

  //   handling changes in form
  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };
  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  // submit functions
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    await Axios.post("/api/auth/register", {
      name: register.name,
      email: register.email,
      password: register.password,
      phoneNumber: register.mobile,
    });
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    await Axios.post("/api/auth/login", {
      email: login.email,
      password: login.password,
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
  };

  return (
    <div>
      <div className={styles.containerDiv}>
        <div className={styles.register}>
          <form onSubmit={(e) => handleSubmitRegister(e)}>
            <div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={register.name}
                onChange={(e) => handleChangeRegister(e)}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={register.email}
                onChange={(e) => handleChangeRegister(e)}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Mobile"
                name="mobile"
                value={register.mobile}
                onChange={(e) => handleChangeRegister(e)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={register.password}
                onChange={(e) => handleChangeRegister(e)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={register.confirmPassword}
                onChange={(e) => handleChangeRegister(e)}
              />
            </div>
            {checkPass && <label>Password Not Matching</label>}

            <div>
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
        <span className={styles.midLine}></span>
        <div className={styles.logins}>
          <form onSubmit={(e) => handleSubmitLogin(e)}>
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={login.email}
                onChange={(e) => handleChangeLogin(e)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={login.password}
                onChange={(e) => handleChangeLogin(e)}
              />
            </div>
            <div>
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
