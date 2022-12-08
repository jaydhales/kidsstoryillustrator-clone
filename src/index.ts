import express from "express";
import * as Sentry from "@sentry/node";

// or using CommonJS
// const express = require('express');
// const Sentry = require('@sentry/node');

const app = express();

Sentry.init({ dsn: "https://665708396c8e41deab42b60e9fd1f698@o4504278112993280.ingest.sentry.io/4504278125838337" });

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());

// All controllers should live here
app.get("/", function rootHandler(req, res) {
  res.end("Hello world!");
});

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());


// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

app.listen(5000);
