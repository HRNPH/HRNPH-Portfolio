const router = require('express').Router();

router.get('/', (req, res) => {
  res.render(__dirname +'/views/failure/404.ejs')
});

module.exports = router;
