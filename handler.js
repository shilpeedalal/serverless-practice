
import { connectDb } from "./dbConnection.js";
import { createUser, deleteUser, getUsers } from "./userModel.js";

export const getUserData = async (event) => {
  console.log("getUserData function started");
  await connectDb()
  const response = await getUsers()
  if(!response){
    return {
      statusCode: 400,
      message: "Not found"
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "User details successfully fetched",
      data: response
    }),
  };
};

export const createNewUser = async (event) => {
  console.log("createNewUser function started");
  let bodyData = JSON.parse(event.body);
  console.log(bodyData);

  await connectDb()
  const response = await createUser(bodyData)
  console.log("Response", response);
  if(!response){
    return {
      statusCode: 400,
      message: "User not created"
    }
  }
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "User details successfully created!",
      data: response
    }),
  };
};

export const deleteExistingUser = async(event) => {
  console.log("delete api started");
  let { email } = JSON.parse(event.body)
  console.log(email);

  await connectDb()
  const response = await deleteUser({email}) 
  console.log("Response", response);
  if(!response){
    return{
      statusCode: 400,
      message: 'user not found'
    }
  }
  return{
    statusCode: 200,
    body: JSON.stringify({
      message : 'User successfully deleted',
      data: response
    })
  }
}

// comment
