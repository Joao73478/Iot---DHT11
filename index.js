const {SerialPort} = require ("serialport");
const {ReadlineParser} = require ("@serialport/parser-readline");
const mqtt = require("mqtt");

const port = new SerialPort({path: "COM5", baudRate:9600});
const parser = port.pipe(new ReadlineParser({delimiter: "\n"}));

const client = mqtt.connect("mqtt://broker.hivemq.com:1883");
const topic = "senai/iot/dht11";

client.on ("connect", () => {
    console.log("conectado ao broker mqtt!");
});

parser.on("data", (line) => {
    try {
        const data = json. parse(line.trim());
        console.log("recebido:", data);

        client.publish(topic, json.stringify(data));
        console.log ("publicado no mqtt:", data);
    }   catch (err) {
        console.error9("erro ao parsear:", line);
    }
})

