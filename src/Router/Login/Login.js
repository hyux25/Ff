import { useParams, Link } from "react-router-dom";
import Header from "components/Header/Header";
import { useState } from "react";
import styled from "styled-components";
import "./Login.css";
import "./Checkbox.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onChange = (e) => {
    const {
      target: { name, value }
    } = e;

    if (name == "email") {
      setEmail(value);
    } else if (name == "password") {
      setPassword(value);
    }
  };

  const StyledLink = styled(Link)`
    color: #2c7ee8;
    text-decoration: none;
  `;

  return (
    <div>
      <Header title="로그인" />
      <div className="login">
        <form>
          <p className="login-text">
            Do It Now
            <br />
            나를 가꾸는 행복의 순간
          </p>
          <input
            type="text"
            id="loginid"
            className="login_input"
            value={email}
            onChange={onChange}
            placeholder="E-mail"
          />
          <input
            type="password"
            id="loginpw"
            className="login_input"
            value={password}
            onChange={onChange}
            placeholder="Password"
          />

          <div className="checkbox_area">
            <label class="checkbox_container">
              Stay LOGIN
              <input type="checkbox" />
              <span class="checkbox_mark"></span>
            </label>
          </div>

          <button type="submit" className="submit_button">
            LOGIN
          </button>
        </form>
        <p className="forget">
          계정을 잊으셨나요?{" "}
          <StyledLink to="/forgotpassword">이메일 찾기</StyledLink> or{" "}
          <StyledLink to="/forgotpassword">비밀번호 찾기</StyledLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
