//require enq anum bolor en dep-ery voronq mez petq en
const dotenv = require('dotenv')
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const app = express()
//vercnum enq ayn PORT-y vory haytararvac e config.env filum vortex menq pahum enq mez anhrajesht popoxakannery
//ete nranq unen krknman kariq(mek el vor mi texic poxenq mnacacn el poxvi)

dotenv.config({path:'./config.env'});
require('./db/conn.js')

const port = process.env.PORT;

const Users = require('./models/userScheme.js')

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send("hello")
} )

//registration
app.post('/register', async (req, res) => {
    res.send("ok")
    try{
        const name = req.body.name;
        const mail = req.body.mail;
        const password = req.body.password;

        const createUser = new Users({
            name: name,
            mail: mail,
            password: password
        })

        const created = await createUser.save()
        res.status(200).send('registered')
    } catch(error) {
        res.status(400).send(error)
    }
})

app.post('/login', async (req, res) =>{
    try {
        const name=req.body.name
        const mail=req.body.mail
        const password=req.body.password

        const user=await Users.findOne({mail:mail})
        if(user) {
            const isMatch=await bcrypt.compare(password,user.password)
            if(isMatch) {
                const token=await user.generateToken()
                res.cookie('jwt',token,{
                    express: new Date(Date.now()+86400000),
                    httpOnly: true 
                })
                res.status(200).send("LoggedIn")
            }else{
                res.status(400).send("Invalid Credentials")
            }
        }else{
            res.status(400).send("Invalid Credentials")
        }
    }catch(error){
        res.status(400).send(error)
    }
})

app.listen(port, ()=>{

    console.log("server is listening")
})