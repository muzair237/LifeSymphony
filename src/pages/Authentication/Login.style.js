import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const LeftSec = styled.div`
  width: 35%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogoImg = styled.div``;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
  width: 96%;
`;

export const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
  h1 {
    color: #282a3a;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 40px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.4px;
    text-transform: capitalize;
  }
  p {
    font-size: 16px;
    color: #667085;
  }
`;

export const RightSec = styled.div`
  width: 65%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export const InputTag = styled.div`
  position: relative;
  input {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 10px 14px;
    outline: none;
  }
  img {
    position: absolute;
    top: 18%;
    right: 3%;
    cursor: pointer;
  }
`;

export const LoginOpt = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    color: #1cd6ce;
    cursor: pointer;
  }
`;

export const RemMe = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 2px;
  cursor: pointer;
  span {
    color: #000;
    cursor: pointer;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
  padding: 15px;
  background-color: #1cd6ce;
  color: #fff;
  border-radius: 8px;
  border: 1px solid var(--accent-1, #d0d5dd);
  cursor: pointer;
`;

//ExtendingStyle
export const GoogleLoginBtn = styled(LoginBtn).attrs({
  type: "submit",
})`
  background-color: #ffffff;
  padding: 10px;
  color: #000;
`;
