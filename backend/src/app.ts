import express from 'express';

class App {
  public app: express.Application;
  // ...

  constructor() {
    this.app = express();
    this.app.use(express.json());

    this.config();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'GET,POST,DELETE,OPTIONS,PUT,PATCH',
      );
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
  }

  // ...
  public start(PORT: string | number): void {
    this.app.listen(PORT, () => {
      console.log(`Server is running at PORT: ${PORT}`);
    });
  }
}

export { App };

export const { app } = new App();