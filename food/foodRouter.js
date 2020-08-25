const express = require("express");

const foodDB = require("../food/foodModel");

const router = express();

// // POST new food item
// router.post("/", (req, res) => {
//   const food = req.body;

//   foodDB
//     .insert(food)
//     .then((newFood) => {
//       res.status(201).json(newFood);
//     })
//     .catch((error) => {
//       res.status(500).json({ error: error.message });
//     });
// });

// GET all food items
router.get("/", (req, res) => {
  foodDB
    .findAll()
    .then((foodItems) => {
      res.status(200).json({ foodItems });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// GET food item by id
router.get("/:id", (req, res) => {
  const id = req.params.id;

  foodDB
    .findByID(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Update (PUT) food item by id
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  foodDB
    .findByID(id)
    .then((found) => {
      if (found) {
        foodDB
          .update(id, updates)
          .then((foodItem) => {
            res.status(200).json(foodItem);
          })
          .catch((error) => {
            res
              .status(500)
              .json({ error: "Sorry, the food item couldn't be updated." });
          });
      } else {
        res
          .status(404)
          .json({ message: "Sorry, that food item doesn't exist." });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: "There was an error finding that food item. Please try again.",
      });
    });
});

module.exports = router;
