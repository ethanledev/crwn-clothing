import React from "react";
import {
  CartDropdownItemContainer,
  ItemDetails,
  Name,
} from "./cart-dropdown-item.styles";

const CartDropdownItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartDropdownItemContainer>
    <img src={imageUrl} alt="item" />
    <ItemDetails>
      <Name>{name}</Name>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetails>
  </CartDropdownItemContainer>
);

export default React.memo(CartDropdownItem);
