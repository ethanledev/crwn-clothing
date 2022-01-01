import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CartItem from "../../components/cart-item/cart-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
  CartPageContainer,
  CartHeader,
  HeaderBlock,
  Total,
  TestWarning,
} from "./cart.styles";

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

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
      <TestWarning>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/25 - CVV 123
      </TestWarning>
      <StripeCheckoutButton price={total} />
    </CartPageContainer>
  );
};

export default CartPage;
