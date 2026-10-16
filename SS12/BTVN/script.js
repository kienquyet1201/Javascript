console.table([
    { "Tiêu chuẩn": "Độ dài khối switch", "Monolithic": "Hàng trăm dòng, cực kỳ khó đọc", "Modular": "Rất ngắn (chỉ 1 dòng gọi hàm mỗi case)" },
    { "Tiêu chuẩn": "Khả năng tái sử dụng", "Monolithic": "Bằng 0", "Modular": "Rất cao (hàm có thể dùng cho cả API/Web)" },
    { "Tiêu chuẩn": "Khả năng viết Unit Test", "Monolithic": "Không thể test từng chức năng", "Modular": "Rất dễ dàng kiểm thử từng hàm" }
]);

let menuChoice = 1;

switch (menuChoice) {
    case 1:
        let newUserName = "Nguyễn Văn A";
        let newUserAge = 20;
        console.log("Thêm người dùng thành công: " + newUserName + ", " + newUserAge + " tuổi.");
        break;
    case 2:
        let deleteId = 5;
        console.log("Đã xóa người dùng có ID: " + deleteId);
        break;
}

switch (menuChoice) {
    case 1:
        createUser();
        break;
    case 2:
        removeUser();
        break;
}

function createUser() {
    let newUserName = "Nguyễn Văn A";
    let newUserAge = 20;
    console.log("Thêm người dùng thành công: " + newUserName + ", " + newUserAge + " tuổi.");
}

function removeUser() {
    let deleteId = 5;
    console.log("Đã xóa người dùng có ID: " + deleteId);
}