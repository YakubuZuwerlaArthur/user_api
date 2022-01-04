const express = require('express');
require('dotenv').config();  
const app = express();
const PORT =process.env.PORT || 2245;
//importing mongoose 
const mongoose = require('mongoose');
// importing userController
const userController = require('./controllers/usercontroller');

app.use(express.json());


app.get('/',(request,response)=>{
    response.status(200) .json({Message:"hello welcome to my user APT"});
}
)

app.post('/user',userController.addUser);
app.get ('/user',userController.getAllUser);
app.put('/user',userController.updateById);
app.delete('/user',userController.deleteById);
app.get('/user/:userId',userController.getUserById);

// listening to request on localhost port 5010
app.listen(PORT,() => {
    console.log("My server is Up and running on port:",PORT);
    // connecting to the database
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log("DataBase is connected");
    })
    .catch(function(error){
        // console.log("DataBase not connect",error);
        console.log("DataBase not connected" ,error);
    });
});

