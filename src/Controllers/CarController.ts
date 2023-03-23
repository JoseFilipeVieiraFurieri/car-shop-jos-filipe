import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

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
}

export default CarController;