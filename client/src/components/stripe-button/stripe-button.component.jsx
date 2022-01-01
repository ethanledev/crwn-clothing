import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { StripeButton } from "./stripe-button.styles";

const publishableKey =
  "pk_test_51JXxLUGgZjV4jYKFcFdPhfcgG3tUl2zTDtEgraELAxHrJz4edHitcuh8eXnV3oYnHcyKLVRmdzHKHMLOjqzNvzmP00xJGFdwAu";
const stripePromise = loadStripe(publishableKey);

const StripeCheckoutButton = () => {
  const options = {
    clientSecret: process.env.REACT_APP_STRIPE_SECRET_KEY,
  };

  console.log(options);

  return <StripeButton>PAY NOW</StripeButton>;
};

export default StripeCheckoutButton;
