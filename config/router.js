const express =require('express')
const app = express.Router();
const controller = require("../controller/controller")

app.get('/',controller.getHomePage)
app.all("/add-article",controller.addNewPost)
app.get("/article/:id",controller.showOneArt)
app.all("/edit-article/:id",controller.updateOneArticle)
app.get("/delete-article/:id",controller.deleteOneArticle)



module.exports = app;