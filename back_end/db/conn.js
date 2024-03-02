const mongoose = require('mongoose')
const db = process.env.DATABASE;

mongoose.connect(db).then(()=>{
    console.log ("connection success")
}).catch((e)=>{
    console.log(e)
})