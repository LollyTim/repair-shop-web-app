import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://65ae9c046003fcaa0c666b6b419e4989@o4508146605490176.ingest.de.sentry.io/4508146615255120",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
