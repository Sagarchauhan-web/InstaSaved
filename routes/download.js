const router = require('express').Router();
const video = require('../utils/fetchLink');

router.route('/').post(async (req, res) => {
  const link = await video(req.body.url);
  try {
    res.status(200).json({ status: 'success', link });
  } catch (err) {
    res.status(500).json({ status: 'failed' });
  }
});

module.exports = router;
