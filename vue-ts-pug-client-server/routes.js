const router = require('express').Router();
const Data = require('./src/data');

router.get('/data', async (req, res) => {
    const src = new Data();
    res.json(await src.getData());
})

module.exports = router;