import sinon from 'sinon';
import chai from 'chai';
import TaskRepository from '../../src/repositories/taskRepository';
import chaiHttp from 'chai-http';
import { app } from '../../src/app';
import ITaskFakeData from 'interface/ITaskFakeData';
import fakePatchData from './fakeData/fakeDataPatch';


chai.use(chaiHttp);
const { expect } = chai;


describe('Checks if the PATCH/task route request with finishTask method arrives correctly', () => {
  before(() => {
    sinon.stub(TaskRepository.prototype, 'finishTask').resolves(fakePatchData.mock as unknown as ITaskFakeData);
  });

  after(() =>{
    (TaskRepository.prototype.finishTask as sinon.SinonStub).restore();
  });
  
  it('should return a object with patched task and status 202', async () => {
    const { status, body } = await chai.request(app).patch('/tasks/1');

    expect(status).to.be.equal(202);
    expect(body).to.be.an('object');
    expect(body).to.deep.equal(fakePatchData.response);
  });
});