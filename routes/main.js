const router = require('express').Router();

router.get('/', (req, res) => {
  res.render(__dirname +'/views/main.ejs')
});

module.exports = router;
