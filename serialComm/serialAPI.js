const process = require('process');
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const serialPort = new SerialPort('/dev/tty.usbmodem141101', { baudRate: 9600 });
const parser = new Readline({ delimiter: '\n' });
serialPort.pipe(parser);

let teamId = 117;

// Read the port data
let sliderValue = 0;


serialPort.on("open", () => {
    console.log('serial port open');
    });

serialPort.on('error', (err) => {
    console.log(err);
});

parser.on('data', data =>{
    var res = data.split(":");
    teamId = uids[res[0]];
    sliderValue = res[1];
    console.log(`Arduino Data: ${data}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/data', (req, res) => {
  res.send({
    sliderValue: `${parseInt(sliderValue)}`,
    id: `${teamId}`,
    theme: themes[teamId]
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`))

const uids = {
    "1192013452":115,
    "180223195220":147,
    "36142195220":137,
    "132184195220":112
}

const themes = {
    "108": {
        "accentColor": "#003263",
        "darkColor": "#862633",
        "lightColor": "#ffffff"
    },
    "109": {
        "accentColor": "#A71930",
        "darkColor": "#000000",
        "lightColor": "#E3D4AD"
    },
    "110": {
        "accentColor": "#BD3039",
        "darkColor": "#0D2B56",
        "lightColor": "#ffffff"
    },
    "111": {
        "accentColor": "#000000",
        "darkColor": "#000000",
        "lightColor": "#C4CED4"
    },
    "112": {
        "accentColor": "#CC3433",
        "darkColor": "#0E3386",
        "lightColor": "#ffffff"
    },
    "113": {
        "accentColor": "#C6011F",
        "darkColor": "#000000",
        "lightColor": "#ffffff"
    },
    "114": {
        "accentColor": "#E31937",
        "darkColor": "#002B5C",
        "lightColor": "#ffffff"
    },
    "115": {
        "accentColor": "#333366",
        "darkColor": "#231F20",
        "lightColor": "#C4CED4"
    },
    "116": {
        "accentColor": "#FA4616",
        "darkColor": "#0C2C56",
        "lightColor": "#ffffff"
    },
    "117": {
        "accentColor": "#EB6E1F",
        "darkColor": "#002D62",
        "lightColor": "#ffffff"
    },
    "118": {
        "accentColor": "#C09A5B",
        "darkColor": "#004687",
        "lightColor": "#ffffff"
    },
    "119": {
        "accentColor": "#EF3E42",
        "darkColor": "#005A9C",
        "lightColor": "#ffffff"
    },
    "120": {
        "accentColor": "#AB0003",
        "darkColor": "#14225A",
        "lightColor": "#FFFFFF"
    },
    "121": {
        "accentColor": "#FF5910",
        "darkColor": "#002D72",
        "lightColor": "#ffffff"
    },
    "133": {
        "accentColor": "#EFB21E",
        "darkColor": "#003831",
        "lightColor": "#ffffff"
    },
    "134": {
        "accentColor": "#FDB827",
        "darkColor": "#27251F",
        "lightColor": "#ffffff"
    },
    "135": {
        "accentColor": "#FFC72C",
        "darkColor": "#473729",
        "lightColor": "#CEC6C0"
    },
    "136": {
        "accentColor": "#005C5C",
        "darkColor": "#0C2C56",
        "lightColor": "#C4CED4"
    },
    "137": {
        "accentColor": "#FD5A1E",
        "darkColor": "#000000",
        "lightColor": "#ffffff"
    },
    "138": {
        "accentColor": "#C41E3A",
        "darkColor": "#0C2340",
        "lightColor": "#ffffff"
    },
    "139": {
        "accentColor": "#8FBCE6",
        "darkColor": "#092C5C",
        "lightColor": "#F5D130"
    },
    "140": {
        "accentColor": "#003278",
        "darkColor": "#C0111F",
        "lightColor": "#ffffff"
    },
    "141": {
        "accentColor": "#8FBCE6",
        "darkColor": "#092C5C",
        "lightColor": "#FFFFFF"
    },
    "142": {
        "accentColor": "#D31145",
        "darkColor": "#002B5C",
        "lightColor": "#ffffff"
    },
    "143": {
        "accentColor": "#284898",
        "darkColor": "#E81828",
        "lightColor": "#ffffff"
    },
    "144": {
        "accentColor": "#CE1141",
        "darkColor": "#13274F",
        "lightColor": "#ffffff"
    },
    "145": {
        "accentColor": "#231F20",
        "darkColor": "#111111",
        "lightColor": "#C4CDD3"
    },
    "146": {
        "accentColor": "#00A3E0",
        "darkColor": "#000000",
        "lightColor": "#ffffff"
    },
    "147": {
        "accentColor": "#162d5a",
        "darkColor": "#0C2340",
        "lightColor": "#c4ced3"
    },
    "158": {
        "accentColor": "#B6922E",
        "darkColor": "#0A2351",
        "lightColor": "#ffffff"
    }
}
