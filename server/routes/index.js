const express = require('express');

const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;

  // eslint-disable-next-line arrow-body-style
  router.get('/', async (req, res) => {
    const speakersList = await speakersService.getListShort();
    const artwork = await speakersService.getAllArtwork();
    return res.render('index', { speakersList, artwork });
  });

  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));
  return router;
};
