module.exports = function(sequelize, Datatypes) {
	var Seller = sequelize.define("Seller", {
		seller_name: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		seller_funds: {
			type: Datatypes.Decimal(10, 2),
			allowNull: false,
		}
	});
	return Seller;
};