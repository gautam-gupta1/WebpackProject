
const headerCreater = () => {
    const header = document.createElement('div');
    header.classList.add('header')
    const channelNumber = '1'.padStart(3,0);
    header.innerText = `${channelNumber}:News Headlines`;
    return header;
}

export default headerCreater