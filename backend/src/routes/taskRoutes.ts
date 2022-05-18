import { Router } from 'express';
import TaskController from '../controllers/taskController';

export default class TaskRoutes {
  constructor(
    private _router = Router(),
    private _taskController: TaskController,
  ) {
    this._router.post(
      '/',
      this._taskController.getAllTasks,
    );
  }

  get router() {
    return this._router;
  }
}