import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useHistory } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";
import CartDropdownItem from "../cart-dropdown-item/cart-dropdown-item.component";
import {
  CartDropdownContainer,
  CartDropdownItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <CartDropdownContainer>
      <CartDropdownItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartDropdownItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartDropdownItems>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
          history.push("/cart");
        }}
      >
        GO TO CART
      </CustomButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
