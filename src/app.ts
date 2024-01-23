import server from "./server";

const port = 4000;

const starter = new server()
  .start(port)
  .then((port) => console.log(`Server is running on port ${port}`))
  .catch((error) => {
    console.log(error);
  });

export default starter;
