const {conf} = require('./HTTP/initConfig')
const {initServer, initDB} = require('./HTTP/initServices')
const {initHandler} = require("./HTTP/initHandler")


const config = conf;
const app = initServer(config)

initDB(config)

initHandler(app,config)


exports.module = {config}