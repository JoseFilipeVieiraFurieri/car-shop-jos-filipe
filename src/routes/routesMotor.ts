import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';
import MotorcycleModel from '../Models/MotorcycleModel';
import MotorcycleService from '../Services/MotorcycleService';

const routesMotor = Router();

const model = new MotorcycleModel();
const service = new MotorcycleService(model);
const Controller = new MotorcycleController(service);

routesMotor.post(
  '/motorcycles',
  (req, res, next) => Controller.create(req, res, next),
);

routesMotor.get('/motorcycles', (req, res, next) => Controller.find(req, res, next));
routesMotor.get('/motorcycles/:id', (req, res, next) => Controller.findId(req, res, next));

export default routesMotor;