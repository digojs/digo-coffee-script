var digo = require("digo");

exports.default = function () {
	digo.src("fixtures/*.coffee").pipe("../").dest("_build");
};
