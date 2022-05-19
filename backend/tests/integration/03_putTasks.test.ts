import sinon from 'sinon';
import chai from 'chai';
import TaskRepository from '../../src/repositories/taskRepository';
import chaiHttp from 'chai-http';
import { app } from '../../src/app';
import ITaskFakeData from 'interface/ITaskFakeData';
import fakePutData, { fakePutDataWithoutStatus, fakePutDataWithWrongStatus } from './fakeData/fakeDataPut';


chai.use(chaiHttp);
const { expect } = chai;


describe('Checks if the PUT/task route request with updateTask method arrives correctly', () => {
  before(() => {
    sinon.stub(TaskRepository.prototype, 'updateTask').resolves(fakePutData.mock as unknown as ITaskFakeData);
  });

  after(() =>{
    (TaskRepository.prototype.updateTask as sinon.SinonStub).restore();
  });
  
  it('should return a object with updated task and status 202', async () => {
    const { status, body } = await chai.request(app).put('/tasks/1').send(fakePutData.request);

    expect(status).to.be.equal(202);
    expect(body).to.be.an('object');
    expect(body).to.deep.equal(fakePutData.response);
  });
});

describe('Checks if the PUT/task route request with wrong status in updateTask method arrives correctly', () => {
  before(() => {
    sinon.stub(TaskRepository.prototype, 'updateTask').resolves(fakePutDataWithWrongStatus.mock as unknown as ITaskFakeData);
  });

  after(() =>{
    (TaskRepository.prototype.updateTask as sinon.SinonStub).restore();
  });
  
  it('should return a error message and status 400', async () => {
    const { status, body } = await chai.request(app).put('/tasks/1').send(fakePutDataWithWrongStatus.request);

    expect(status).to.be.equal(400);
    expect(body).to.be.an('object');
    expect(body).to.deep.equal(fakePutDataWithWrongStatus.response);
  });
});

describe('Checks if the PUT/task route request without status in updateTask method arrives correctly', () => {
  before(() => {
    sinon.stub(TaskRepository.prototype, 'updateTask').resolves(fakePutDataWithoutStatus.mock as unknown as ITaskFakeData);
  });

  after(() =>{
    (TaskRepository.prototype.updateTask as sinon.SinonStub).restore();
  });
  
  it('should return a error with message and status 400', async () => {
    const { status, body } = await chai.request(app).put('/tasks/1').send(fakePutDataWithoutStatus.request);

    expect(status).to.be.equal(400);
    expect(body).to.be.an('object');
    expect(body).to.deep.equal(fakePutDataWithoutStatus.response);
  });
});