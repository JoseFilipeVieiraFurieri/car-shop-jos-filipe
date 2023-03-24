import {
  Model,
  models,
  Schema,
  model,
} from 'mongoose';
  
abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
  
  public async create(car: T): Promise<T> {
    return this.model.create({ ...car });
  }

  public async find(): Promise<T[]> {
    return this.model.find();
  }

  public async findId(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  public async update(dta: Partial<T>, id: string) {
    return this.model.findByIdAndUpdate(id, dta);
  }
}
  
export default AbstractODM;
