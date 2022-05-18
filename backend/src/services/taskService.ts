import TaskRepository from '../repositories/taskRepository';


export default class TaskService {
  constructor(private _taskRepository: TaskRepository) {

  }

  public async getAllTasks() {
    const response = await this._taskRepository.getAllTasks();

    return response;
  }

  public async createTask(title: string) {
    const response = await this._taskRepository.createTask(title);

    return response;
  }
}