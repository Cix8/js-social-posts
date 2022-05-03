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

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}