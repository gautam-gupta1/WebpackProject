
const API_KEY = "56f5a71177604252af47e1a08245396a";
let data;


const clickHandler = async()=>{
    let newsContainer = document.querySelector('.news');
    const observer = new IntersectionObserver(async function(enteries){
    
    if(enteries[0].isIntersecting){
    await getData();
    renderNewsItems(newsContainer);
    }
})
 
observer.observe(newsContainer)
  

}
const getData = async()=>{
    let newsDataPromise = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    let parsedData = await newsDataPromise.json();
    data = parsedData.articles;
    console.log(data);
}
const renderNewsItems = (newsContainer)=>{
    newsContainer.innerHTML = "";
    data.forEach(element => {
        let heading = document.createElement("p");
        heading.classList.add('heading');
        heading.innerText = element.title;
        
        newsContainer.appendChild(heading);
       

    });
}


export default clickHandler;