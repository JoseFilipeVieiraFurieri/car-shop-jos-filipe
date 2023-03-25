import { Model } from 'mongoose';
import { expect } from 'chai';
import sinon from 'sinon';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleModel from '../../../src/Models/MotorcycleModel';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testes da camada service Do MotorcycleService', function () {
  it('Cria um moto com sucesso', async function () {
    const carInput: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
  
    const carResponse: IMotorcycle = {  
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
  
    const outputMotor: Motorcycle = new Motorcycle(carResponse);
      
    sinon.stub(Model, 'create').resolves(outputMotor);
  
    const model = new MotorcycleModel();
    
    const service = new MotorcycleService(model);
    const result = await service.createCar(carInput);
    
    expect(result).to.be.deep.equal(outputMotor);
  });
    
  it('Teste se é encontrado o moto com id especificado', async function () {
    const carResponse: IMotorcycle = {  
      id: '6348513f34c397abcad040b2',
      model: 'Motinha do Jack Chan',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
        
    const motorId = '6348513f34c397abcad040b2';
    
    sinon.stub(Model, 'findOne').resolves(carResponse);
    
    const model = new MotorcycleModel();
    
    const service = new MotorcycleService(model);
    const result = await service.findId(motorId);
  
    expect(result).to.be.deep.equal(carResponse);
  });
  
  it('Teste se é retornado uma mensagem de erro no caso do id ser invalido', async function () {
    const carId = '1111111111111111111111111111111111111111111';
    
    sinon.stub(Model, 'findOne').resolves(false);
  
    try {
      const model = new MotorcycleModel();
    
      const service = new MotorcycleService(model);
      await service.findId(carId);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
  
  it('retorna uma mensagem de erro no caso do id not found', async function () {
    const carId = '6348513f34c397abcad040b2';
    
    sinon.stub(Model, 'findOne').resolves(undefined);
  
    try {
      const model = new MotorcycleModel();
    
      const service = new MotorcycleService(model);
      await service.findId(carId);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });
  
  it('Faz um update com sucesso', async function () {
    const carId = '6348513f34c397abcad040b2';
    const motorInput: IMotorcycle = {
      model: 'Batmoto',
      year: 2014,
      color: 'Red',
      status: true,
      buyValue: 45.000,
      category: 'Street',
      engineCapacity: 3000,
    };
  
    const motorResponse: IMotorcycle = {  
      id: '634852326b35b59438fbea2f',
      model: 'Batmoto',
      year: 2014,
      color: 'Red',
      status: true,
      buyValue: 45.000,
      category: 'Street',
      engineCapacity: 3000,
    };
  
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorResponse);
  
    const model = new MotorcycleModel();
    
    const service = new MotorcycleService(model);
    const result = await service.Update(motorInput, carId);
    
    expect(result).to.be.deep.equal(motorResponse);
  });
    
  afterEach(function () {
    sinon.restore();
  });
});