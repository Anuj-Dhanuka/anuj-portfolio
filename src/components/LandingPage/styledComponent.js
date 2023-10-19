import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.contact ? "transparent" : "yellow")};
  color: ${(props) => (props.contact ? "#fff" : "#222")};
  padding: 12px 32px;
  font-size: 14px;
  font-weight: 600;
  margin-right: 10px;
  margin-bottom: 16px;
  border: 1px solid #fff;
  border-radius: 5px;
  cursor: pointer;
  &: hover {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
  }
`;

export default Button;
