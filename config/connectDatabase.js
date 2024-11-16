const moongose = require('mongoose');

const connectDatabase=()=>{
    moongose.connect(process.env.DB_URL).then((con)=>{
        console.log('MongoDB connected to host:'+con.connection.host)
    })

}

module.exports = connectDatabase;