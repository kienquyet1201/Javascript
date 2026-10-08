let currentTicketCode = "";
let isTicketValid = false;
let totalRevenue = 0;
let totalVisits = 0;

while (true) {
    let choice = prompt(`=====================================================
   Hệ thống thu ngân phòng khám Medlatec Clinic
=====================================================
1. Nhập và kiểm chuẩn mã phiếu khám bệnh
2. Tính viện phí xét nghiệm
3. Thẩm định mã hồ sơ may mắn
0. Thoát chương trình
=====================================================
Vui lòng nhập lựa chọn của bạn (0 - 3):`);

    if (choice === null || choice.trim() === "0") {
        console.log("Đã kết thúc chương trình. Chào tạm biệt!");
        break;
    }

    choice = choice.trim();

    switch (choice) {
        case "1":
            currentTicketCode = "";
            isTicketValid = false;

            let ticketInput = prompt("Vui lòng nhập mã phiếu khám bệnh:");

            if (ticketInput === null) {
                console.log("Lỗi: Chưa nhập mã phiếu");
                break;
            }

            let processedCode = ticketInput.trim().toUpperCase();

            if (processedCode === "") {
                console.log("Lỗi: Chưa nhập mã phiếu");
            } else if (processedCode.length < 6) {
                console.log("Lỗi: Độ dài nhỏ hơn 6 ký tự");
            } else if (processedCode.startsWith("MED-") === false) {
                console.log("Lỗi: Sai tiền tố 'MED-'");
            } else if (processedCode.includes(" ")) {
                console.log("Lỗi: Chứa khoảng trắng ở giữa");
            } else {
                currentTicketCode = processedCode;
                isTicketValid = true;
                console.log(`Thành công! Mã phiếu hợp lệ: ${currentTicketCode}`);
            }
            break;

        case "2":
            if (isTicketValid === false) {
                console.log("Lỗi: Bạn cần nhập và kiểm chuẩn mã phiếu hợp lệ ở chức năng 1 trước!");
                break;
            }

            let serviceCount = 0;
            let pricePerService = 0;

            while (true) {
                let inputCount = prompt("Nhập số lượng chỉ định xét nghiệm (số nguyên > 0):");
                if (inputCount === null) {
                    break;
                }

                let countParsed = Number(inputCount);
                if (countParsed > 0 && countParsed % 1 === 0) {
                    serviceCount = countParsed;
                    break;
                }
                console.log("Lỗi: Số lượng chỉ định không hợp lệ. Vui lòng nhập lại.");
            }
            if (serviceCount === 0) {
                break;
            }

            while (true) {
                let inputPrice = prompt("Nhập đơn giá mỗi chỉ định (VNĐ) (số nguyên > 0):");
                if (inputPrice === null) {
                    break;
                }

                let priceParsed = Number(inputPrice);
                if (priceParsed > 0 && priceParsed % 1 === 0) {
                    pricePerService = priceParsed;
                    break;
                }
                console.log("Lỗi: Đơn giá không hợp lệ. Vui lòng nhập lại.");
            }
            if (pricePerService === 0) {
                break;
            }

            let baseCost = serviceCount * pricePerService;
            let discount = 0;
            if (serviceCount >= 4) {
                discount = Math.round(baseCost * 0.1);
            }
            let surcharge = Math.round((baseCost - discount) * 0.08);
            let totalPayment = (baseCost - discount) + surcharge;

            totalRevenue += totalPayment;
            totalVisits += 1;

            console.log("--- HÓA ĐƠN VIỆN PHÍ ---");
            console.log(`Mã phiếu: ${currentTicketCode}`);
            console.log(`Số chỉ định: ${serviceCount}`);
            console.log(`Đơn giá: ${pricePerService} VNĐ`);
            console.log(`Chi phí cơ sở: ${baseCost} VNĐ`);
            console.log(`Tiền giảm giá: ${discount} VNĐ`);
            console.log(`Phụ phí vật tư: ${surcharge} VNĐ`);
            console.log(`Tổng thanh toán: ${totalPayment} VNĐ`);
            console.log("------------------------");

            currentTicketCode = "";
            isTicketValid = false;
            break;

        case "3":
            let profileInput = prompt("Vui lòng nhập chuỗi số seri trên thẻ hồ sơ bệnh nhân:");

            if (profileInput === null) {
                break;
            }

            let serialString = profileInput.trim();

            let isOnlyDigits = true;
            let isNotAllZeros = false;

            for (let i = 0; i < serialString.length; i++) {
                let char = serialString[i];
                if (char < "0" || char > "9") {
                    isOnlyDigits = false;
                }
                if (char !== "0") {
                    isNotAllZeros = true;
                }
            }

            if (isOnlyDigits === false || serialString.length < 2 || isNotAllZeros === false) {
                console.log("Lỗi: Mã hồ sơ không hợp lệ (phải chứa từ 2 chữ số trở lên, chỉ gồm chữ số, không được toàn số 0).");
                break;
            }

            let reversedString = "";
            for (let i = serialString.length - 1; i >= 0; i--) {
                reversedString += serialString[i];
            }

            let isPalindrome = false;
            if (serialString === reversedString) {
                isPalindrome = true;
            }

            let digitSum = 0;
            for (let i = 0; i < serialString.length; i++) {
                digitSum += Number(serialString[i]);
            }

            let isDivisibleBy9 = false;
            if (digitSum % 9 === 0) {
                isDivisibleBy9 = true;
            }

            let prize = "Không có";
            if (isPalindrome === true && isDivisibleBy9 === true) {
                prize = "Giải Đặc biệt (Voucher gói khám chuyên sâu miễn phí trị giá 500.000 VNĐ)";
            } else if (isPalindrome === true) {
                prize = "Giải Nhất (Voucher miễn phí khám răng tổng quát 200.000 VNĐ)";
            } else if (isDivisibleBy9 === true) {
                prize = "Giải Nhì (Voucher giảm 50.000 VNĐ lần khám kế tiếp)";
            } else {
                prize = "Không trúng thưởng";
            }

            let textDivisible = "Không";
            if (isDivisibleBy9 === true) {
                textDivisible = "Có";
            }

            console.log("--- KẾT QUẢ THẨM ĐỊNH MÃ MAY MẮN ---");
            console.log(`Mã số gốc: ${serialString}`);
            console.log(`Mã đảo ngược: ${reversedString}`);
            console.log(`Tổng chữ số: ${digitSum}`);
            console.log(`Chia hết cho 9: ${textDivisible}`);
            console.log(`Kết quả: ${prize}`);
            console.log("-------------------------------------");

            break;

        default:
            console.log("Lỗi: Lựa chọn không hợp lệ, vui lòng nhập số từ 0 đến 3.");
            break;
    }
}