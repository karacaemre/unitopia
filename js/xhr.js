const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';

    if (data) {
      xhr.setRequestHeader('Content-Type', 'application/json');
    }


    xhr.onload = () => {

      resolve(xhr.response);
      // const data = JSON.parse(xhr.response);
      // console.log(data);

    };
    xhr.send(JSON.stringify(data));
  });
  return promise;
};

const getData = () => {

  sendHttpRequest('GET', 'http://192.168.1.49:3001/users').then(responseData => {
    console.log(responseData);
  });

};

const sendData = () => {
  sendHttpRequest('POST', 'http://192.168.1.49:3001/users', {

    email: "emre@test.com",
    name: "Emre Test",
    password: "123456hash",
    role: "admin"

  }).then(responseData => {
    console.log(responseData);
  });
};

if (getBtn) {
  getBtn.addEventListener("click", getData);
}

if (postBtn) {
  postBtn.addEventListener('click', sendData);

}
