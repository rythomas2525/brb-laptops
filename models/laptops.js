module.exports = function (sequelize, DataTypes) {
    var laptops = sequelize.define("laptops", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter your name'
                },
                len: [1, 40]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter your email'
                },
                isEmail: true,
                len: [1, 50]
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter a valid phone number'
                },
                len: [1, 40]
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter the city you reside in'
                },
                len: [1, 40]
            }
        },
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
            allowNull: true
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
            allowNull: true
        },
        summary: {
            type: DataTypes.TEXT('tiny'),
            allowNull: true
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
        },
        main_photo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        additional_photos: {
            type: DataTypes.STRING,
            allowNull: true
        }

    });

    return laptops;
};
