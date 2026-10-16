const BASE_PRICE = 80000;

let customerName = "Tran Thi Mai";
let customerAge = 20;
let movieRating = "T18";
let seatType = "VIP";
let isStudent = true;
let isWeekday = true;

if (movieRating === "T18" && customerAge < 18) {
    console.warn("GIAO DICH THAT BAI: Khach hang duoi 18 tuoi khong duoc phep xem phim nhan T18!");
} else {
    let surcharge = 0;
    let seatName = "";
    let isValidSeat = true;

    switch (seatType) {
        case "STANDARD":
            surcharge = 0;
            seatName = "Ghe Thuong";
            break;
        case "VIP":
            surcharge = 15000;
            seatName = "Ghe VIP";
            break;
        case "COUPLE":
            surcharge = 40000;
            seatName = "Ghe Doi Couple";
            break;
        default:
            console.error("GIAO DICH THAT BAI: Loai ghe khong hop le!");
            isValidSeat = false;
    }

    if (isValidSeat === true) {
        let discountPercent = 0;
        if (isStudent === true && isWeekday === true) {
            discountPercent = 20;
        } else {
            discountPercent = 0;
        }

        let ticketPrice = BASE_PRICE + surcharge;
        let discountAmount = (ticketPrice * discountPercent) / 100;
        let finalPayment = ticketPrice - discountAmount;

        const giftMessage = (seatType === "COUPLE") ? "Tang 01 ly nuoc ngot co lon" : "Khong ap dung qua tang";

        console.log("========================================");
        console.log("       HOA DON BAN VE CINEMA CGV        ");
        console.log("========================================");
        console.log(`Khach hang: ${customerName}`);
        console.log(`Do tuoi: ${customerAge} | Nhan phim: ${movieRating} (Hop le)`);
        console.log(`Hang ghe: ${seatName}`);
        console.log(`Gia ve co so: ${BASE_PRICE} VND`);
        console.log(`Phu thu ghe: ${surcharge} VND`);
        console.log(`Tong gia ve goc: ${ticketPrice} VND`);
        console.log(`Chiet khau HSSV (${discountPercent}%): -${discountAmount} VND`);
        console.log("----------------------------------------");
        console.log(`TONG TIEN THANH TOAN: ${finalPayment} VND`);
        console.log(`Uu dai di kem: ${giftMessage}`);
        console.log("========================================");
    }
}