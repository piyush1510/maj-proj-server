const express = require('express')
const cors = require('cors')
const morgan = require('morgan');
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;
const tempFakeData = [];
const mqFakeData = [];
// const empData = [
//     { count: 1, transactionDate: '12/03/2022', broughtFrom: "Reliance Pvt.lmd", value: 150, productId: "4587f#" },
//     { count: 2, transactionDate: '1/04/2022', broughtFrom: "Swadheshi Pvt.lmd", value: 250, productId: "45987#" },
//     { count: 3, transactionDate: '12/04/2022', broughtFrom: "Priya Pvt.lmd", value: 230, productId: "458fw#" },
//     { count: 4, transactionDate: '21/05/2022', broughtFrom: "Reliance Pvt.lmd", value: 270, productId: "4557f#" },
//     { count: 5, transactionDate: '12/10/2022', broughtFrom: "Priya Pvt.lmd", value: 110, productId: "5522f#" },
//     { count: 6, transactionDate: '23/10/2022', broughtFrom: "AMul Pvt.lmd", value: 100, productId: "4588f#" },
//     { count: 7, transactionDate: '25/10/2022', broughtFrom: "Reliance Pvt.lmd", value: 150, productId: "4187f#" },
// ]


// initDB

const conn = mysql.createConnection(
    {
        host:"localhost",
        port:3306,
        password:"mypassword",
        user:"root",
        database:"fsc_blockchain"
    }
)

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  conn.query(`create table IF NOT EXISTS products(
    product_id int,
    product_hash_id varchar(100),
    product_name  varchar(100),
    packaged_date Date
)`,function(error,result,fields){
    if (error) throw error;
    console.log("table created successfully");
})



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
const TOKEN = "abcdefgh-token";

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.post('/productDetails', (req, res) => {
    const { productId } = req.body;
    res.json({
        temp: tempFakeData,
        mq: mqFakeData,
        p: perishedPercentage
    })
})

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
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})