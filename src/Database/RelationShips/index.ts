import { Merchandise } from "../../UseCase/Merchandise/MerchandiseModel";
import { Classifications } from "../../UseCase/Classifications/ClassificationsModel";

Classifications.hasMany(Merchandise)
Merchandise.belongsTo(Classifications)
Classifications.sync({force:false})
Merchandise.sync({force: false})
