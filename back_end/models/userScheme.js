const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')// require enq arel en package-y, vori mijocov karoxanum enq generate anel token

const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})
//hashing password
userScheme.pre('save',async function(next){
    if(this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password,10)
    }
    next()
})

//generate tokens to verify user
userScheme.methods.generateToken = async function(){
    try{
        let generatedToken = jwt.sign({_id:this._id},process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:generatedToken})
        await this.save()
        return generatedToken
    }catch(error){
        console.log(error)
    }
}

//create model

const Users = new mongoose.model('USER',userScheme)
module.exports = Users