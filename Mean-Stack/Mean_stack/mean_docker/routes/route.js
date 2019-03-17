const express = require("express");
const router = express.Router();
const contactcontroller = require("../controllers/contact.controller");

router.get("/contacts",(req,res,next)=>{
    contactcontroller.getContacts((err,result)=>{
        res.json(result);
    })
});
router.post("/contacts",(req,res,next)=>{
    contactcontroller.addContacts(req.body,(err,result)=>{
        console.log(result);
        res.json(result);
    })
});
router.delete("/contacts/:id",(req,res,next)=>{
    contactcontroller.deleteContacts(req.params,(err,result)=>{
        res.json(result);
    })
});
module.exports = router;