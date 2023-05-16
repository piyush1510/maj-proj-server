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

    conn.execute(`create table if not exists users(
        user_id int NOT NULL AUTO_INCREMENT,
        user_name varchar(100),
        designation varchar(100),
        password varchar(100),
        primary key (user_id));`,(err,result,fields)=>{
           if(err){
            console.log(err);
           }
           else{
            console.log("Users table okkk!");
           }
    })

    conn.execute(
        `create table if not exists products(
            product_id int NOT NULL AUTO_INCREMENT,
            product_type varchar(100),
            product_name  varchar(100),
            brought_from varchar(100),
            weight_ int,
            price_ int,
            packaged_date DATETIME default(now()),
            device_mac_id varchar(150),
            primary key (product_id)
        );`,(err,result,field)=>{
        if(err){
            console.log(err);
           }
           else{
            console.log("Products table okkk!");
           }
    })

    conn.execute(
        `create table if not exists quality(
            product_id int,
            temperature int,
            humidity int,
            gas int,
            taken_at DATETIME default(now()),
            primary key (product_id,taken_at));`,(err,result,field)=>{
            if(err){
                console.log(err);
               }
               else{
                console.log("Qualuty table okkk!");
               }
    })

    conn.execute(
        `create table if not exists quantity(
            product_id int,
            product_stop varchar(50),
            weight_stop int,
            taken_at DATETIME default(now()),
            primary key (product_id, taken_at)
        );`,(err,result,field)=>{
            if(err){
                console.log(err);
               }
               else{
                console.log("Quantity table okkk!");
               }
    })

    return conn
}

module.exports =  {initServer, initDB}