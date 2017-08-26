module.exports = function(sequelize, Datatypes) {
	var Buyer = sequelize.define("Buyer", {
		buyer_name: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		buyerAddress: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: { 
				len: [1]
			}
		},
		??????: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		};
	});

	Buyer.associate = function(models) {
		Buyer.hasMany(models.Goat, {
			foreignKey: {
				allowNull: false
			}
		});
	};
	return Buyer;
};