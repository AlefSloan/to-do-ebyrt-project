import prismaDb from "../../prisma";
export default class TaskRepository {

  public async getAllTasks() {
    const response = await prismaDb.task.findMany();

    return response;
  }

  public async createTask(title: string) {
    const response = await prismaDb.task.create({
      data: {
        title: title,
      }
    });

    return response;
  }
}
