import { Router } from 'express';
import TaskController from './controllers/taskController';
import TaskRepository from './repositories/taskRepository';
import TaskRouter from './routes/taskRoutes';
import TaskService from './services/taskService';

export default class Factory {
  public static get taskRouter() {
    const repository = new TaskRepository();
    const service = new TaskService(repository);
    const controller = new TaskController(service);
    const router = new TaskRouter(Router(), controller);

    return router.router;
  }
}
