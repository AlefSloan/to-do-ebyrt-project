import prismaDb from "../../prisma";

export default class TaskRepository {

  public async getAllTasks() {
    const response = await prismaDb.task.findMany();

    return response;
  }
}
