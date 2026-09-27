// Thiết lập thông tin chuyến đi GrabRide
const bookingId = "GRB-84920";
const customerName = "Trần Thị Mai";
const distanceInKm = 4;
const isHeavyRain = true;

const baseFare = 12000;
const extraFarePerKm = 4500;
let totalFare = 0;

// Phân loại tính cước cơ sở
if (distanceInKm <= 2) {
    totalFare = baseFare + (distanceInKm - 2) * extraFarePerKm;
} else {
    totalFare = baseFare;
}
// Áp dụng phụ phí thời tiết mưa lớn
if (isHeavyRain) {
    totalFare = totalFare * 1.2;
}

console.log("Mã chuyến đi:", bookingId);
console.log("Khách hàng:", customerName);
console.log("Quãng đường:", distanceInKm, "km");
console.log("Tổng cước chuyến đi:", totalFare, "VNĐ");