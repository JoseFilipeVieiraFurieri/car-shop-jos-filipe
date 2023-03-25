import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

class MotorcycleService {
  private MotorModel: MotorcycleModel;

  constructor(motorModel: MotorcycleModel) {
    this.MotorModel = motorModel;
  }

  private createCarDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(
        motorcycle,
      );
    }
    return null;
  }

  public async createCar(motor: IMotorcycle) {
    const data = await this.MotorModel.create(motor);
    return this.createCarDomain(data);
  }

  public async find() {
    const data = await this.MotorModel.find();
    const Motor = data.map((moto: IMotorcycle) => this.createCarDomain(moto));
    return Motor;
  }

  public async findId(id: string) {
    const data = await this.MotorModel.findId(id);
    return this.createCarDomain(data);
  }

  public async Update(dta: IMotorcycle, id: string) {
    const data = await this.MotorModel.update(dta, id);
    return this.createCarDomain(data);
  }
}

export default MotorcycleService;