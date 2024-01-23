import express from "express";

class Server {
  private app;

  constructor() {
    this.app = express();
  }

  private routerConfig() {
    this.app.use("/", (req, res) => {
      res.send("Sent from routerConfig");
    });
  }

  public start = (port: number) => {
    return new Promise((resolve, reject) => {
      this.app
        .listen(port, () => {
          resolve(port);
        })
        .on("error", (err: Object) => reject(err));
    });
  };
}

export default Server;
