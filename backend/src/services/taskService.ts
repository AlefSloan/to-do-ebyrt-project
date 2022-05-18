import TaskRepository from '../repositories/taskRepository';


export default class TaskService {
  constructor(private _taskRepository: TaskRepository) {

  }

  public async getAllTasks() {
    const response = await this._taskRepository.getAllTasks();

    return response;
  }

  public async getTaskById(id: number) {
    const response = await this._taskRepository.getTaskById(id);

    if (!response) return null;

    return response;
  }

  public async createTask(title: string) {
    const response = await this._taskRepository.createTask(title);

    return response;
  }

  public async updateTask(id: number, title: string, status: string) {

    const existTask = await this._taskRepository.getTaskById(id);

    if (!existTask) return null;

    const response = await this._taskRepository.updateTask(id, title, status);

    return response;
  }
}