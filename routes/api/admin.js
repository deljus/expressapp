let models  = require('../../models'),
              express = require('express'),
              router  = express.Router();

router.get('/association', async (req, res) => {
  res.json( await models.Dashboards.findAll());
});

router.get('/table/:name', async (req, res) => {
  res.json( await models[req.params.name].findAll());
});

module.exports = router;
