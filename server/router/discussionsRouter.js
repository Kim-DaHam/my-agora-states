const {discussionsController} = require('../controller/discussionController');
const {findAll, findById, findByCategory} = discussionsController;
const express = require('express');
const router = express.Router();

router.get('/', findAll);
router.get('/:category/:count', findByCategory);
router.get('/:category/:id', findById);

module.exports = router;