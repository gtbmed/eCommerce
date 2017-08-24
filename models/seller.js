module.exports = function(sequelize, Datatypes) {
	var Seller = sequelize.define("Seller", {
		seller_name: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},

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

		seller_funds: {
			type: Datatypes.Decimal(10, 2),
			allowNull: false,
		}

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