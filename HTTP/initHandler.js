const { faker } = require('@faker-js/faker');
const empData = [1, 2, 3, 4, 5, 6].map(e => {
    return {
        count: e,
        transactionDate: faker.datatype.datetime().toISOString(),
        broughtFrom: faker.company.name(),
        value: faker.datatype.number({ min: 100, max: 300 }),
        productId: `${faker.datatype.number({ min: 4570, max: 4590 })}f#`
    }
})

const perishedPercentage = 70.2
for (let i = 0; i < 15; i++) {
    tempFakeData.push(faker.datatype.number({ min: 20, max: 35 }))
    mqFakeData.push(faker.datatype.number({ min: 1500, max: 2000 }))
}



function initHandler(app){
    app.get('/health',function(req,res,next){
          res.send("Health OK")
    });

    app.post('/productDetails', (req, res) => {
        const { productId } = req.body;
        res.json({
            temp: tempFakeData,
            mq: mqFakeData,
            p: perishedPercentage
        })
    });

    app.post('/retailersAuth', (req, res) => {
        const { email, password } = req.body;
        console.log(req.body);
        if (!email || !password) return res.json({ msg: "no password or email" })
        else if (email === "abcd" && password === "abcd")
            res.json({ token: "TOKEN" })
    })
    app.post('/retailersDashboard', (req, res) => {
        const { token } = req.body;
        console.log(req.body)
        if (token === "TOKEN")
            res.json({ in: empData, out: empData })
        else
            return res.json({ msg: "token missing" })
    })
}

module.exports = {initHandler}