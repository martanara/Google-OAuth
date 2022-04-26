const express = require('express');
const router = express.Router();
const isLogged = require('../config/isLogged');

router.get('/logged', (req, res) => {
  res.render('logged', {
    userName: req.user.displayName,
    image: req.user._json.picture,
  });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', isLogged, (req, res) => {
  res.render('userProfile');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.render('userProfileSettings');
});

module.exports = router;