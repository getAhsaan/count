
let click = 0;
document.getElementById('click-btn').addEventListener('click', () => {
    const count  = document.getElementById('count');
    count.innerText = ++click;
    saveCountToLS(count.innerText);
})

const getCountFromLS = () => {
    // let count = {};
    const lsCount = localStorage.getItem('count');
    if(lsCount) {
        click = JSON.parse(lsCount);
        // count = JSON.parse(lsCount);
    }
    return click;
    // return count;
}

const saveCountToLS = count => {
const strCount = JSON.stringify(count);
localStorage.setItem('count', strCount);
}

const displayCountFromLS = () => {
    const count = getCountFromLS();
    document.getElementById('count').innerText = count;
}
displayCountFromLS();