const os = require('os');

console.log(os.uptime());
console.log(JSON.stringify(os.platform()));
var cpuArray = os.cpus();
console.log("PROCESSORS: " + cpuArray.length);