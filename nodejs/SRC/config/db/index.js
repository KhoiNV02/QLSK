//kết nối database
const mongoose = require('mongoose');
async function connect(){
try{
    await mongoose.connect('mongodb+srv://bietdoibaothu:bietdoibaothu@cluster0.duwjpta.mongodb.net/QuanLySuKien');
    
    console.log('susseccfully');
}
catch(error){
    console.log('failure');
}
}
module.exports={connect};