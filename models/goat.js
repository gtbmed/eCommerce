module.exports = function(sequelize, DataTypes) {
	var Goat = sequelize.define("Goat", {
		goat_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		goat_color: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		goat_price: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
			validate: {
				isDecimal: true
			}
		},
		
	});

	Goat.associate = function(models) {
		Goat.belongsTo(models.Seller, {
			foreignKey: {
				allowNull: false
			}
		});
	};
	return Goat;
};