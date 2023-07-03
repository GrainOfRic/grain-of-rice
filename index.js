// import express from "express";
// import {createServer} from "http";
// import path from "path";

// const app = express();
// const server = createServer(app);

// // Подключение статических файлов из текущей директории
// const staticFilesPath = path.join(__dirname);
// // const staticFilesPath = path.join(__dirname);
// app.use(express.static(staticFilesPath));

// const PORT = 3000;
// // const HOST = "localhost";
// const HOST = "127.0.0.1";

// server.listen(PORT, HOST, () => {
//   console.log(`Server is running at http://${HOST}:${PORT}`);
// });

import express from "express";
import {createServer} from "http";
import {fileURLToPath} from "url";
import path, {dirname} from "path";

const app = express();
const server = createServer(app);

// Подключение статических файлов из папки "dist"
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const staticFilesPath = path.join(__dirname);
app.use(express.static(staticFilesPath));

const PORT = 3000;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
