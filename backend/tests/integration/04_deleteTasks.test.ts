import sinon from 'sinon';
import chai from 'chai';
import TaskRepository from '../../src/repositories/taskRepository';
import chaiHttp from 'chai-http';
import { app } from '../../src/app';
import ITaskFakeData from 'interface/ITaskFakeData';
import fakeDeleteTaskData from './fakeData/fakeDataDelete';


chai.use(chaiHttp);
const { expect } = chai;


describe('Checks if the DELETE/task route request with destroyTask method arrives correctly', () => {
  before(() => {
    sinon.stub(TaskRepository.prototype, 'destroyTask').resolves(fakeDeleteTaskData.mock as unknown as ITaskFakeData);
  });

  after(() =>{
    (TaskRepository.prototype.destroyTask as sinon.SinonStub).restore();
  });
  
  it('should return status 204 and finish the request', async () => {
    const { status, body } = await chai.request(app).delete('/tasks/1');

    expect(status).to.be.equal(204);
    expect(body).to.be.an('object');
    expect(body).to.deep.equal(fakeDeleteTaskData.response);
  });
});