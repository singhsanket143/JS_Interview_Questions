function sleep(ms) {
    return new Promise((res, rej) => {
        setTimeout(res, ms);
    })
}

function blockingSleep(ms) {
    let timeNow = new Date().getTime(); // t= 0 1/1/1970 -> now , x + 10000
    while(true) {
        const y = new Date().getTime() 
        console.log(y, timeNow, timeNow + ms);
        if(y > timeNow + ms) break;
    }

}

async function process() {
    console.log('Hello!');
    blockingSleep(10000)
    console.log('Bye.');
}

console.log("Starting");
process();
console.log("bye")

