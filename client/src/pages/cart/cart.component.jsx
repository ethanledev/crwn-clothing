import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CartItem from "../../components/cart-item/cart-item.component";
import {
  CartPageContainer,
  CartHeader,
  HeaderBlock,
  Total,
  CheckoutButton,
  CheckoutSpinner,
} from "./cart.styles";
import { useHistory } from "react-router-dom";
import { createPaymentIntentStart } from "../../redux/checkout/checkout.actions";

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const history = useHistory();
  const dispatch = useDispatch();
  const createPaymentIntentStatus = useSelector(
    (state) => state.checkout.fetchingStatus
  );

  const handleCheckoutButtonClick = () => {
    console.log("Proceed to checkout");
    dispatch(createPaymentIntentStart(total * 100));
  };

  useEffect(() => {
    if (createPaymentIntentStatus === "successful") {
      history.push("/checkout");
    }
  }, [createPaymentIntentStatus, history]);

  return (
    <CartPageContainer>
      <CartHeader>
        <HeaderBlock>
          <span>Products</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CartHeader>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>
        <span>TOTAL: ${total}</span>
      </Total>
      {createPaymentIntentStatus === "loading" ? (
        <CheckoutSpinner />
      ) : (
        <CheckoutButton onClick={handleCheckoutButtonClick}>
          PROCEED TO CHECKOUT
        </CheckoutButton>
      )}
    </CartPageContainer>
  );
};

export default CartPage;

// useEffect(() => {
//   const clientSecret = new URLSearchParams(window.location.search).get(
//     "payment_intent_client_secret"
//   );

//   if (!clientSecret) {
//     initializePayment();
//     console.log("initialize payment");
//   }
// }, [amount]);
