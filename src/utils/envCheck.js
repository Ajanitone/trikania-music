// Lightweight runtime env validation to surface missing config early.
// Logs warnings in dev so the app doesn't silently fail.
export function runEnvChecks() {
  const required = ["REACT_APP_BASE_URL"];
  const missingRequired = required.filter(
    (key) => !process.env[key] || process.env[key].trim() === ""
  );

  if (missingRequired.length) {
    // eslint-disable-next-line no-console
    console.warn(
      `[env] Missing required env vars: ${missingRequired.join(
        ", "
      )}. API calls may fail.`
    );
  }

  const hasProdStripeKey = Boolean(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  const hasDevStripeKey = Boolean(process.env.REACT_APP_STRIPE_TEST_KEY);

  if (process.env.NODE_ENV === "production") {
    if (!hasProdStripeKey) {
      // eslint-disable-next-line no-console
      console.warn(
        "[env] Stripe public key is missing in production; checkout will be disabled."
      );
    }
  } else {
    if (!hasProdStripeKey && !hasDevStripeKey) {
      // eslint-disable-next-line no-console
      console.warn(
        "[env] Provide REACT_APP_STRIPE_TEST_KEY for dev checkout. Falling back to disabled checkout."
      );
    }
  }

  return { missingRequired };
}
