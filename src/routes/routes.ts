import { Router } from 'express';
import CarController from '../Controllers/CarController';
import CarModel from '../Models/CarModel';
import CarService from '../Services/CarService';

const routes = Router();

const model = new CarModel();
const service = new CarService(model);
const Controller = new CarController(service);

routes.post(
  '/cars',
  (req, res, next) => Controller.createCar(req, res, next),
);

export default routes;