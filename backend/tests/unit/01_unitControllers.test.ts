import sinon from 'sinon';
import { expect } from 'chai';
import TaskController from '../../src/controllers/taskController';
import { NextFunction, Request, Response } from 'express';
import TaskService from '../../src/services/taskService';
import TaskRepository from '../../src/repositories/taskRepository';
import fakeTasks from './fakeData/fakeDataControllers';
import ITaskFakeData from 'interface/ITaskFakeData';

const mockServiceGetAll = new TaskService({} as TaskRepository);

describe('Tasks Controllers', () => {
  describe('Get All Tasks', () => {
    describe('When doesnt have tasks in the database', () => {
      const req = {} as Request
      const res = {} as Response
      const next = {} as NextFunction

      before(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns([]);

        sinon.stub(TaskService.prototype, 'getAllTasks').resolves([]);
      });

      after(() => {
        (TaskService.prototype.getAllTasks as sinon.SinonStub).restore();
      });

      it('return status 200', async () => {
        await new TaskController(mockServiceGetAll).getAllTasks(req, res, next);
        expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      });

      it('return a empty array in json', async () => {
        await new TaskController(mockServiceGetAll).getAllTasks(req, res, next);

        expect((res.json as sinon.SinonStub).calledWith([])).to.be.true;
      });
    });
    describe('When have tasks in the database', () => {
      const req = {} as Request
      const res = {} as Response
      const next = {} as NextFunction

      before(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(fakeTasks);

        sinon.stub(TaskService.prototype, 'getAllTasks').resolves(fakeTasks as unknown as ITaskFakeData[]);
      });

      after(() => {
        (TaskService.prototype.getAllTasks as sinon.SinonStub).restore();
      });

      it('return status 200', async () => {
        await new TaskController(mockServiceGetAll).getAllTasks(req, res, next);
        expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      });

      it('return a empty array in json', async () => {
        await new TaskController(mockServiceGetAll).getAllTasks(req, res, next);

        expect((res.json as sinon.SinonStub).calledWith(fakeTasks)).to.be.true;
      });
    })
  });
});
