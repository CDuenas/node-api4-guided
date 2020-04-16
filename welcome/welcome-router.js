//this reads in all of environment variables from .env
// require("dotenv").config()

const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.status(200).json({
		message: `Welcome ${process.env.COHORT}`,
		fact: process.env.FUN_FACT || "I have no fun facts",
	})
})

module.exports = router
