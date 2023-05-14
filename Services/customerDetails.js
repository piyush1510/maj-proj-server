const conf = require('./../index')

function customerDetails(){
    conn = conf.connections.db
    let users;
    console.log("in customer details")
    conn.execute(
        `select * from users `,(err,result,fields)=>{
            if(err){
                console.log(err);
            }
            else{
               users = result
            }
        }
    );
    return users;
}

module.exports={customerDetails}