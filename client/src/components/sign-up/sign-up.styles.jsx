import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    form {
      width: 90%;
    }
  }
`;

export const Title = styled.h2`
  margin: 10px 0;
`;
