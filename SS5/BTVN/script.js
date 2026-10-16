let records = [
    "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302",
    "BS.tran_thi_mai-KHOA_NHI-09:15-PHONG_105",
    "BS.le_hoang_nam-KHOA_NGOAI-10:00-PHONG_204"
];

for (let i = 0; i < records.length; i++) {
    let parts = records[i].split("-");
    
    let rawName = parts[0].replace("BS.", "").replaceAll("_", " ");
    let name = rawName.toUpperCase();
    
    let dept = parts[1].replaceAll("_", " ");
    let time = parts[2];
    let room = parts[3].replace("PHONG_", "Phòng ");
    
    console.log(`Bác sĩ: ${name} | Chuyên khoa: ${dept} | Giờ: ${time} | ${room}`);
}