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
<<<<<<< HEAD
			type: Datatypes.DECIMAL(10, 2),
=======
			type: Datatypes.Decimal(10, 2),
>>>>>>> 39a95416437207a4b9ce2bbe0519712bb76c4f1b
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
<<<<<<< HEAD

	Transaction.associate = function(models) {
		Transaction.belongsTo(models.Seller, {
			foreignKey: {
				allowNull: false
			}
		});
	};
=======
>>>>>>> 39a95416437207a4b9ce2bbe0519712bb76c4f1b
	return Transaction;
};