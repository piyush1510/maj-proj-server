function initHandler(app){
    app.get('/health',function(req,res,next){
          res.send("Health OK")
    });
    app.post('/retailersAuth', (req, res) => {
        const { email, password } = req.body;
        console.log(req.body);
        if (!email || !password) return res.json({ msg: "no password or email" })
        else if (email === "abcd" && password === "abcd")
            res.json({ token: TOKEN })
    })
    app.post('/retailersDashboard', (req, res) => {
        const { token } = req.body;
        console.log(req.body)
        if (token === TOKEN)
            res.json({ in: empData, out: empData })
        else
            return res.json({ msg: "token missing" })
    })
}

module.exports = {initHandler}