module.exports = function(sequelize, Datatypes) {
	var Seller = sequelize.define("Seller", {
		seller_name: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
<<<<<<< HEAD
		goat_name: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		seller_funds: {
			type: Datatypes.DECIMAL(10, 2),
			allowNull: false,
			validate: {
				len: [1]
			}
		},
=======
		seller_funds: {
			type: Datatypes.Decimal(10, 2),
			allowNull: false,
		}
>>>>>>> 39a95416437207a4b9ce2bbe0519712bb76c4f1b
	});

	Seller.associate = function(models) {
		Seller.hasMany(models.Goat, {
			foreignKey: {
				allowNull: false
			}
		});
	};
	return Seller;
};