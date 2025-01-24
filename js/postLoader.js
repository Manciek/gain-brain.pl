document.addEventListener('DOMContentLoaded', () => {
    const postContainer = document.getElementById('postContainer');
    const napis = document.getElementById('napis');
    const postFile = 'posts.json';

    function createPostcard(post) {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';

        postCard.innerHTML = `
        <h2>${post.title}</h2>
        <img src="${post.image}"></img>
        <h3>${post.caption}</h3>
        <p>${post.description}</p>
        `;
        return postCard;
    }
    fetch(postFile)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>
            data.posts.forEach((post, index) => {
                let p = createPostcard(post);
                postContainer.appendChild(p);
                napis.innerText = 'Liczba postów: ',index;
            }))
        .catch((error) => {
            console.error("Unable to fetch data:", error);
            let p = document.createElement('p');
            p.innerHTML = "Jeszcze nic nie ma :)";
            postContainer.appendChild(p);
            napis.innerText = 'Liczba postów: 0';
        });
})