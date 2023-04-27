function initHandler(app){
    app.get('/health',function(req,res,next){
          res.send("Health OK")
    })
}

module.exports = {initHandler}