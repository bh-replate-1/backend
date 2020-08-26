const validateFood = (req, res, next) => {
  if (!req.body.food_item) {
    res.status(400).json({ message: "Please add a food item :)" });
  } else if (!req.body.use_by_date) {
    res
      .status(400)
      .json({ message: "Don't forget to give an expiration date :)" });
  } else {
    next();
  }
};

module.exports = validateFood;
