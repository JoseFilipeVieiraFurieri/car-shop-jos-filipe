import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  public id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;

  constructor( 
    car: IVehicle,
  ) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status || false;
    this.buyValue = car.buyValue;
  }
}

export default Vehicle;