# Conference Hall

[![circleci](https://circleci.com/gh/bpetetot/conference-hall.svg?style=shield)](https://circleci.com/gh/bpetetot/conference-hall)
[![Greenkeeper badge](https://badges.greenkeeper.io/bpetetot/conference-hall.svg)](https://greenkeeper.io/)
[![Gitter](https://badges.gitter.im/conference-hall.svg)](https://gitter.im/conference-hall)

**[https://conference-hall.io](https://conference-hall.io)**

## Features

**You are a Speaker:**
- ✨ Write the absract of your talk
- 🚀 Submit your talks to events (meetups and conferences)
- 🤝 Invite co-speakers to your talk
- 🔒 Social login

**You are an Organizer:**
- ❤️ Create your conference or meetup
- 📣 Call for papers opens and closes automatically
- ⚡️ Make it public or private
- 👥 Use organization to share an event between organizers
- 💡 Custom formats and categories for the talks
- ⭐️ Rate proposals to speed deliberation process
- ✅ Mark proposals as accepted, declined or backup
- 📥 Send survey to speakers
- 🌍 API to query proposals

## Getting started

### Pre-requisites

* node@9.11.2+
* node@8 (for cloud functions)
* yarn@1.10.1 or npm@5.6.0+

### Configure Firebase

1. Create a firebase project with the [firebase console](https://console.firebase.google.com).

  * create a "Cloud Firestore" Database. It's okay to start in 'locked' mode. The rules will be overiden when you deploy.
  * activate "Google" as a sign-in provider for Authentication

2. Create a `.env.local` file by copying `.env` file at root folder and set firebase environment variables. You can get all these variables from the homepage by clicking "Add an application" and selecting the web icon.

  * REACT_APP_API_KEY=<API_KEY>
  * REACT_APP_AUTH_DOMAIN=<AUTH_DOMAIN>
  * REACT_APP_PROJECT_ID=<PROJECT_ID>

### Run the app in dev mode

1. Clone the Conference Hall app

```
git clone https://github.com/bpetetot/conference-hall.git
```

2. Install dependencies with yarn

```
yarn
```

3. Configure the app with [Firebase](#configure-firebase) and [Google APIs](#configure-google-apis)

4. Start the app

```
yarn start
```

Before using the app, you'll need to deploy the firestore security rules at least once (see below for how to deploy with firebase)

### Run unit test

* run all tests
```
yarn test
```
Run all tests in watch mode.
* debug test
```
yarn test:debug
```
* Go to chrome: chrome://inspect/#devices
* Let go the debugger and put `debugger` in your test.

For more details on debugger within IDE, consult [react-script documentation](https://github.com/facebook/create-react-app/blob/ed5c48c81b2139b4414810e1efe917e04c96ee8d/packages/react-scripts/template/README.md#debugging-tests-in-chrome).

### Configure Google APIs (optional)

Activate the following APIs in the [Google developer console](https://console.developers.google.com/apis) :

* Google Places API Web Service
* Google Maps Embed API
* Google Maps JavaScript API

### Configure Mailgun (optional)

The application sends emails through the [Mailgun API](https://www.mailgun.com/)

You have to create a Mailgun account if you want to send those emails, if not the app will still works perfectly but without sending any email.

Mailgun API is used to send email through Cloud Functions, so you will have to add environment variables with firebase CLI :
* The application URL: `app.url` (ex: `http://localhost:3000`)
* The API key: `mailgun.key`
* The domain name: `mailgun.domain`

Here the command to register those variables:

```
firebase functions:config:set app.url="https://myserver.com" mailgun.key="MAILGUN API KEY" mailgun.domain="YOUR DOMAIN NAME"
```

To test cloud functions with Mailgun on local machine (with cloud function shell), you will need to generate `.runtimeconfig.json` file with environment variables :

```
firebase functions:config:get > .runtimeconfig.json
```

> **Important Note:** Mailgun is an external service from Firebase and Google, so to be able use it with you will need to activate Firebase pricing.

### Configure Google Analytics (optional)

You can add a Google Analytics by adding your Analytics ID in the environmenent variable `REACT_APP_GOOGLE_ANALYTICS_ID` in the `.env.local` file.

## Deploy with Firebase

### Pre-requisites

1. Install [firebase-cli](https://firebase.google.com/docs/cli/) :

```
npm install firebase-tools@5.0.0 -g
```

2. You must be logged with firebase and select project :

```
firebase login
firebase use --add
```

> [Firebase documentation](https://firebase.google.com/docs/web)

3. Build functions:

```
cd functions
yarn  # using node8
cd ..
```

### Build and deploy the app:

```
yarn build
firebase deploy
```

## Frequent questions & issues

### Generate Beta Access keys

The application is still in beta mode for the organizer part, you will need to generate an access key in the database.

**To do it:**
- Go to the firebase console
- Select your project
- Go to the "Database" tab
- Create a collection named "betaAccess"
- Create an empty document with a generated ID
- This generated ID will be your access key

### Add a custom domain

If you want to use a custom domain, you will have to [configure Firebase accordingly](https://firebase.google.com/docs/hosting/custom-domain)

Then you will also need to configure Authentification providers to use your custom domain.

**To do it:**
- Change in your `.env.local` file, the `authDomain` property with your custom domain
- Follow instruction in chapter ["Customizing the redirect domain for Google sign-in"](https://firebase.google.com/docs/auth/web/google-signin)
