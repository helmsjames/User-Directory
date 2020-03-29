import axios from "axios";

function getUsers() {
  console.log('get users called')
    return axios.get("https://randomuser.me/api/?results=200&nat=us");  
}

// const getUsers = async () => {
//   return axios.get("https://randomuser.me/api/?results=200&nat=us")
//   .then((res) => {
//     console.log(res.data)
//     let response =  res.data;
//     return response;
//   })
//   .catch(function(error){
//     console.log(error);
//   });
// }

export default getUsers;