const express = require('express');
const route = express.Router();
const {
	getAllArtical,
	getSingleArticalById,
	createArtical,
	deleteSingleArticalById,
	updateSingleArticalById,
} = require("../controllars/articalControllars");

route.post("/", createArtical);
route.get('/', getAllArtical);
route.get("/:id", getSingleArticalById);
route.put("/:id", updateSingleArticalById);
route.delete("/:id", deleteSingleArticalById);

module.exports = route;