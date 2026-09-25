const customerName = "Nguyen Van An";
const rawMainDishPrice = "120000"; // Giá món chính (VND)
const rawDrinkPrice = "35000"; // Giá đồ uống (VND)
const rawQuantity = "2"; // Số lượng suất
const rawDistanceKm = "3.5"; // Cự ly giao hàng (km)
const openingDiscount = 20000; // Giảm giá khai trương cố định (VND)
const vatRate = 0.08; // Thuế suất VAT (8%)
const allPrice = parseInt(rawDrinkPrice*2)+parseInt(rawMainDishPrice*2)
const allPriceBehindVat = parseInt(rawDrinkPrice*2)+parseInt(rawMainDishPrice*2)-parseInt(openingDiscount)
const vatAmount = allPriceBehindVat * vatRate
const shippingFee = 15000 + rawDistanceKm * 4000
const finalPayment = allPriceBehindVat + vatAmount + shippingFee

console.log("================ HÓA ĐƠN ĐẶT MÓN ================");
console.log(`Khách Hàng: ${customerName}`);
console.log(`Tiền Món ăn: ${allPrice}`);
console.log(`Chiết Khấu khai trương: ${openingDiscount}`);
console.log(`Tiền sau chiết khấu: ${allPriceBehindVat}`);
console.log(`Thuế VAT (8%): ${vatAmount}`);
console.log(`Cước vận chuyển (3.5 km): ${shippingFee}`);
console.log(`-------------------------------------------------`);
console.log(`TỔNG THANH TOÁN THỰC TẾ: ${finalPayment}`);
console.log(`=================================================`);






