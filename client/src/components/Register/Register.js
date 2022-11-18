import React, { useState } from "react";
import authApiService from "../../utilities/authApiService";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../App";
import "./Register.css";

const initialState = {
  username: "",
  password: "",
  country: "",
};

function Register() {
  const ctx = React.useContext(GlobalContext);
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, country } = state;
    let lowerCaseUsername = state.username.toLowerCase();
    const user = { username: lowerCaseUsername, password, country };
    const res = await authApiService.register(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      ctx.setIsAuthenticated(true);
      navigate(`/profile/${lowerCaseUsername}`);
    }
  };

  const validateForm = () => {
    return !state.username || !state.password || !state.country;
  };

  return (
    <div className="main">
      <div className="register">
        <div className="registerFlex">
          <h2>Register</h2>
          <form className="mainForm" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={state.username}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Spain"
              name="country"
              value={state.firstName}
              onChange={handleChange}
            />
            <button
              id="register-btn"
              className="default-btn"
              type="submit"
              disabled={validateForm()}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;