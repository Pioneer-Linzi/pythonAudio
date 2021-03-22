var fetch = require("node-fetch");
var fs = require("fs");
const audioList =  require('./audioList')


console.log(audioList)
function download(u, p) {
    return fetch(u, {
        method: 'GET',
        headers: { 'Content-Type': 'application/octet-stream' },
    }).then(res => res.buffer()).then(_ => {
        fs.writeFile(p, _, "binary", function (err) {
            console.log(err || p);
        });
    });
}


async function run(){
    for(const i in audioList){
        const url = audioList[i].oriUri
        console.log(url)
        await download(url, `./music/${i}${url.match(/\..{3}$/g)}`)
    }
    
}


run()