const api_url = 'http://localhost:3001/blogs/getOne/2';
async function getSingleBlog() {
  const response = await fetch(api_url);
  const data = await response.json();
  const {
    header,
    content,
    authorId
  } = data;
  const user_id_string=authorId.toString();
  const user_api='http://localhost:3001/users/getOne/'+user_id_string;

  const userresponse = await fetch(user_api);
  const userdata = await userresponse.json();



  document.getElementById("blog-header").textContent = header;
  document.getElementById("blog-content").textContent = content;
  document.getElementById("author-name").textContent = userdata.name;
  console.log(content);
  console.log(header);
  console.log(authorId);
  console.log(user_id_string);
  console.log(user_api);
  console.log(userdata.name);
}

getSingleBlog();
