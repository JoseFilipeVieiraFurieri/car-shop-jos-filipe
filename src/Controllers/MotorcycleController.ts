import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

const MongoIdRgx = /^[0-9a-fA-F]{24}$/;

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

  public async find(req: Request, res: Response, _next: NextFunction) {
    const service = await this.Service.find();
    return res.status(200).json(service);
  }

  public async findId(req: Request, res: Response, _next: NextFunction) {
    const { id } = req.params;
    if (!MongoIdRgx.test(id)) {
      return res.status(422).json({ message: 'Invalid mongo id' });
    }
    const service = await this.Service.findId(id);
    if (!service) {
      return res.status(404).json({ message: 'Motorcycle not found' });
    }

    return res.status(200).json(service);
  }
}

export default MotorcycleController;