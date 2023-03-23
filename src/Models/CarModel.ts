import { Schema,
  Model,
  model,
  models,
} from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarModel {
  private schema: Schema;
  private model: Model<ICar>;
  
  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Number, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    }, { versionKey: false });
    this.model = models.cars || model('cars', this.schema);
  }
  
  public async createCar(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }
}

export default CarModel;