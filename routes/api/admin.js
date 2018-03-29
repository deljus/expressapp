let models  = require('../../models'),
              express = require('express'),
              router  = express.Router();

router.get('/tables/name', (req, res) => {
  res.json({tables: Object.keys(models)
                          .filter(key => models[key]
                          .tableName)
  });
});

router.get('/tables/:name/page/:pageNum/count/', (req, res) => {
  res.json({tables: Object.keys(models)
    .filter(key => models[key]
      .tableName)
  });
});

module.exports = router;
