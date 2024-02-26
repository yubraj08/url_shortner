const express = require('express')
const { handleShortId } = require('../controller/url.js')



const router = express.Router()



router.post("/",handleShortId)


module.exports = router;