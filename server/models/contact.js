module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define(
    "contact",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          is: /[a-z]+\s?/i,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          is: /[a-z]+\s?/i,
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        validate: {
          len: [7, 20],
          is: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        },
      },
      type: {
        type: DataTypes.STRING,
        defaultValue: "Personal",
        validate: {
          isIn: [["Personal", "Business"]],
        },
      },
    },
    {
      paranoid: true,
    }
  );

  return Contact;
};
