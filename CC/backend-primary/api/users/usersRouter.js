const express = require('express');
const router = express.Router();
const {
  my,
  userUpdate,
  passwordUpdate,
  addMealsHistory,
} = require('./usersController');

router.use((req, res, next) => {
  if (!req.headers.token) {
    const resErr = {
      rc: '05',
      message: 'Masukan token anda',
    };
    return res.status(400).json(resErr);
  }
  next();
});

router.get('/my', my);
router.put('/update', userUpdate);
router.put('/update/password', passwordUpdate);
router.post('/add/meals', addMealsHistory);

module.exports = router;
