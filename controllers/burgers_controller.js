const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
 // all
 burger.all(function (data) {
  const burgerObject = {
      burger: data
  };
  console.log(burgerObject);
  res.render("index", burgerObject);
  });
});

router.get("/api/burgers", (req, res) => {
  // create
  burger.all(function (data) {
    const burgerObject = {
        burger: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
    });
});

router.post("/api/burgers", (req, res) => {
  // create
  let newBurger = req.body.burger_name;
  burger.insert(newBurger, function (result) {
    res.json({ result });
  });
});

router.put("/api/burgers/:id", (req, res) =>{
  // req.params.id;
  let id = req.params.id;

  // update

  burger.devour(id, (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
