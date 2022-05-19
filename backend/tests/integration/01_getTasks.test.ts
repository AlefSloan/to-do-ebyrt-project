import sinon from 'sinon';
import chai from 'chai';
import TaskRepository from '../../src/repositories/taskRepository';
import fakeGetAllData, { fakeGetAllByIdData } from './fakeData/fakeDataGet';
import chaiHttp from 'chai-http';
import { app } from '../../src/app';
import ITaskFakeData from 'interface/ITaskFakeData';


chai.use(chaiHttp);
const { expect } = chai;


describe('Checks if the GET/task route request with getAllTasks method arrives correctly', () => {
  before(() => {
    sinon.stub(TaskRepository.prototype, 'getAllTasks').resolves(fakeGetAllData.mock as unknown as ITaskFakeData[]);
  });

  after(() =>{
    (TaskRepository.prototype.getAllTasks as sinon.SinonStub).restore();
  });
  
  it('should return a object with all tasks and status 200', async () => {
    const { status, body } = await chai.request(app).get('/tasks');

    expect(status).to.be.equal(200);
    expect(body).to.be.an('array');
    expect(body).to.deep.equal(fakeGetAllData.response);
  });

  // Como retirar as chaves que eu quero de um fakeData.request
  // const { status, body } = await chai.request(app).post('/login').send({ ...fakeData.request, email: 1 });
});

describe('Checks if the GET/task route request with getTaskById method arrives correctly', () => {
  before(() => {
    sinon.stub(TaskRepository.prototype, 'getTaskById').resolves(fakeGetAllByIdData.mock as unknown as ITaskFakeData);
  });

  after(() =>{
    (TaskRepository.prototype.getTaskById as sinon.SinonStub).restore();
  });
  
  it('should return a object with all tasks and status 200', async () => {
    const { status, body } = await chai.request(app).get('/tasks/1');

    expect(status).to.be.equal(200);
    expect(body).to.be.an('object');
    expect(body).to.deep.equal(fakeGetAllByIdData.response);
  });
});