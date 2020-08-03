const router = require("express").Router()
const Link = require("../models/Link")

router.get("/:code", async (req, res) => {
    try {
        const link = await Link.findOne({ code: req.params.code })

        if (link) {
            link.clicks++
            await link.save()
            return res.redirect(link.from)
        }

        res.json(404).json({ message: "Link was not found" })
    } catch (e) {
        res.status(500).json({
            message: "Something went wrong in the server!",
        })
    }
})

module.exports = router
