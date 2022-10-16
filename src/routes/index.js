const { Router } = require('express');
const RouteCrypto = require('./RouteCrypto.js')



const router = Router();



router.use('/' , RouteCrypto)


module.exports = router;
