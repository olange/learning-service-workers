# Experiment 01 · Worker instantiation

## Installation

Download dependencies and generates self-signed certificate (for HTTPS):

```
$ npm install
```

## Run

Starts the HTTPS local server:

```
$ npm start
```

Then open your browser and navigate to [https://localhost:8443](https://localhost:8443/) (HTTPS is required for loading web workers).

To enable the experimental web platform features of Chrome, add following flag on command-line (example for Mac OS):

```
$ open -a "Google Chrome" --args --enable-experimental-web-platform-features
```