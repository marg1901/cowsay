const userInfo = require('./information');

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : (`Je m'appelle ${userInfo.name} et je me suis expatriée à ${userInfo.city}.`),
    e : "oO",
    T : "U "
}));