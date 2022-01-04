import {
  CREAT_PAYMENT_INTENT_FAILURE,
  CREAT_PAYMENT_INTENT_START,
  CREAT_PAYMENT_INTENT_SUCCESS,
} from "./checkout.types";

const INITIAL_STATE = {
  clientSecret: null,
  isFetching: false,
  errorMessage: undefined,
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREAT_PAYMENT_INTENT_START:
      return {
        ...state,
        isFetching: true,
      };
    case CREAT_PAYMENT_INTENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        clientSecret: action.payload,
      };
    case CREAT_PAYMENT_INTENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default checkoutReducer;
