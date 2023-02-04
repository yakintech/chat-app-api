const {
  contactPageController,
} = require("../controllers/contactPageController");

const router = express.Router();
router.post("/", contactPageController.sendData);
module.exports = router;
