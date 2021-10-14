import sequelize from "sequelize";
import { Model } from "sequelize";
import { IUser } from "../../../Interfaces/IUsers";
import { connection_mysql } from "../../dataBase";


export class User extends Model<IUser> implements IUser{
  public id!: number
  public email!: string
  public password!: string
  readonly created_at!: Date
  readonly updated_at!: Date
}

User.init({
  id:{
    type: sequelize.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey: true,

  },
  email:{
    type: sequelize.STRING,
    allowNull:false,
    unique:true,
    
  },
  password: {
    type: sequelize.STRING,
    allowNull:false
  }
}, 
{
  sequelize: connection_mysql ,
  underscored:true,
  tableName:'tb_users'
})