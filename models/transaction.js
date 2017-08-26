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

			type: Datatypes.DECIMAL(10, 2),
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


	Transaction.associate = function(models) {
		Transaction.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Transaction;
};