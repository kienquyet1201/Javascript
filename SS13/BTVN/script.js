let t = [
    { m: "VN123", tnh: "Nguyen Van A", h: "ECO", s: "BOOKED" },
    { m: "VN456", tnh: "Tran Thi B", h: "BIZ", s: "BOOKED" }
];

function findTicket(ma) {
    for (let i = 0; i < t.length; i++) {
        if (t[i].m === ma) {
            return t[i];
        }
    }
    return null;
}

function calculateFee(h, kg) {
    let limit = (h === "ECO") ? 20 : 30;
    if (kg > limit) {
        return (kg - limit) * 50000;
    }
    return 0;
}

function checkIn(ma, kg) {
    let v = findTicket(ma);
    if (v !== null && v.s === "BOOKED") {
        let phi = calculateFee(v.h, kg);
        v.s = "CHECKED_IN";
        return phi;
    }
    return -1;
}

function cancelTicket(ma) {
    let v = findTicket(ma);
    if (v !== null && v.s !== "CHECKED_IN") {
        v.s = "CANCELLED";
        return true;
    }
    return false;
}

function printList() {
    console.table(t);
}

function main() {
    let chon;
    do {
        chon = Number(prompt("1. View\n2. Check-in\n3. Find\n4. Cancel\n5. Exit\nChoose:"));
        
        switch (chon) {
            case 1:
                printList();
                break;
            case 2:
                let m1 = prompt("PNR code:");
                let kg = Number(prompt("Weight (kg):"));
                let phi = checkIn(m1, kg);
                if (phi >= 0) {
                    console.log("Success. Fee: " + phi);
                } else {
                    console.log("Failed.");
                }
                break;
            case 3:
                let m2 = prompt("PNR code:");
                let kq = findTicket(m2);
                console.log(kq);
                break;
            case 4:
                let m3 = prompt("PNR code:");
                let ok = cancelTicket(m3);
                console.log(ok ? "Cancelled" : "Cannot cancel");
                break;
            case 5:
                console.log("Exited.");
                break;
        }
    } while (chon !== 5);
}

main();