import React, { useState } from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import {
  CheckoutFormContainer,
  CheckoutSpinner,
  PayNowButton,
} from "./checkout-form.styles";
import { useDispatch } from "react-redux";
import { resetCheckoutState } from "../../redux/checkout/checkout.actions";
import { clearCart } from "../../redux/cart/cart.actions";
import { useHistory } from "react-router-dom";

const CheckoutForm = () => {
  const elements = useElements();
  const stripe = useStripe();
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    stripe
      .confirmPayment({
        elements,
        redirect: "if_required",
      })
      .then((result) => {
        if (result.error) {
          if (
            result.error.type === "card_error" ||
            result.error.type === "validation_error"
          ) {
            console.log(result.error.message);
          } else {
            console.log("An unexpected error occured.");
          }
        } else {
          setIsLoading(false);
          //reset checkout state
          dispatch(resetCheckoutState());
          //clear cart
          dispatch(clearCart());
          //redirect to home page
          history.push("/");
        }
      });
  };

  return (
    <CheckoutFormContainer>
      <h1>Payment Method</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <PaymentElement />
        {isLoading ? (
          <CheckoutSpinner />
        ) : (
          <PayNowButton type="submit">PAY NOW</PayNowButton>
        )}
      </form>
    </CheckoutFormContainer>
  );
};

export default CheckoutForm;
