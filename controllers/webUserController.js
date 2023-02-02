const { webUserModel } = require("../models/WebUser")
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    direct: true,
    host: 'smtp.yandex.com',
    port: 465,
    auth: {
        user: 'cagatay.yildiz@neominal.com',
        pass: 'xpioqsemuckxloiv'
    },
    secure: true
})



const webUserController = {
    getAll: (req, res) => {
        webUserModel.find({ isDeleted: false }, (err, docs) => {
            if (!err)
                res.json(docs)
            else
                res.status(500).json(err);
        })
    },
    login: (req, res) => {

        let email = req.body.email;
        let password = req.body.password;
        webUserModel.findOne({ email: email, password: password }, (err, doc) => {

            if (!err) {
                if (doc) {
                    //Öncelikle email gönderiyorum
                    let confirmCode = Math.floor(Math.random() * 999999);

                    var mailOptions = {
                        from: 'cagatay.yildiz@neominal.com',
                        to: doc.email,
                        subject: 'Login Confirm Code',
                        text: 'Confirm Code: ' + confirmCode
                    };

                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            return console.log(error);
                        }
                        
                        doc.confirmCode = confirmCode;

                        doc.save((saveErr,saveDoc) => {
                            if(!saveErr){
                                res.json(saveDoc);
                            }
                            else{
                                res.status(500).json(saveErr)
                            }
                        })
                    });
                }
                else {
                    res.status(404).json({ msg: 'not found' });
                }
            }
            else {
                res.status(500).json(err);
            }

        })

    },
    confirmCode: (req,res) => {
        let confirmCode = req.body.confirmCode;
        let webUserId = req.body.webUserId;

        webUserModel.findOne({confirmCode: confirmCode, id: webUserId, isDeleted:false}, (err,doc) => {
            if(!err){
                if(doc){
                    res.json(doc);
                }
                else{
                    res.status(404).json({'message': 'not found'});
                }
            }
            else{
                res.status(500).json(err)
            }
        })
    }
}

module.exports = {
    webUserController
}

