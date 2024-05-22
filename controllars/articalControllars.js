const allArticalsData = require("../localDatabase/articals");

const createArtical = (req, res) => {
	allArticalsData.push(req.body);
	res.json({ message: "Artical created successfully" });
};

const getAllArtical = (req, res) => {
	res.json({
		allArticalsData,
	});
};

const getSingleArticalById = (req, res) => {
	const { id } = req.params;
	allArticalsData.forEach((artical) => {
		if (id == artical.id) {
			res.json({ artical });
		}
	});
};

const updateSingleArticalById = (req, res) => {
    const { id } = req.params;
	allArticalsData.forEach((artical,index) => {
        if (id == artical.id) {
            allArticalsData.splice(index, 1, req.body);
            res.json({
                message:'Succesfully artical updated'
            })
		}
	});
};

const deleteSingleArticalById = (req, res) => {
	const { id } = req.params;
	allArticalsData.forEach((artical, index) => {
		if (artical.id == id) {
			allArticalsData.splice(index, 1);
			res.json({ message: "Succesfully artical deleted" });
		}
	});
};

module.exports = {
	getAllArtical,
	getSingleArticalById,
	createArtical,
	deleteSingleArticalById,
	updateSingleArticalById,
};
