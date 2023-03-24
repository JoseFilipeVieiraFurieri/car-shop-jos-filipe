import { Model } from 'mongoose';
import { expect } from 'chai';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarModel from '../../../src/Models/CarModel';
import CarService from '../../../src/Services/CarService';

describe('Testes da camada service Do CarService', function () {
  it('Cria um carro com sucesso', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carResponse: ICar = {  
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5 };

    const outputCar: Car = new Car(carResponse);
    
    sinon.stub(Model, 'create').resolves(outputCar);

    const model = new CarModel();
  
    const service = new CarService(model);
    const result = await service.createCar(carInput);
  
    expect(result).to.be.deep.equal(outputCar);
  });
  
  it('Teste se é encontrado o carro com id especificado', async function () {
    const carResponse: ICar = {  
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5 };
      
    const carId = '6348513f34c397abcad040b2';
  
    sinon.stub(Model, 'findOne').resolves(carResponse);
  
    const model = new CarModel();
  
    const service = new CarService(model);
    const result = await service.CarListById(carId);

    expect(result).to.be.deep.equal(carResponse);
  });

  it('Teste se é retornado uma mensagem de erro no caso do id ser invalido', async function () {
    const carId = '1111111111111111111111111111111111111111111';
  
    sinon.stub(Model, 'findOne').resolves(false);

    try {
      const model = new CarModel();
  
      const service = new CarService(model);
      await service.CarListById(carId);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  it('retorna uma mensagem de erro no caso do id not found', async function () {
    const carId = '6348513f34c397abcad040b2';
  
    sinon.stub(Model, 'findOne').resolves(undefined);

    try {
      const model = new CarModel();
  
      const service = new CarService(model);
      await service.CarListById(carId);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  it('Faz um update com sucesso', async function () {
    const carId = '6348513f34c397abcad040b2';
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carResponse: ICar = {  
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5 };

    sinon.stub(Model, 'findByIdAndUpdate').resolves(carResponse);

    const model = new CarModel();
  
    const service = new CarService(model);
    const result = await service.updateCar(carInput, carId);
  
    expect(result).to.be.deep.equal(carResponse);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});
