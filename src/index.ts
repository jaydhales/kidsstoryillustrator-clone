import api from "@serverless/cloud";
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";

// or using CommonJS
// const api = require("@serverless/cloud");
// const Sentry = require('@sentry/node');
// const Tracing = require("@sentry/tracing");

Sentry.init({
  dsn: "https://dc075b72c6394c41a87bd877a3a89d17@o4504278112993280.ingest.sentry.io/4504278125772800",
  // or pull from params
  // dsn: params.SENTRY_DSN,
  environment: params.INSTANCE_NAME,
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  
 // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  // or pull from params
  // tracesSampleRate: parseFloat(params.SENTRY_TRACES_SAMPLE_RATE),
});

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
api.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
api.use(Sentry.Handlers.tracingHandler());

// All controllers should live here
api.get("/", function rootHandler(req, res) {
  res.end("Hello world!");
});

// The error handler must be before any other error middleware and after all controllers
api.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
api.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});
