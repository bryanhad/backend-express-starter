if (process.env.NODE_ENV !== "production") {
   // eslint-disable-next-line @typescript-eslint/no-require-imports
   require("dotenv").config();
}
import http from "http";
import app from "./app";
import { shutdown } from "./utils/server.util";

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

process.on("SIGINT", () => shutdown(server, "SIGINT"));
process.on("SIGTERM", () => shutdown(server, "SIGTERM"));

server.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
