const announcementsList = document.getElementById('announcementsList');
let allAnnouncements = [];
// let date='';
// let year = text.substr(0, 4);
// let month = text.substr(5, 2);
// let day = text.substr(8, 2);

const loadAnnouncements = async () => {
    try {
        const res = await fetch('http://localhost:3001/announcements/getAll');
        console.log(res);
        allAnnouncements = await res.json();
        displayAnnouncements(allAnnouncements);
    } catch (err) {
        console.error(err);
    }
};


const displayAnnouncements = (announcements) => {
    const htmlString = announcements
        .map((announcement) => {
            return `



            <li class="d-flex duyuru" onclick="location.href = 'duyuru-detay.html';">
                <div class="date">
                    <span>${announcement.createdAt.substr(8, 2)}/${announcement.createdAt.substr(5, 2)}/${announcement.createdAt.substr(2, 2)}</span>
                </div>
                <div class="explanation">
                    ${announcement.header}
                </div>
            </li>

        `;
        })
        .join('');
    announcementsList.innerHTML = htmlString;
};

loadAnnouncements();
