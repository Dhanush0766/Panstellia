# Vercel Environment Variables (Frontend)

Set these in Vercel project settings under **Environment Variables** (Production + Preview as needed).

- `VITE_RAZORPAY_KEY_ID` (public)
- `VITE_FIREBASE_FUNCTIONS_REGION` (public, default: `asia-south1`)
- `VITE_FIREBASE_CREATE_ORDER_URL` (optional public REST URL for `createOrder`)
- `VITE_FIREBASE_VERIFY_PAYMENT_URL` (optional public REST URL for `verifyPayment`)
- `VITE_FIREBASE_MARK_PAYMENT_FAILED_URL` (optional public REST URL for `markPaymentFailed`)

## Example
```env
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxx
VITE_FIREBASE_FUNCTIONS_REGION=asia-south1
VITE_FIREBASE_CREATE_ORDER_URL=https://asia-south1-<project>.cloudfunctions.net/createOrder
VITE_FIREBASE_VERIFY_PAYMENT_URL=https://asia-south1-<project>.cloudfunctions.net/verifyPayment
VITE_FIREBASE_MARK_PAYMENT_FAILED_URL=https://asia-south1-<project>.cloudfunctions.net/markPaymentFailed
```

> `RAZORPAY_KEY_SECRET` must be stored only in Firebase Functions Secret Manager, never in Vercel or frontend code.

