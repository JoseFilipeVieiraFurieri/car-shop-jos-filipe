import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarModel from '../Models/CarModel';

class CarService {
  private carModel : CarModel;

  constructor(carModel: CarModel) {
    this.carModel = carModel;
  }

  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(
        car,
      );
    }
    return null;
  }

  public async createCar(car: ICar) {
    const data = await this.carModel.createCar(car);
    return this.createCarDomain(data);
  }

  public async carList() {
    const data = await this.carModel.carList();
    const cars = data.map((car: ICar) => this.createCarDomain(car));
    return cars;
  }

  public async CarListById(id: any) {
    const data = await this.carModel.carListId(id);
    return this.createCarDomain(data);
  }
}

export default CarService;