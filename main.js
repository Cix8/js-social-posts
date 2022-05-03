const posts = [];

const namesArray = ["Phil Mangione","Manuelita Benassai","Oldano Abela","Zelmina Arlotti","Ariele Straccioni"];
console.log(namesArray.length);

const objNumber = 5;
for (let i = 0; i < objNumber; i++) {
    const newObj = {
        "id": i + 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": `https://unsplash.it/600/300?image=${getRndInteger(1,200)}`,
        "author": {
            "name": namesArray[i],
            "image": "https://unsplash.it/300/300?image="+(i+1)
        },
        "likes": getRndInteger(1,200),
        "created": `${getRndInteger(2000, 2022)} - ${getRndInteger(1,12)} - ${getRndInteger(1,28)}`
    }

    posts.push(newObj)
}

console.log(posts);

const postsContainer = document.getElementById('container');
console.log(postsContainer);

posts.forEach( element => {
    const newPost = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author.name}</div>
                        <div class="post-meta__time">${element.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element.content}</div>
            <div class="post__image">
                <img src="${element.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`
    
    postsContainer.innerHTML += newPost;
})

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}