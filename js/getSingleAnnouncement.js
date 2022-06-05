const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const announcementId = urlParams.get('announcementId');
const announcement_api_url = 'http://localhost:3001/announcements/getOne/'+announcementId;

async function getSingleAnnouncement() {
  const response = await fetch(announcement_api_url);
  const data = await response.json();
  const {
    header,
    content,
    authorId
  } = data;
  const user_id_string = authorId.toString();
  const user_api = 'http://localhost:3001/users/getOne/' + user_id_string;

  const userresponse = await fetch(user_api);
  const userdata = await userresponse.json();

  document.getElementById("announcement-header").textContent = header;
  document.getElementById("announcement-content").textContent = content;
  // document.getElementById("announcement-author-name").textContent = userdata.name;

}

getSingleAnnouncement();
