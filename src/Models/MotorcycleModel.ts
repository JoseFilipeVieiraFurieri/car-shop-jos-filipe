import {
  Schema,

} from 'mongoose';
import AbstractODM from './AbstractODM';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleModel extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    }, { versionKey: false });
    super(schema, 'motorcycles');
  }

  public create(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...motorcycle });
  }

  public async find(): Promise<IMotorcycle[]> {
    return this.model.find();
  }

  public async findId(id: string): Promise<IMotorcycle | null> {
    return this.model.findById(id);
  }
  public async update(dta: IMotorcycle, id: string) {
    return this.model.findByIdAndUpdate(id, dta);
  }
}

export default MotorcycleModel;