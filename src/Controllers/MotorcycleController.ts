import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private Service: MotorcycleService;

  constructor(service: MotorcycleService) {
    this.Service = service;
  }

  public async create(req: Request, res: Response, _next: NextFunction) {
    const dataBody: IMotorcycle = {
      model: req.body.model,
      year: req.body.year,
      color: req.body.color,
      status: req.body.status,
      buyValue: req.body.buyValue,
      category: req.body.category,
      engineCapacity: req.body.engineCapacity,
    };

    const service = await this.Service.createCar(dataBody);
    return res.status(201).json(service);
  }
}

export default MotorcycleController;