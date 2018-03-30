let models  = require('../../models'),
              express = require('express'),
              router  = express.Router();

router.get('/association', async (req, res) => {
  res.json( await models.Dashboard.findAll());
});

module.exports = router;
