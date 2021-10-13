import { connection_mysql } from "../../dataBase";
import sequelize, {Model} from "sequelize";
import { ITableClassifications } from "../../../Interfaces/IClassifications";

export class Classifications extends Model<ITableClassifications> implements ITableClassifications {
  public id!: number
  public name_classification!: string
  public photo_classification!:  string | null
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

}

Classifications.init(
  {
    id:{
      type: sequelize.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
    },
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
  sequelize: connection_mysql,
  tableName: 'tb_classifications',
  underscored: true
})
