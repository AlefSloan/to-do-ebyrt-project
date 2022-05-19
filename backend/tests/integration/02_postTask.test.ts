import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import TaskRepository from '../../src/repositories/taskRepository';
import ITaskFakeData from 'interface/ITaskFakeData';
import fakePostData, { fakePostDataWithWrongTitle, fakePostDataWithoutTitle } from './fakeData/fakeDataPost';

import { app } from '../../src/app';


chai.use(chaiHttp);
const { expect } = chai;


describe('Checks if the POST/task route request with createTask method arrives correctly', () => {
  before(() => {
    sinon.stub(TaskRepository.prototype, 'createTask').resolves(fakePostData.mock as unknown as ITaskFakeData);
  });

  after(() =>{
    (TaskRepository.prototype.createTask as sinon.SinonStub).restore();
  });
  
  it('should return a object with created Task and status 201', async () => {
    const { status, body } = await chai.request(app).post('/tasks').send(fakePostData.request);

    expect(status).to.be.equal(201);
    expect(body).to.be.an('object');
    expect(body).to.deep.equal(fakePostData.response);
  });
});

describe('Checks if the POST/task route request with wrong title in createTask method arrives with a error', () => {
  before(() => {
    sinon.stub(TaskRepository.prototype, 'createTask').resolves(fakePostDataWithWrongTitle.mock as unknown as ITaskFakeData);
  });

  after(() =>{
    (TaskRepository.prototype.createTask as sinon.SinonStub).restore();
  });
  
  it('should return a error with message and status 400', async () => {
    const { status, body } = await chai.request(app).post('/tasks').send(fakePostDataWithWrongTitle.request);

    expect(status).to.be.equal(400);
    expect(body).to.be.an('object');
    expect(body).to.deep.equal(fakePostDataWithWrongTitle.response);
  });
});

describe('Checks if the POST/task route request without title in createTask method arrives correctly', () => {
  before(() => {
    sinon.stub(TaskRepository.prototype, 'createTask').resolves(fakePostDataWithoutTitle.mock as unknown as ITaskFakeData);
  });

  after(() =>{
    (TaskRepository.prototype.createTask as sinon.SinonStub).restore();
  });
  
  it('should return a error with message and status 400', async () => {
    const { status, body } = await chai.request(app).post('/tasks').send(fakePostDataWithoutTitle.request);

    expect(status).to.be.equal(400);
    expect(body).to.be.an('object');
    expect(body).to.deep.equal(fakePostDataWithoutTitle.response);
  });
});