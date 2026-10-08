let rooms = [
    { roomId: "P101", roomType: "Chevrolet", pricePerNight: 1000000, status: "VACANT" },
    { roomId: "P102", roomType: "Lexus", pricePerNight: 2000000, status: "VACANT" },
    { roomId: "P103", roomType: "Mercedes", pricePerNight: 1000000, status: "VACANT" }
];
console.log(rooms);

rooms.push({ roomId: "P104", roomType: "VIP Suite", pricePerNight: 3500000, status: "VACANT" });
console.log(rooms);

for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].roomId === "P101") {
        rooms[i].status = "OCCUPIED";
    }
}
console.log(rooms);

for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].roomId === "P103") {
        rooms.splice(i, 1);
    }
}
console.log(rooms);