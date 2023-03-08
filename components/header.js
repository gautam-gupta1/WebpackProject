
const headerCreater = ()=>{
    const header = document.createElement('div');
    header.classList.add('header')
    header.innerText = 'News Headlines';
    return header;
}

export default headerCreater