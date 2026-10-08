let portIds = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06'];
let portStatuses = ['AVAILABLE', 'CHARGING', 'ERROR', 'AVAILABLE', 'CHARGING', 'AVAILABLE'];
let portPowersKw = [250, 150, 60, 250, 60, 150];

let indexS01 = portIds.indexOf('S01');
if (indexS01 !== -1) {
    portStatuses[indexS01] = 'CHARGING';
}

let indexS03 = portIds.indexOf('S03');
if (indexS03 !== -1) {
    portStatuses[indexS03] = 'AVAILABLE';
}

let availableCount = 0;
let maxPower = 0;
let bestPort = "";

for (let i = 0; i < portIds.length; i++) {
    if (portStatuses[i] === 'AVAILABLE') {
        availableCount++;
        
        if (portPowersKw[i] > maxPower) {
            maxPower = portPowersKw[i];
            bestPort = portIds[i];
        }
    }
}

console.log("Tổng số trụ AVAILABLE:", availableCount);
console.log("Trụ có công suất lớn nhất:", bestPort, "với", maxPower, "kW");

for (let i = 0; i < portIds.length; i++) {
    console.log(portIds[i] + " | " + portStatuses[i] + " | " + portPowersKw[i] + "kW");
}