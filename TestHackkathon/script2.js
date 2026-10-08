let currentTicketCode = ""
let isTicketValid = false
let totalRevenue = 0
let totalVisits = 0

while (true) {
    let choice = prompt(`===========================================
Hệ thống thu ngân phòng khám Medlatec Clinic
===========================================
1. Nhập và kiểm chuẩn mã phiếu khám bệnh
2. Tính viện phí xét nghiệm
3. Thẩm định mã hồ sơ may mắn
0. Thoát chương trình
===========================================
Vui lòng nhập lựa chọn của bạn (0 - 3): 
`)
    if (choice === null || choice.trim() === "0") {
        alert("Cảm ơn bạn đã đến Medlatec Clinic. Hẹn gặp lại")
        break;
    } else if (isNaN(choice) === true) {
        alert("Vui lòng nhập số! Không được nhập chữ");
        continue
    }

    choice = choice.trim()

    switch (choice) {

        case "1":

            currentTicketCode = ""
            isTicketValid = false
            let ticketUser = prompt("Mời bạn nhập số mã khám bệnh")
            

            if (ticketUser === null || ticketUser === " ") {
                alert("Vui lòng nhập mã số khám bệnh, không được để trống!")
                break
            }

            let validTicketUser = ticketUser.trim().toUpperCase()

            if(validTicketUser === ""){
                alert("Không được để trống, vui lòng nhập mã số hợp lệ")
                break
            }else if(validTicketUser.startsWith("MED-") === false){
                alert("Mã khám phải bắt đầu bằng 'MED-'")
                break
            }else if(validTicketUser.includes(" ")=== true){
                alert("Mã khám không được để khoảng cách")
                break
            }else if(validTicketUser.length < 6){
                alert("Lỗi: Độ dài nhỏ hơn 6 ký tự")
                break
            }else{
                currentTicketCode = validTicketUser
                isTicketValid = true
                alert(`Mã số khám bệnh của bạn là: ${validTicketUser} `)
                break
            }

        case "2":
            if(isTicketValid === false){
                alert("Vui lòng nhập mã phiếu khám bệnh!")
                break
            }
            let serviceCount = 0
            let pricePerService = 0

            while(true){
                let userTicket = prompt("Mời bạn nhập số lượng lần khám: ")
                if (userTicket === null){
                    alert("Bạn đã thoát")
                    break
                }else if (userTicket === ""){
                    alert("Không được để trống")
                    continue
                }
            }
        default:
            alert("Vui lòng chọn 0-3");
            break;
    }
}
