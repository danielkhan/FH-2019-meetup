const express = require('express');

const router = express.Router();

module.exports = () => {
  // eslint-disable-next-line arrow-body-style
  router.get('/', (req, res) => {
    return res.render('speakers');
  });

  // eslint-disable-next-line arrow-body-style
  router.get('/:name', (req, res) => {
    return res.render('speakers/detail');
  });
  return router;
};
