import React from "react";
import { useDispatch } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";
import {
  CartItemContainer,
  ImageContainer,
  ItemInfo,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <CartItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <ItemInfo>{name}</ItemInfo>
      <Quantity>
        <Arrow onClick={() => dispatch(removeItem(cartItem))}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => dispatch(addItem(cartItem))}>&#10095;</Arrow>
      </Quantity>
      <ItemInfo>{price}</ItemInfo>
      <RemoveButton onClick={() => dispatch(clearItemFromCart(cartItem))}>
        &#10005;
      </RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;
