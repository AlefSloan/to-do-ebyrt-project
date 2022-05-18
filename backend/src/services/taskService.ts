import TaskRepository from '../repositories/taskRepository';


export default class TaskService {
  constructor(private _taskRepository: TaskRepository) {

  }

  public async getAllTasks() {

    return 'allTasks';
  }
}