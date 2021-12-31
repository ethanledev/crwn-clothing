import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { clearCart } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const StripeCheckoutButton = ({ price }) => {
  const [checkOutSuccess, setCheckoutSuccess] = useState(false);
  const dispatch = useDispatch();
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JXxLUGgZjV4jYKFcFdPhfcgG3tUl2zTDtEgraELAxHrJz4edHitcuh8eXnV3oYnHcyKLVRmdzHKHMLOjqzNvzmP00xJGFdwAu";

  useEffect(() => {
    console.log("checkout success");
    if (checkOutSuccess) {
      dispatch(clearCart());
      setCheckoutSuccess(false);
    }
  }, [checkOutSuccess, dispatch]);

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        setCheckoutSuccess(true);
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      description={`Yout total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
