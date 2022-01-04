import styled from "styled-components";

export const CheckoutFormContainer = styled.div`
  text-align: center;
`;

export const PayNowButton = styled.button`
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 3px 5px;
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
