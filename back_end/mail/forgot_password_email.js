require('dotenv').config()
const nodeMailer=require('nodemailer')

app.post('/forgot_password', async(req, res)=>{
    try{
        const mail = req.body.mail;
        

        const createMail = newMails({
            mail:mail
        })
        const createdMail = await createMail.save();
        res.status(200).send('email sent')
    }catch(err){
        res.startus(400).send(err)
}})

const sendEmail=async(option)=>{
    try{
        const transporter=nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        })
        const mailOption={
            from: process.env.EMAIL,
            to: option.email,
            subject: option.subject,
            html: option.message
        }
        await transporter.sendMail(mailOption,(err,info)=>{
    if(err) console.log(err)
})
    }catch(err){
        console.log(err)
    }
}
const mailTemplate=(content, buttonURL, buttonText)=>{
    return `<!DOCTYPE html>
    <html>
    <body>
    <div>
    <button>Change Password</button>
    </div>
    </body>
    </html>
    `
}