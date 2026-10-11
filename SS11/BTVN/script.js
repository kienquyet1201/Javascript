let devs = [
  {name: "light", power: 50, isOn: false, isError: false},
  {name: "ac", power: 2500, isOn: false, isError: false},
  {name: "stove", power: 1000, isOn: false, isError: true}
]

let scene = "GoodMorning"
let totalPower = 0

if (scene != "GoodMorning" && scene != "LeaveHome") {
  console.log("wrong scene")
} else {
  for (let i = 0; i < devs.length; i++) {
    if (devs[i].isError == true) continue
    
    if (scene == "GoodMorning") devs[i].isOn = true
    if (scene == "LeaveHome") devs[i].isOn = false
  }
}

for (let i = 0; i < devs.length; i++) {
  if (devs[i].isOn == true) {
    totalPower = totalPower + devs[i].power
  }
}

if (totalPower > 3000) {
  console.log("overload")
  for (let i = 0; i < devs.length; i++) {
    if (devs[i].power > 1000) devs[i].isOn = false
  }
}

console.log("power used:", totalPower)