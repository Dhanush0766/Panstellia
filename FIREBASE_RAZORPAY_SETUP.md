# Firebase Razorpay Backend - Panstellia

This project uses Firebase Functions v2 as the only payment backend. Vercel serves the React/Vite app only.

## Functions

- `createOrder` creates a Razorpay order and a pending Firestore order/payment record.
- `verifyPayment` verifies the Razorpay signature server-side and marks the Firestore order/payment as paid.
- `markPaymentFailed` marks abandoned or failed Razorpay orders as failed.

## Firebase Secrets

Set Razorpay credentials in Firebase Secret Manager. The key id and key secret must be from the same Razorpay mode and key pair.

```bash
firebase functions:secrets:set RAZORPAY_KEY_ID
firebase functions:secrets:set RAZORPAY_KEY_SECRET
```

Use either both `rzp_test_*` credentials with Vercel `VITE_RAZORPAY_KEY_ID=rzp_test_*`, or both live credentials with `VITE_RAZORPAY_KEY_ID=rzp_live_*`. Do not mix test and live keys.

## CORS

The function allows the built-in production origins plus any comma-separated origins in `CORS_ORIGINS`.

```env
CORS_ORIGINS=https://panstellia.vercel.app,https://panstellia.com,https://www.panstellia.com
```

## Deploy

```bash
firebase use panstellia-65653
firebase deploy --only functions:createOrder,functions:verifyPayment,functions:markPaymentFailed
```

The functions deploy to `asia-south1` by default:

```text
https://asia-south1-panstellia-65653.cloudfunctions.net/createOrder
https://asia-south1-panstellia-65653.cloudfunctions.net/verifyPayment
https://asia-south1-panstellia-65653.cloudfunctions.net/markPaymentFailed
```

## Vercel Environment

Set these in Vercel for Production and Preview, then redeploy the frontend:

```env
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxx
VITE_FIREBASE_FUNCTIONS_REGION=asia-south1
VITE_FIREBASE_CREATE_ORDER_URL=https://asia-south1-panstellia-65653.cloudfunctions.net/createOrder
VITE_FIREBASE_VERIFY_PAYMENT_URL=https://asia-south1-panstellia-65653.cloudfunctions.net/verifyPayment
VITE_FIREBASE_MARK_PAYMENT_FAILED_URL=https://asia-south1-panstellia-65653.cloudfunctions.net/markPaymentFailed
```

Never set `RAZORPAY_KEY_SECRET` in Vercel. It belongs only in Firebase Functions.
