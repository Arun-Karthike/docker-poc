//importing modules

const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

router.get('/contacts',(req, res, next)=>{
    Contact.find(function(err, contacts){
         res.json(contacts);
    })
});

//Adding Contacts

router.post('/contact', (req, res, next)=>{
	let newContact = new Contact({
             first_name: req.body.first_name,
             last_name: req.body.last_name,
             phone: req.body.phone
        });

        newContact.save((err, contact)=>{
             if(err)
             {
                res.json({msg: 'Failed to add contact'});
             }
             else{
                 res.json({msg: 'Successfully addedd contact'});;
             }
        });
});

//Delete Contacts

router.delete('/contact/:id', (req, res, next)=>{
	// add logic here
});

module.exports = router;
