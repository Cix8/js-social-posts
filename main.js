const posts = [];

const likedPosts = [];

const namesArray = ["Phil Mangione","Manuelita Benassai","Oldano Abela","Zelmina Arlotti","Ariele Straccioni"];

const objNumber = 5;
for (let i = 0; i < objNumber; i++) {
    const newObj = {
        "id": i + 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": `https://unsplash.it/600/300?image=${getRndInteger(1,50)}`,
        "author": {
            "name": namesArray[i],
            "image": "https://unsplash.it/300/300?image="+(i+1)
        },
        "likes": getRndInteger(1,200),
        "created": `${getRndInteger(1,28)} - ${getRndInteger(1,12)} - ${getRndInteger(2000, 2022)}`
    }

    posts.push(newObj)
}

const postsContainer = document.getElementById('container');

postPrint(postsContainer);

//                      FUNCTIONS

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function postPrint(container) {
    posts.forEach( element => {
        const newInitials = initials(element);
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
                    <img src="${element.media}" alt="${newInitials}">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
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
        
        container.innerHTML += newPost;
    })

    const buttonsArray = [];

    for (let i = 1; i <= posts.length; i++) {
        const thisButton = document.querySelector('.post:nth-child('+i+') .like-button');
        buttonsArray.push(thisButton);
    }
    
    addButtonsEvents(buttonsArray);

    console.log(likedPosts);
}

function addButtonsEvents(array) {
    array.forEach( button => {
        button.addEventListener('click', function() {
            const thisDataPostId = this.attributes[2].nodeValue;
            posts.forEach( element => {
                if (thisDataPostId == element.id && !likedPosts.includes(element.id)) {
                    element.likes++;
                    likedPosts.push(element.id);
                } else if (thisDataPostId == element.id && likedPosts.includes(element.id)) {
                    element.likes--;
                    let indexOfElement = likedPosts.indexOf(element.id);
                    console.log(indexOfElement);
                    likedPosts.splice(indexOfElement, 1); 
                }
                postsContainer.innerHTML = '';
                postPrint(postsContainer);
            })
        })
    })
}

function initials(obj) {
    let result = obj.author.name.split(" ");
    const firstChar = result[0].charAt(0);
    const secondChar = result[1].charAt(0);
    result = `${firstChar} ${secondChar}`;
}