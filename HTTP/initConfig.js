require('dotenv').config(); 


const conf = {
    primaryInfo:{
        isDevMode:true,
        serverPort:parseInt(process.env.SERVER_PORT),
    },
    connectivity:{
        mySqlHost:"localhost",
        mySqlUser:"root",
        mySqlPort:parseInt(process.env.MYSQL_PORT),
        mySqlPassword:"mypassword",
        db:"fsc_blockchain"
    },
    connections:{
        db:null
    }
}

module.exports = {conf}