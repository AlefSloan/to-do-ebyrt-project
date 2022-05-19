import { Router } from 'express';
import TaskMiddleware from '../middlewares/taskMiddleware';
import TaskController from '../controllers/taskController';

export default class TaskRoutes {

  constructor(
    private _router = Router(),
    private _taskController: TaskController,
  ) {
    this._router.get('/', this._taskController.getAllTasks);
    this._router.get('/:id', this._taskController.getTaskById);
    this._router.post('/', TaskMiddleware.validateTitle, this._taskController.createTask);
    this._router.put('/:id', TaskMiddleware.validateTitle, this._taskController.updateTask);
    this._router.delete('/:id', this._taskController.destroyTask);
    this._router.patch('/:id', this._taskController.finishTask);
  }

  get router() {
    return this._router;
  }
}
