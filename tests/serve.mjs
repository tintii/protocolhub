import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
export async function serve(base = "/protocolhub/") {
  const root = path.resolve("dist");
  const server = http.createServer(async (req, res) => {
    try {
      const address = new URL(req.url, "http://localhost");
      if (!address.pathname.startsWith(base)) {
        res.writeHead(404);
        res.end("Missing base");
        return;
      }
      let file = path.resolve(
        root,
        decodeURIComponent(address.pathname.slice(base.length)),
      );
      if (file !== root && !file.startsWith(root + path.sep)) {
        res.writeHead(404);
        res.end();
        return;
      }
      const stat = await fs.stat(file);
      if (stat.isDirectory()) file = path.join(file, "index.html");
      const mime =
        {
          ".html": "text/html",
          ".js": "text/javascript",
          ".css": "text/css",
          ".json": "application/json",
          ".wasm": "application/wasm",
          ".woff2": "font/woff2",
          ".svg": "image/svg+xml",
          ".gif": "image/gif",
          ".png": "image/png",
        }[path.extname(file)] || "application/octet-stream";
      res.writeHead(200, { "Content-Type": mime });
      res.end(await fs.readFile(file));
    } catch {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(await fs.readFile(path.join(root, "404.html")));
    }
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  return {
    server,
    origin: `http://127.0.0.1:${server.address().port}`,
    close: () => new Promise((resolve) => server.close(resolve)),
  };
}
