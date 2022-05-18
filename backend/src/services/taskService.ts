import TaskRepository from '../repositories/taskRepository';


export default class TaskService {
  constructor(private _taskRepository: TaskRepository) {

  }

  public async getAllTasks() {
    const response = await this._taskRepository.getAllTasks();

    return response;
  }
}