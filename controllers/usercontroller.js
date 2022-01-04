const userModel = require('../Models/userModel');

 async function addUser(request,response){
   try {
    const newUser = await userModel.create(request.body);
    response.status(200).json(newUser);
   } catch (error) {
       console.log("Something went wrong",error.message);
   }
}

async function getAllUser(request,response){
try {
  const getAll =await userModel.find();
  response.status(200).json(getAll) ;
} catch (error) {
  console.log('something went wrong',error.message); 
  response.status(400) 
}
}


async function getUserById(request,response){
    try {
     const get1users =await userModel.findById(request.params.UserId);
     response.status(200).json (get1users);  
    } catch (error) {
     console.log('something went wrong',error.message);   
    }
}

async function updateById (request,response){
    try {
     const updateId=await userModel.findByIdAndUpdate(request.params.userId,request.body);
     response.status(200).json(updateId);
    }
     catch (error) {
      console.log('something wwent wrong',error.message); 
    }

}
async function deleteById(request,response){
try {
  await userModel.findByIdAndDelete(request.params.userId); 
  response.status(200).json({message:"user deleted"});
} catch (error) {
    console.log("something went wrong",error.message);
    
}
}

module.exports ={
    addUser,
    getAllUser,
    updateById,
    deleteById,
    getUserById
}