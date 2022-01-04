import { all, call, put, takeLatest } from "redux-saga/effects";
import { CREAT_PAYMENT_INTENT_START } from "./checkout.types";
import {
  createPaymentIntentSuccess,
  createPaymentIntentFailure,
} from "./checkout.actions";

export function* createPaymentIntent(action) {
  try {
    const response = yield fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: action.payload }),
    });
    const { clientSecret } = yield response.json();
    yield put(createPaymentIntentSuccess(clientSecret));
  } catch (error) {
    yield put(createPaymentIntentFailure(error.message));
  }
}

export function* createPaymentIntentStart() {
  const action = yield takeLatest(
    CREAT_PAYMENT_INTENT_START,
    createPaymentIntent
  );
}

export function* checkoutSagas() {
  yield all([call(createPaymentIntentStart)]);
}
