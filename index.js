import  headerCreater  from "./components/header";
import user from './typescript.ts'
import './css/header.css'
import natureImg from  "./assets/images/download.jpg"

/**
 * Header appended 
 **/
const header = headerCreater();
document.body.appendChild(header)

/**
 * Image appended
 **/
const imgEle = document.createElement('img');
imgEle.src = natureImg;
document.body.appendChild(imgEle);


/**
 * News Container created and appended
 **/
const newsContainer = document.createElement('div');
newsContainer.classList.add('news');
document.body.appendChild(newsContainer)


/**
 *Adding Fetch-News Button
 **/
const buttonElement = document.createElement("button");
buttonElement.innerText="Click to fetch News..";
buttonElement.classList.add("textElement");
buttonElement.addEventListener("click",async function(){
     const {default:clickHandler} = await import('./components/main.js')
    
    clickHandler();
});
newsContainer.appendChild(buttonElement);


/**
 * Checking if TypeScript is working by consoling user property
**/
console.log(user.name);

