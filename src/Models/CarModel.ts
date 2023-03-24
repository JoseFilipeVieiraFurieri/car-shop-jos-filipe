import { Schema,
} from 'mongoose';
import AbstractODM from './AbstractODM';
import ICar from '../Interfaces/ICar';

class CarModel extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    }, { versionKey: false });
    super(schema, 'cars');
  }
  
  public async createCar(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async carList(): Promise<ICar[]> {
    return this.model.find();
  }

  public async carListId(id: string): Promise<ICar | null> {
    return this.model.findById(id);
  }

  public async updateCar(dta: ICar, id: string) {
    return this.model.findByIdAndUpdate(id, dta);
  }
}

export default CarModel;