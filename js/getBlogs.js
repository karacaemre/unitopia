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
        const res = await fetch('http://localhost:3001/blogs/getAll');
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

          if(character.status=='approved'){
            return `
            <div class="col-md-6 col-lg-4">
            <div class="blog-entry">
            <a href="blog-single.html?blogId=${character.id}" class="block-20 d-flex align-items-end" style="background-image: url('images/blog_ses.webp');">
                <div class="meta-date text-center p-2">
                    <span class="day">${character.createdAt.substr(8, 2)}</span>
                    <span class="mos">${character.createdAt.substr(5, 2)}</span>
                    <span class="yr">${character.createdAt.substr(0, 4)}</span>
                </div>
            </a>
                <div class="text bg-white p-4">
                    <h3 class="heading">${character.header}</h3>
                    <p>${character.content.substr(0, 200)}...</p>
                </div>
            </div>
            </div>

        `;}
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
