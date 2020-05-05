import axios from "axios";

const getUsers = async () => {
  return axios.get("https://randomuser.me/api/?results=200&nat=us")
  .then((res) => {
    // console.log('***************8response', res.data)
    let response =  res.data;
    return response;
  })
  .catch(function(error){
    console.log('******************8error', error);
  });
}

export default getUsers;