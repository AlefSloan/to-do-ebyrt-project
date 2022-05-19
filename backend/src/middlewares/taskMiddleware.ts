import { RequestHandler } from 'express';

export default class TaskMiddleware {
  
  public static validateTitle: RequestHandler = async (req, res, next) => {
    const { title } = req.body;

    if(!title) return res.status(400).json({ message: "Fields \"Title\" must be filled" });

    if(title.length <= 5) return res.status(400).json({ message: "Fields \"Title\" must be at least 5 characters long" });
    
    next();
  }

  public static validateStatus: RequestHandler = async (req, res, next) => {
    const { status } = req.body;

    if(!status) return res.status(400).json({ message: "Fields \"Status\" must be filled" });

    if(status !== 'pendente' && status !== 'em andamento' && status !== 'pronto') {
      return res.status(400).json({ message: "Fields \"Status\" must be \"pendente\", \"em andamento\" or \"pronto\"" });
    }

    next();
  }
}
