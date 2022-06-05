const announcementsList = document.getElementById('announcementsList');
let allAnnouncements = [];
// var months = [ "Oca", "Şub", "Mar", "Nis", "May", "Haz",
//            "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara" ];
// var selectedMonthName = months[value['month']];
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

            <li class="d-flex duyuru" onclick="location.href = 'duyuru-detay.html?announcementId=${announcement.id}'; console.log('you clicked to  '+${announcement.id});">
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
