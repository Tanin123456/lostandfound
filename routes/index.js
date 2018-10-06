var express = require('express');
const url = require('url');
var router = express.Router();

var status = 0;
/* GET home page. */
router.get('/', function(req, res, next) {

    res.redirect(url.format({
        pathname:"/catalog",
        query:{ title: 'Express'},
    }));
});


module.exports = router;
