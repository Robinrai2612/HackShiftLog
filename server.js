import express from "express";
import dynamo from "./assest_dynamo";
const app = express();
app.use(express.json());

// assest server

app.get("/asset/", async (req, res) => {
  res.json(await dynamo.getasset());
});
app.post("/asset/", async (req, res) => {
  try {
    const data = await dynamo.createorUpdateasset(req.body);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});
app.get("/asset/:id", async (req, res) => {
  try {
    const data = await dynamo.getassetById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});
app.delete("/asset/:id", async (req, res) => {
  try {
    await dynamo.deleteassetById(req.params.id);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
});


//task server

app.get("/task/", async (req, res) => {
  res.json(await dynamo.getTask());
});
app.post("/task/", async (req, res) => {
  try {
    const data = await dynamo.createorUpdateTask(req.body);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});
app.get("/task/:id", async (req, res) => {
  try {
    const data = await dynamo.getTaskById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});
app.delete("/task/:id", async (req, res) => {
  try {
    await dynamo.deleteTaskById(req.params.id);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
});


// round server


app.get("/round/", async (req, res) => {
  res.json(await dynamo.getround());
});
app.post("/round/", async (req, res) => {
  try {
    const data = await dynamo.createorUpdateround(req.body);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});
app.get("/round/:id", async (req, res) => {
  try {
    const data = await dynamo.getroundById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});
app.delete("/round/:id", async (req, res) => {
  try {
    await dynamo.deleteroundById(req.params.id);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
});
var server = app.listen(9010, () => {
  console.log("server is runnig on post 9010 ");
});

