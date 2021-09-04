require('dotenv').config()
var childProcess = require('child_process');
var axios = require('axios');
var path = "/root/mpce/";

const tail = childProcess.spawn('docker-compose', ['logs', '-f', '-t'], { cwd: path });
const awk = childProcess.spawn('awk', ['/Player/  {$1=$2=$4=""; print $0; fflush(""); }'], { cwd: path });
let startTime = Date.now();
tail.stdout.pipe(awk.stdin);


awk.stdout.on('data', data => {
    let txt = String(data.toString());
    let date = Date.parse(txt.split(" ")[2]);
    if (startTime <= date) {
        let outputText = txt.substring(txt.indexOf(txt.split(" ")[4]), txt.indexOf("\n"));
        console.log(outputText);
        axios.post('https://discordapp.com/api/channels/'+process.env.DISCORD_CHANNEL +'/messages', {
            content: outputText
        }, {
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "bot-asan-taring (http://radicaldreamer.net, v0.1)",
                "Authorization": "Bot " + process.env.DISCORD_TOKEN,
            }
        }).catch(error => {
            console.log(error)
        });
    }

});