module.exports=function(){

    this.dbConnections = [];

    this.dbConnections["RDSSQS"] = {
            host: process.env.EndPoint_rdsRDSSQS,
            port: process.env.Port_rdsRDSSQS,
            user: process.env.User_rdsRDSSQS,
            password: process.env.Password_rdsRDSSQS,
            database: "12345678",
        };
    };