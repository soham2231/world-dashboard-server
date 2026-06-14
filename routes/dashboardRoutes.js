const express = require("express");
const dashboardController = require("../controllers/dashboardController");

const router = express.Router();

router.get("/tp", dashboardController.getTotalPopulation);
router.get("/tc", dashboardController.getTotalContries);
router.get("/tcity", dashboardController.getTotalCities);
router.get("/tlang", dashboardController.getTotalLanguages);
router.get("/ttpc", dashboardController.getTopTenPC);
router.get("/popby-c", dashboardController.getPopByCon);
router.post("/con-by-input", dashboardController.getCountryByInput);

module.exports = router;
