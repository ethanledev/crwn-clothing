import {
  CREAT_PAYMENT_INTENT_FAILURE,
  CREAT_PAYMENT_INTENT_START,
  CREAT_PAYMENT_INTENT_SUCCESS,
} from "./checkout.types";

export const createPaymentIntentStart = (amount) => ({
  type: CREAT_PAYMENT_INTENT_START,
  payload: amount,
});

export const createPaymentIntentSuccess = (clientSecret) => ({
  type: CREAT_PAYMENT_INTENT_SUCCESS,
  payload: clientSecret,
});

export const createPaymentIntentFailure = (errorMessage) => ({
  type: CREAT_PAYMENT_INTENT_FAILURE,
  payload: errorMessage,
});
