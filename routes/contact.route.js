const express = require("express")
const router = express.Router()
const contactController = require("../controllers/contacto.controller")

router.get("/", contactController.getContacts)
router.post("/", contactController.createContact)


module.exports = router