const {Article} = require("../model/Article")

const getHomePage = (req,res) =>{
       Article.find()
       .then(result =>
          res.render("index",{result}))
       .catch(err =>console.log(err))
};

const addNewPost=(req,res)=>{
    if(req.method ==="GET"){
        res.render("addArticle",{err:false})
    }
    if(req.method ==="POST"){
       const article = new Article(req.body)
       article.save()
            .then(result=>res.redirect('/'))
            .catch(err =>res.render('addArticle',{err:err.errors}))
    }

}

const showOneArt = (req,res)=>{
    Article.findById({_id:req.params.id})
        .then(result=>{
            console.log(result)
            res.render('show',{result})})
        .catch(err=>console.log(err))
}

const updateOneArticle = (req,res)=>{
      if(req.method ==="GET"){
         Article.findById({_id:req.params.id})
        .then(result=>{
            console.log(result)
            res.render('editArticle',{result})})
        .catch(err=>console.log(err))
    }
      if(req.method ==="POST"){
         Article.findByIdAndUpdate({_id: req.params.id})
        .then(result=>{
            result.title = req.body.title
            result.article = req.body.article
            result.save()
            .then(()=>
            res.redirect('/'))
            .catch(err=>console.log(err))
    }
           )
    .catch(err=>console.log(err))

    }
}
const deleteOneArticle =(req,res)=>{
     Article.findByIdAndDelete({_id: req.params.id})
        .then(result=>
            res.redirect('/'))
        .catch(err=>console.log(err))
}

module.exports = {
    getHomePage,
    addNewPost,
    showOneArt,
    updateOneArticle,
    deleteOneArticle
}