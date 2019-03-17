const Contacts = require("../models/contacts");

let contactController = {
    getContacts : getContacts,
    addContacts : addContacts,
    deleteContacts : deleteContacts
};

function getContacts(done){
    Contacts.find((err,contactlist)=>{
       if(err){
           return done(null,[]);
       }else{
           return done(null,contactlist);
       }
   })
}
function addContacts(data,done){
  let newcontact = new Contacts();
  newcontact.firstname = data.firstname;
  newcontact.lastname = data.lastname;
  newcontact.phone = data.phone;
  newcontact.save((err,contact)=>{
      if(err){
          return done(null,{msg : "Failed to add Contacts"});
      }else{
        return done(null,{msg : "Contact added successfully"});
      }
  })
 }
function deleteContacts(data,done){
    Contacts.remove({_id : data.id},(err,result)=>{
        if(err){
            return done(null,err);
        }else{
          return done(null,result);
        }
    })
}
module.exports = contactController;