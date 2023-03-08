import  headerCreater  from "./components/header";
import user from './typescript.ts'
import './css/header.css'
import clickHandler from "./components/main";
import natureImg from  "./images/download.jpg"

//Heading
const header = headerCreater();
document.body.appendChild(header)

//Image
const imgEle = document.createElement('img');
imgEle.src = natureImg;
document.body.appendChild(imgEle);

//News Container
const newsContainer = document.createElement('div');
newsContainer.classList.add('news');
document.body.appendChild(newsContainer)


//Adding Fetch-News Button
const buttonElement = document.createElement("button");
buttonElement.innerText="Click to fetch News..";
buttonElement.classList.add("textElement");
buttonElement.addEventListener("click",clickHandler);
newsContainer.appendChild(buttonElement);


console.log(user)
