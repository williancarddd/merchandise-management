import { connection_mysql } from "../../dataBase";
import sequelize from "sequelize";
import { Model } from "sequelize";
import { ITableMerchandise } from "../../../Interfaces/IMerchandise";


export class Merchandise extends Model<ITableMerchandise> implements ITableMerchandise{
  public name_merchandise!: string
  public photo_merchandise!: string | null
  public state_merchandise!: boolean
  public price_merchandise!: number
  public quantity_stock_merchandise!: number
  public readonly created_at!: Date
  public readonly updated_at!: Date
}


Merchandise.init({
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
},
{
  sequelize: connection_mysql,
  underscored: true,
  tableName: 'tb_merchandise'
})

