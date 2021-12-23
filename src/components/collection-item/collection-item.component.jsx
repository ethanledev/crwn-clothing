import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooter,
  Name,
  Price,
  CustomButtonContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={imageUrl}></ImageContainer>
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooter>
      <CustomButtonContainer inverted onClick={() => dispatch(addItem(item))}>
        ADD TO CART
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
