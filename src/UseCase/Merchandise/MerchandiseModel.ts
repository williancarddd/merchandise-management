import { connection_mysql } from "../../Database/dataBase";
import sequelize from "sequelize";

export const Merchandise = connection_mysql.define('tb_merchandise', {
  name_merchandise: {
    type: sequelize.TEXT,
    allowNull: false   
  },
  price_merchandise: {
    type: sequelize.FLOAT,
    allowNull: false
  },
  photo_merchandise: {
  type: sequelize.STRING,
  allowNull: true
  },
  quantity_stock_merchandise: {
    type: sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  state_merchandise: {
    type: sequelize.ENUM,
    values: ['true', 'false'],
    allowNull: false
  }
}, {
  underscored: true
})
