const express = require("express")
const pool = require("./db")
const router = express.Router()

var categories = []
try {
  pool.query("SELECT * FROM categories", (err, res) => {
    categories = res.rows
  })
} catch (err) {
  console.error(err.message)
}

router.get("/categories", (req, res) => {
  res.json(categories)
})

router.get("/details/:product_id", async (req, res) => {
  try {
    //TODO
  } catch (err) {
    console.error(err.message)
  }
})
router.get("/:category/:options/:page", async (req, res) => {
  try {
    let result = []
    for (let i = 0; i < categories.length; i++) {
      if (req.params.category === categories[i].name) {
        const list = await pool.query(`SELECT * FROM ${req.params.category}`)
        res.json(list.rows)
        break
      } else if (i === categories.length - 1) {
        res.status(420).send('Error! This category does not exist. Support: https://github.com/mble/keycomp/issues')
      }
    }
  } catch (err) {
    console.error(err.message)
  }
})


module.exports = router