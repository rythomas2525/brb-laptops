module.exports = function (sequelize, DataTypes) {
    var laptops = sequelize.define("laptops", {
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter a brand name'
                },
                len: [1, 40]
            }
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter a model name'
                },
                len: [1, 40]
            }
        },
        operating_system: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter an operating system'
                },
                len: [1, 40]
            }
        },
        laptop_condition: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please rate the condition of the laptop(1-5)'
                },
                isInt: true,
                max: 5,
                min: 1
            }
        },
        processor: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter a processor name'
                },
                len: [1, 40]
            }
        },
        graphics: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 40]
            }
        },
        ram: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter amount of RAM in laptop'
                },
                len: [1, 20]
            }
        },
        screen_dimension: {
            type: DataTypes.DECIMAL(3, 1),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter size of laptop display'
                },
                isNumeric: true,
                len: [1, 3]
            }
        },
        hd_storage: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter amount of storage in laptop'
                },
                len: [1, 20]
            }
        },
        release_year: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isInt: true,
                len: 4
            }
        },
        summary: {
            type: DataTypes.TEXT('tiny'),
            allowNull: true,
            validate: {
                len: [1, 200]
            }
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter price of laptop'
                },
                isInt: true
            }
        }

    });
    return laptops;
};
