const express = require('express')
const { createReceipt, getReceipt, getReceiptByMember, updateReceipt, removeReceipt, getReceiptId } = require('../controller/receipts')
const router = express.Router()

router.param('recId', getReceiptId)
router.post('/receipt/create', createReceipt)
router.get('/receipt/getall', getReceipt)
router.post('/receipt/getreceiptbymember', getReceiptByMember)
router.put('/receipt/edit', updateReceipt)
router.delete('/receipt/delete/:recId', removeReceipt)


module.exports = router