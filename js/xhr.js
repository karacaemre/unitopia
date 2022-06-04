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

      if (xhr.status >= 400) {
        reject(xhr.response);
      }
      else{

        resolve(xhr.response);
      }
      // const data = JSON.parse(xhr.response);
      // console.log(data);

    };

    xhr.onerror = () => {
      reject('Bir hata oldu!');
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
};

const getData = () => {

  sendHttpRequest('GET', 'http://localhost:3001/users/getAll').then(responseData => {
    console.log(responseData);
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
