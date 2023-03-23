import Car from '../Domains/Car';
import ICar from './ICar';

interface IMethods {
  createCar(car: ICar): Promise<Car>
}

export default IMethods;