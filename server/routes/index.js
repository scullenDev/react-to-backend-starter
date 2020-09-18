const router = require("express").Router();
const { contactController } = require("../controllers");

// prettier-ignore
router.route("/contacts")
  .get(contactController.findAll)
  .post(contactController.create);

// prettier-ignore
router.route("/contacts/:id")
  .get(contactController.findById)
  .put(contactController.update)
  .delete(contactController.delete);

module.exports = router;
