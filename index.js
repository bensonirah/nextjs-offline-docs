import express from "express";
import path from "path";
import "dotenv/config";

const {PORT} = process.env;

const app = express();

const addExtension = (req, res, next) => {
  const hasExtension = req.url.endsWith(".html");
  if (!hasExtension) {
    const url = req.url.substring(1);
    return res.sendFile(`${url}.html`, { root: process.cwd() });
  }
  next();
};

app.use("/docs", express.static(path.resolve(process.cwd(), "./docs")));
app.use("/_next", express.static(path.resolve(process.cwd(), "./_next")));
app.use("/static", express.static(path.resolve(process.cwd(), "./static")));
app.use(addExtension);

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: process.cwd() });
});

app.get("/docs/getting-started", (req, res) => {
  res.sendFile("docs/getting-started.html", { root: process.cwd() });
});

app.listen(PORT, () => {
  console.log(`server running on: ${PORT}`);
});
