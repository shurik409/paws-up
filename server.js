const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongodb = require("./mongodb");
const { MongoClient, ServerApiVersion } = require("mongodb");

// URL-адрес кластера MongoDB
const uri =
  "mongodb+srv://shurik409:hTnzJd74uT8cQaRy@pawsupcluster.omeirb9.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const app = express();
const PORT = process.env.PORT || 3001;

const reactBuild = path.join(__dirname, "build");
app.use(express.static(reactBuild));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use(bodyParser.json());

// app.get("/", async (req, res) => {
//   res.sendFile(path.join(reactBuild, "index.html"));
// });

app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname + "/build/index.html"));
});

app.get("/auction/", function (request, response) {
  response.sendFile(path.join(__dirname + "/build/index.html"));

  // response.sendStatus(404);
});

app.get("/auction/lot/:id", function (request, response) {
  const ids = ["1", "2", "3", "4", "5", "6", "7"];
  if (ids.includes(request.params.id)) {
    response.sendFile(path.join(__dirname + "/build/index.html"));
    return;
  }
  response.sendStatus(404);
});

app.get("/auction/results/:id", function (request, response) {
  const ids = ["1", "2", "3", "4", "5", "6", "7"];
  if (ids.includes(request.params.id)) {
    response.sendFile(path.join(__dirname + "/build/index.html"));
    return;
  }
  response.sendStatus(404);
});

client
  .connect()
  .catch((err) => console.error(err.stack))
  .then((db) => {
    app.locals.db = db;
    app.listen(PORT, () => console.log("server is running on " + PORT));
  });

app.get("/api/maxvalue/:id", async function (request, response) {
  const users = await mongodb.getUsers(request, request.params.id);
  if (users.length) {
    const max = users.reduce(function (prev, current) {
      return prev.money > current.money ? prev : current;
    });
    response.status(200).json({ max: max });
  } else {
    response.status(200).json({ max: { name: "", money: 0 } });
  }
});

app.get("/api/info/:id", async function (request, response) {
  const results = await mongodb.getUsers(request, request.params.id);

  response.status(200).json(results);
});

app.post("/api/auction", async function (request, response) {
  if (!request.body) {
    response.status(400).json({ message: "error" });
  } else {
    await mongodb.addUser(request, request.body);
    response.status(200).json({ message: "success" });
  }
});

// app.listen(PORT, () => console.log("server is running on " + PORT));
