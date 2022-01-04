import styled from "styled-components";

export const CartPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;

  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 800px) {
    margin: 20px 0;
    width: 90vw;
  }
`;

export const CartHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const CheckoutButton = styled.div`
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 1px 5px;
  font-size: 25px;
  margin-top: 20px;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }
`;

export const CheckoutSpinner = styled.div`
  display: inline-block;
  width: 34px;
  height: 34px;
  margin-top: 20px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
