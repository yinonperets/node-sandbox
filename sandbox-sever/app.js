const chalk = require("chalk");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8181;

app.listen(PORT, () =>
  console.log(chalk.yellowBright(`listening on: http://localhost:${PORT}`))
);

app.get("/user", (req, res, next) => {
  req.send({ name: "user", age: 55 });
});

app.post("/", (req, res, next) => {
  req.send({ name: "user", age: 55 }, { name: "second", age: 3 });
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  req.send(`user ${id} deleted`);
});

// home work //

app.get("/headers", (req, res, next) => {
  const headers = req.header;
  console.log(chalk.magenta("request headers"), headers);
  res.send(headers);
  next();
});

app.get("/params", (req, res, next) => {
  const params = req.params;
  console.log(chalk.magenta("request params"), params);
  res.send(params);
  next();
});

app.get("/query", (req, res, next) => {
  const query = req.query;
  console.log(chalk.magenta("request query params"), query);
  res.send(query);
  next();
});

app.use(express.json());
app.get("/body", (req ,res, next) => {
  const body = req.body;
  console.log(chalk.magenta("request body"), body);
  res.json(body)
  next();
});


app.get("/custom", (req, res) => {
  req.user = {
    name: "yinon",
    id: 313411704
  };
  console.log(chalk.magenta("request custom"), req.user);
  res.send(req.user);
});
