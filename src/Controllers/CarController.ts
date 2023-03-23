import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

const MongoIdRgx = /^[0-9a-fA-F]{24}$/;

class CarController {
  private Service: CarService;
  
  constructor(service: CarService) {
    this.Service = service;
  }

  public async createCar(req: Request, res: Response, _next: NextFunction) {
    const dataBody: ICar = {
      model: req.body.model,
      year: req.body.year,
      color: req.body.color,
      status: req.body.status,
      buyValue: req.body.buyValue,
      doorsQty: req.body.doorsQty,
      seatsQty: req.body.seatsQty,
    };
    const service = await this.Service.createCar(dataBody);
    return res.status(201).json(service);
  }

  public async carList(_req: Request, res: Response, _next: NextFunction) {
    const service = await this.Service.carList();
    return res.status(200).json(service);
  }

  public async carListId(req: Request, res: Response, _next: NextFunction) {
    const { id } = req.params;
    if (!MongoIdRgx.test(id)) {
      return res.status(422).json({ message: 'Invalid mongo id' });
    }
    const service = await this.Service.CarListById(id);
    if (!service) {
      return res.status(404).json({ message: 'Car not found' });
    }
    return res.status(200).json(service);
  }
}

export default CarController;