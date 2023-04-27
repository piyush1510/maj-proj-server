const conf = {
    primaryInfo:{
        isDevMode:true,
        serverPort:5000,
    },
    connectivity:{
        mySqlHost:"localhost",
        mySqlUser:"root",
        mySqlPort:3306,
        mySqlPassword:"mypassword",
        db:"fsc_blockchain"
    },
    connections:{
        db:null
    }
}

module.exports = {conf}