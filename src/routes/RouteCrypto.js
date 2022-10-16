const {Router} = require('express');
const router = Router();
const {getCrypto} = require('../controllers/getCrypto.js')



router.get('/', async(req,res) => {
   try{        
        const search = await getCrypto()
        if(search){
          res.send(search).status(200)
        }  
      }
    catch(err){
        res.send("error", err);}
})





module.exports = router;