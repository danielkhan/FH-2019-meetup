const express = require('express');
const path = require('path');
const configs = require('./config');
const SpeakersService = require('./services/SpeakersService');

const routes = require('./routes');

const app = express();
const config = configs[app.get('env') || 'development'];

const speakersService = new SpeakersService(config.data.speakers);

app.locals.title = config.sitename;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

if (app.get('env') === 'development') {
  app.locals.pretty = true;
}

app.use('/', express.static(path.join(__dirname, '../public')));

app.use(async (req, res, next) => {
  try {
    const names = await speakersService.getNames();
    res.locals.speakerNames = names;
    return next();
  } catch (err) {
    return next(err);
  }
});

app.use('/', routes({ speakersService }));

app.listen(3000);
module.exports = app;
