import { connection_mysql } from "../../Database/dataBase";
import sequelize from "sequelize";

export const Classifications = connection_mysql.define('tb_classification', {
  name_classification: {
    type: sequelize.TEXT,
    allowNull:false
  },
  photo_classification:{
    type: sequelize.TEXT,
    allowNull: true
  }
},
{
  underscored: true
})
