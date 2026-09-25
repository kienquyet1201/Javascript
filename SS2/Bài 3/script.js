let distance = 15;
let isPeakHour = true;
let memberTier = "PLATINUM";

let cuocCoBan = 12000;
if (distance > 2) {
  cuocCoBan = 12000 + (distance - 2) * 4500;
}

let phuPhi = 0;
if (isPeakHour) {
  phuPhi = cuocCoBan * 0.2;
}

let tongTruocGiam = cuocCoBan + phuPhi;

let tiLeGiam = 0;
let giamToiDa = 0;

switch (memberTier) {
  case "PLATINUM":
    tiLeGiam = 0.15;
    giamToiDa = 30000;
    break;
  case "GOLD":
    tiLeGiam = 0.10;
    giamToiDa = 20000;
    break;
  case "SILVER":
    tiLeGiam = 0.05;
    giamToiDa = 10000;
    break;
  default:
    tiLeGiam = 0;
    giamToiDa = 0;
}

let mucGiam = tongTruocGiam * tiLeGiam;
if (mucGiam > giamToiDa) {
  mucGiam = giamToiDa;
}

let finalFare = tongTruocGiam - mucGiam;
if (finalFare < 12000) {
  finalFare = 12000;
}

console.log("Hạng thành viên:", memberTier);
console.log("Cước ban đầu:", cuocCoBan);
console.log("Phụ phí:", phuPhi);
console.log("Mức giảm giá hội viên:", mucGiam);
console.log("Cước thanh toán cuối cùng:", finalFare);