const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.header.toLowerCase().includes(searchString) ||
            character.content.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('http://localhost:3001/announcements/getAll');
        console.log(res);
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <div  class="col-md-6 col-lg-4">
            <div class="blog-entry">
                <div class="text bg-white p-4">
                    <h3 class="heading">${character.header}</h3>
                    <p>${character.content}</p>
                    <p>Yazarı: ${character.authorId}</p>
                </div>
            </div>
            </div>

        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
