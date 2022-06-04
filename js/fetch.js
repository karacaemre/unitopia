const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');



const getData = () => {

fetch('http://localhost:3001/users').then(response => {
  console.log(response);
});

};

const sendData = () => {
  sendHttpRequest('POST', 'http://localhost:3001/users/create', {

    email: "teseettiir@test.com",
    name: "Emrrete Test2",
    password: "123e4536hashh",
    role: "tesetrtir"

  }).then(responseData => {
    console.log(responseData);
  }).catch(err => {
    console.log(err);
  });
};

if (getBtn) {
  getBtn.addEventListener("click", getData);
}

if (postBtn) {
  postBtn.addEventListener('click', sendData);

}
