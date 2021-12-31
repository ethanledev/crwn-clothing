import styled from "styled-components";

export const SignInAndSignUpPageContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 970px) {
    flex-direction: column;
    width: 90vw;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
  }
`;
