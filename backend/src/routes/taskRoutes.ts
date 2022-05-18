import { Router } from 'express';
import TaskController from '../controllers/taskController';

export default class TaskRoutes {
  constructor(
    private _router = Router(),
    private _taskController: TaskController,
  ) {
    this._router.get('/', this._taskController.getAllTasks);
    this._router.get('/:id', this._taskController.getTaskById);
    this._router.post('/', this._taskController.createTask);
  }

  get router() {
    return this._router;
  }
}