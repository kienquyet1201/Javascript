let orderCode = "";
let isVip = false;
let choice = 0;

do {
    console.log("1. Nhập mã đơn hàng");
    console.log("2. Tính tiền và in hóa đơn");
    console.log("3. Thoát");
    
    choice = Number(prompt("Nhập lựa chọn của bạn (1, 2, 3):"));

    switch (choice) {
        case 1:
            let inputCode = prompt("Nhập mã đơn hàng (từ 8 ký tự trở lên):");
            
            if (inputCode.trim().length >= 8) {
                orderCode = inputCode.trim().toUpperCase();
                
                let vipInput = prompt("Khách có thẻ VIP không? (Y/N):");
                if (vipInput.trim().toUpperCase() === "Y") {
                    isVip = true;
                } else {
                    isVip = false;
                }
                
                console.log("Lưu mã thành công: " + orderCode);
            } else {
                console.log("Mã không hợp lệ!");
            }
            break;
            
        case 2:
            if (orderCode === "") {
                console.log("Vui lòng nhập mã đơn hàng trước!");
                break;
            }
            
            let item = prompt("Nhập tên phụ kiện (SHAKER, GLOVES, STRAP):");
            item = item.trim().toUpperCase();
            let price = 0;
            
            if (item === "SHAKER") {
                price = 120000;
            } else if (item === "GLOVES") {
                price = 180000;
            } else if (item === "STRAP") {
                price = 150000;
            } else {
                console.log("Không có sản phẩm này trong bảng giá!");
                break;
            }
            
            let discount = 0;
            if (isVip === true) {
                discount = price * 0.1;
            }
            
            let total = price - discount;
            let line = "-".repeat(40);
            
            console.log(line);
            console.log("HÓA ĐƠN BÁN LẺ PHỤ KIỆN");
            console.log("Mã đơn:" + orderCode.padStart(30, " "));
            console.log("Sản phẩm:" + item.padStart(28, " "));
            console.log("Đơn giá:" + String(price).padStart(29, " "));
            console.log("Giảm giá:" + String(discount).padStart(28, " "));
            console.log("Tổng tiền:" + String(total).padStart(27, " "));
            console.log(line);
            break;
            
        case 3:
            console.log("Đã thoát chương trình.");
            break;
            
        default:
            console.log("Lựa chọn không hợp lệ!");
    }
} while (choice !== 3);