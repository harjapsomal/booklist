const express = require("express");
const router = express.Router();
const todos = require("./todosController");

router.get("/todo", todos.index);
router.post("/todo/create", todos.create);
router.get("/todo/:id", todos.show);
router.delete("/todo/delete/:id", todos.delete);
router.put("/todo/update/:id", todos.update);

module.exports = router;
