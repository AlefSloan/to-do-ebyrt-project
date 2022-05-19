import { RequestHandler } from 'express';
import { nextTick } from 'process';
import TaskService from '../services/taskService';

export default class TaskController {
  constructor(private _taskService: TaskService) {

  }

  public getAllTasks: RequestHandler = async (_req, res, next) => {
    try {
      const response = await this._taskService.getAllTasks();

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  };

  public getTaskById: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;

      const response = await this._taskService.getTaskById(parseInt(id, 10));

      if (!response) return res.status(404).json({ message: "Task no found!" })

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  };

  public createTask: RequestHandler = async (req, res, next) => {
    try {
      const { title } = req.body;

      const response = await this._taskService.createTask(title);

      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  };

  public updateTask: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { title, status } = req.body;

      const response = await this._taskService.updateTask(parseInt(id, 10), title, status);

      if (!response) return res.status(404).json({ message: "Task not found!" })

      res.status(202).json(response);
    } catch (err) {
      next(err);
    }
  };

  public destroyTask: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;

      const response = await this._taskService.destroyTask(parseInt(id, 10));

      if (!response) return res.status(404).json({ message: "Task not found!" })

      res.status(204).end();
    } catch (err) {
      next(err);
    }
  };

  public finishTask: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;

      const { status } = req.body;

      const response = await this._taskService.finishTask(parseInt(id, 10));

      if (!response) return res.status(404).json({ message: "Task not found!" })

      res.status(202).json(response);
    } catch (err) {
      next(err);
    }
  };
}