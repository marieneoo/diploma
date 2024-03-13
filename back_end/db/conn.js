const mongoose = require('mongoose') //mongoose-y mongodb-i package-a, vory tuyl a talis infoyi poxanakum
const db = process.env.DATABASE;

mongoose.connect(db).then(()=>{
    console.log ("connection success")
}).catch((e)=>{
    console.log(e)
})