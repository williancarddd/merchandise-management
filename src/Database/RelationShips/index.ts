import { Merchandise } from "../Models/Merchandise/MerchandiseModel";
import { Classifications } from "../Models/Classifications/ClassificationsModel";
import '../Models/Users/UserModel'
import { connection_mysql } from "../dataBase";

Classifications.hasMany(Merchandise, {
  foreignKey:{
    allowNull:false
  }
})
Merchandise.belongsTo(Classifications, {
  foreignKey:{
    allowNull:false,
  }
})

connection_mysql.sync({force: false})