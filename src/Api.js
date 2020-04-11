import axios from "axios";

// function getUsers() {
//   console.log('get users called')
//     return axios.get("https://randomuser.me/api/?results=200&nat=us");  
// }

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


// function requestUsers() {
//   return new Promise((resolve, reject) => {
//       axios.get("https://randomuser.me/api/?results=200&nat=us").then((response) => {
//           resolve();
//       }).catch((err) => {
//           console.log(err);
//           reject(err);
//       })
//   })
// }

export default getUsers;