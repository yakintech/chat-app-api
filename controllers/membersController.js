const { members } = require("../models/Members")

const membersController={
    getAll:(req,res)=>{
        members.find({isDeleted:false}).populate("groupId").exec((err,docs)=>{
            if(!err){
                res.json(docs)
            }else{
                res.status(500).json(err)
            }
        })
    },
    // getPost:(req,res)=>{
    //     let newMember= new members({
    //         membersName:req.body.membersName,
    //         groupId:req.body.groupId,
    //         isDeleted: false,
    //         date: req.body.date,

    //     })
    //     newMember.save(function(err,doc){
    //         if(!err){
    //             res.json(doc)
    //         }else{
    //             res.status(500).json(err)
    //         }
    //     })
    // }
}

module.exports={
    membersController
}