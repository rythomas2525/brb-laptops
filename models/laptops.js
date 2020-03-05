module.exports = function (sequelize, DataTypes) {
    var laptops = sequelize.define("laptops", {
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 40]
            }
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 40]
            }
        }
    });
    return laptops;
};
