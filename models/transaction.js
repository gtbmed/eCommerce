module.exports = function(sequelize, Datatypes) {
	var Transaction = sequelize.define("Transaction", {
		buyer_name: {
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
		goat_price: {
			type: Datatypes.Decimal(10, 2),
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		seller_name: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		payment_type: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
	});
	return Transaction;
};