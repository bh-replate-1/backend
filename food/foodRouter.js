const express = require("express");

const Food = require("../food/foodModel");
const checkToken = require("../middleware/checkToken");
const validateFood = require("../middleware/validateFood");

const router = express();

// GET all food items
router.get("/", checkToken, (req, res) => {
  Food.findAll()
    .then((foodItems) => {
      res.status(200).json({ foodItems });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// POST new food item
router.post("/", checkToken, validateFood, (req, res) => {
  const food = req.body;

  Food.insert(food)
    .then((newFood) => {
      res.status(201).json(newFood);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to create a new food item." });
    });
});

// GET food item by id
router.get("/:id", checkToken, (req, res) => {
  const id = req.params.id;

  Food.findByID(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Update (PUT) food item by id
router.put("/:id", checkToken, (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  Food.findByID(id)
    .then((found) => {
      if (found) {
        Food.update(id, updates)
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

router.delete("/:id", checkToken, (req, res) => {
  const id = req.params.id;

  Food.findByID(id)
    .then((found) => {
      if (found) {
        Food.toggleComplete(id)
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
