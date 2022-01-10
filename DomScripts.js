// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);



const red = document.createElement("p");
red.innerHTML = "Hey I'm red!";
red.style.color = "red";
container.appendChild(red);

const blue = document.createElement("h3");
blue.innerHTML = "i'm a blue h3!";
blue.style.color = "blue";
container.appendChild(blue);





const divBlock = document.createElement("div");
divBlock.style.border = "2px solid black";
divBlock.style.backgroundColor = "pink";


const h1 = document.createElement("h1");
h1.innerHTML = "I'm in a div";
divBlock.appendChild(h1);

const p = document.createElement("p");
p.innerHTML = "ME TOO!";
divBlock.appendChild(p);

container.appendChild(divBlock);


