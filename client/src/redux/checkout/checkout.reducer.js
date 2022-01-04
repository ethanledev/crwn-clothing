import {
  CREAT_PAYMENT_INTENT_FAILURE,
  CREAT_PAYMENT_INTENT_START,
  CREAT_PAYMENT_INTENT_SUCCESS,
  RESET_CHECKOUT_STATE,
  RESET_FETCHING_STATUS,
} from "./checkout.types";

const INITIAL_STATE = {
  clientSecret: null,
  fetchingStatus: undefined,
  errorMessage: undefined,
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREAT_PAYMENT_INTENT_START:
      return {
        ...state,
        fetchingStatus: "loading",
      };
    case CREAT_PAYMENT_INTENT_SUCCESS:
      return {
        ...state,
        fetchingStatus: "successful",
        clientSecret: action.payload,
      };
    case CREAT_PAYMENT_INTENT_FAILURE:
      return {
        ...state,
        fetchingStatus: "failed",
        errorMessage: action.payload,
      };
    case RESET_FETCHING_STATUS:
      return {
        ...state,
        fetchingStatus: undefined,
      };
    case RESET_CHECKOUT_STATE:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default checkoutReducer;
