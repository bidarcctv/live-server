const express = require('express')
const { createReceipt, getReceipt, getReceiptByMember } = require('../controller/receipts')
const router = express.Router()


router.post('/receipt/create', createReceipt)
router.get('/receipt/getall', getReceipt)
router.post('/receipt/getreceiptbymember', getReceiptByMember)


module.exports = router