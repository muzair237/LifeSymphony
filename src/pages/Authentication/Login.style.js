import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 15px;
  height: 100vh;
  overflow: hidden;
  background-color: #ffffff;
`;

export const LeftSec = styled.div`
  width: 35%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogoImg = styled.div`
  margin-top: -20px;
  img {
    width: 135px;
  }
`;

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
  h4 {
    color: #780c0c;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 41px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.4px;
    text-transform: capitalize;
  }
  p {
    font-size: 25px;
    color: #780c0c;
    margin-bottom: -10px;
  }
`;

export const RightSec = styled.div`
  width: 55%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

export const Forms = styled.div`
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
    margin-bottom: 14px;
    width: 100%;
    background-color: #f0f2f3;
    color: #780c0c;
    height: 3.1rem;
    border-radius: 26px;
    font-size: 15.5px;
    border: 1px solid #d0d5dd;
    // box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 10px 14px;
    padding-left: 45px;
    outline: none;
    ::placeholder {
      font-size: 15.5px;
      text-indent: 2px;
    }
  }
  img {
    position: absolute;
    top: 1em;
    right: 3%;
    cursor: pointer;
  }
  .envelope {
    position: absolute;
    top: 1em;
    left: 3%;
    cursor: auto;
  }
  .error {
    margin-top: -10px;
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

export const ForgotPassword = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  grid-gap: 2px;
  cursor: pointer;
  margin-left: auto;
  span {
    color: #f3c13a;
    font-size: 15px;
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
  background-color: #720808;
  color: #fff;
  border-radius: 27px;
  border: 1px solid var(--accent-1, #d0d5dd);
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
`;

export const SocialLogin = styled.div`
  p {
    text-align: center;
    font-size: 18px;
    margin-top: -10px;
  }
  .icons {
    margin-left: 43px;
  }
  .googleIcon,
  .facebookIcon,
  .appleIcon {
    width: 97px;
    height: 43px;
    border-radius: 19px;
    border: 1px solid rgb(220, 220, 220);
    margin-left: 18px;
  }
  img {
    margin-left: 36px;
    margin-top: 8px;
  }
`;
export const Credits = styled.div`
  .credits {
    padding-top: 55px;
    margin-left: 80px;
  }
`;
//ExtendingStyle
export const GoogleLoginBtn = styled(LoginBtn).attrs({
  type: "submit",
})`
  background-color: #ffffff;
  padding: 10px;
  color: #000;
`;
