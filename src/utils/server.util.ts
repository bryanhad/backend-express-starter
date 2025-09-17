import { Server } from "http";

export function shutdown(httpServer: Server, signal: string) {
   console.log(`${signal} received. Shutting down gracefully...`);
   httpServer.close(() => {
      console.log("Server stopped.");
      process.exit(0);
   });
}
