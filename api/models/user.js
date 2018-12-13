'use strict'

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User',
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      isEmail: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    password: DataTypes.STRING,
    date_created: DataTypes.DATE,
    date_updated: {
      type: DataTypes.DATE
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  }, {
    createdAt: 'date_created',
    updatedAt: 'date_updated',
    schema: "user_data",
    tableName: "user_profile"
  }
)
  return User
}