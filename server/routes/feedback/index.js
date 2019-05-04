const express = require('express');

const router = express.Router();

module.exports = () => {
  // eslint-disable-next-line arrow-body-style
  router.get('/', (req, res) => {
    return res.render('feedback');
  });

  // eslint-disable-next-line arrow-body-style
  router.post('/', (req, res) => {
    return res.send('Feedback POST');
  });
  return router;
};
