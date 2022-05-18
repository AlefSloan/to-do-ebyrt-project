import prismaDb from "../../prisma";
export default class TaskRepository {

  public async getAllTasks() {
    const response = await prismaDb.task.findMany();

    return response;
  }

  public async getTaskById(id: number) {
    const response = await prismaDb.task.findUnique({
      where: {
        id: id,
      },
    });

    return response;
  }

  public async createTask(title: string) {
    const response = await prismaDb.task.create({
      data: {
        title: title,
      },
    });

    return response;
  }

  public async updateTask(id: number, title: string, status: string) {
    const response = await prismaDb.task.update({
      data: {
        title: title,
        status: status,
      },
      where: {
        id: id
      },
    });

    return response;
  }

  public async destroyTask(id: number) {
    const response = await prismaDb.task.delete({
      where: {
        id: id,
      },
    });

    return response;
  }
}
