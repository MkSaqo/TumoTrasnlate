const express = require('express');
const app = express();
const watson = require('watson-developer-cloud');
const vcapServices = require('vcap_services');
const cors = require('cors');

require('dotenv').load({ silent: true });

if (process.env.VCAP_SERVICES) {
  const RateLimit = require('express-rate-limit');
  app.enable('trust proxy');

  const limiter = new RateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    delayMs: 0
  });

  app.use('/api/', limiter);

  const secure = require('express-secure-only');
  app.use(secure());
}

app.use(express.static(__dirname + '/static'));
app.use(cors());

let sttAuthService = new watson.AuthorizationV1(
  Object.assign(
    {
      username: "b4fa362c-1862-44e6-b882-77032f8acec2",
      password: "y7jPo6l75Nmw",
    },
    vcapServices.getCredentials('speech_to_text')
  )
);
app.use('/api/speech-to-text/token', (req, res) => {
  sttAuthService.getToken(
    {
      url: watson.SpeechToTextV1.URL,
    },
    (err, token) => {
      if (err) {
        console.log('Error retrieving token: ', err);
        res.status(500).send('Error retrieving token');
        return;
      }
      res.send(token);
    }
  )
});

const port = process.env.PORT || process.env.VCAP_APP_PORT || 8080;
app.listen(port, () => {
  console.log(
    'Example IBM Watson Speech JS SDK client app & token server live at http://localhost:%s/',
    port
  )
});
