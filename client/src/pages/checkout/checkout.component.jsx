import React, { useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/checkout-form/checkout-form.component";
import { useDispatch, useSelector } from "react-redux";
import { resetFetchingStatus } from "../../redux/checkout/checkout.actions";
import { TestWarning } from "./checkout.styles";

const publishableKey =
  "pk_test_51JXxLUGgZjV4jYKFcFdPhfcgG3tUl2zTDtEgraELAxHrJz4edHitcuh8eXnV3oYnHcyKLVRmdzHKHMLOjqzNvzmP00xJGFdwAu";

const stripePromise = loadStripe(publishableKey);

const CheckoutPage = () => {
  const clientSecret = useSelector((state) => state.checkout.clientSecret);
  const options = { clientSecret };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFetchingStatus());

    return () => {
      console.log("Leave /checkout");
    };
  }, [dispatch]);

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
      <TestWarning>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/25 - CVV 123
      </TestWarning>
    </Elements>
  );
};

export default CheckoutPage;
