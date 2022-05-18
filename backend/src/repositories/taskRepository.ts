import prismaDb from '../../prisma/index';

export default class TaskRepository {
  public async getAllTasks() {
    const response = await prismaDb.task.findMany();

    return response;
  }

  public async getTaskById(id: number) {
    const response = await prismaDb.task.findUnique({
      where: {
        id,
      },
    });

    return response;
  }

  public async createTask(title: string) {
    const response = await prismaDb.task.create({
      data: {
        title,
      },
    });

    return response;
  }

  public async updateTask(id: number, title: string) {
    const response = await prismaDb.task.update({
      data: {
        title,
      },
      where: {
        id,
      },
    });

    return response;
  }

  public async destroyTask(id: number) {
    const response = await prismaDb.task.delete({
      where: {
        id,
      },
    });

    return response;
  }

  public async finishTask(id: number, status: string) {
    const response = await prismaDb.task.update({
      data: {
        status,
      },
      where: {
        id,
      },
    });

    return response;
  }
}
