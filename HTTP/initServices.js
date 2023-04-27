const mysql = require('mysql2')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan');


function initServer(conf){
    const app = express();
    app.use(cors())
    app.use(morgan("dev"))
    app.use(express.json())
    app.listen(conf.primaryInfo.serverPort,()=>{
        console.log(`App is running on port ${conf.primaryInfo.serverPort}`);
    })

    return app
}


async function initDB(conf){
    const conn = mysql.createConnection({
       host: conf.connectivity.mySqlHost,
       port: conf.connectivity.mySqlPort,
       password: conf.connectivity.mySqlPassword,
       user: conf.connectivity.mySqlUser,
       database: conf.connectivity.db,
    });
    conf.connections.db = conn

    return conn
}

module.exports =  {initServer, initDB}