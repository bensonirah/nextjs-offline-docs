import express from "express";
import path from "path";
import "dotenv/config";
import open from "open";

const { PORT } = process.env;

const app = express();

const addExtension = (req, res, next) => {
  if(req.url.endsWith('.json')){
    next()
  }
  const hasHtmlExtension = req.url.endsWith(".html");
  if (!hasHtmlExtension) {
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
  res.sendFile("docs/getting-started.html", { root: process.cwd() });
});

app.listen(PORT,async () => {
  const URL = `http://localhost:${PORT}/docs/getting-started.html`;
  await open(URL);
  console.log(`server running on: ${URL}`);
});
