import { RequestHandler } from 'express';
import TaskService from '../services/taskService';

export default class TaskController {
  constructor(private _taskService: TaskService) {

  }

  public getAllTasks: RequestHandler = async (_req, res, _next) => {
    try {
      const response = await this._taskService.getAllTasks();

      res.status(200).json(response);
    } catch (err) {
      console.log(err);

      res.status(500).json({ err });
    }
  };
}