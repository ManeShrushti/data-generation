var express = require('express');
var router = express.Router();
var dataCtrl = require('./dataCtrl');


router.get('/dummy', dataCtrl.getDummyData);

router.get('/data', dataCtrl.getData);
// router.get('/:id', taskCtrl.getSingleTask);

// router.put('/:id', taskCtrl.editTask);

router.post('/data', dataCtrl.insertData);

// router.delete('/:id', taskCtrl.deleteTask);

module.exports = router;