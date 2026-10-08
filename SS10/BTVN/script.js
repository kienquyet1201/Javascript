let books = [
    { bookCode: "B01", title: "JavaScript", category: "IT", price: 100000, totalCopies: 5, availableCopies: 1, shelfLocation: "K1" },
    { bookCode: "B02", title: "HTML CSS", category: "IT", price: 80000, totalCopies: 3, availableCopies: 3, shelfLocation: "K2" },
    { bookCode: "B03", title: "Python", category: "IT", price: 120000, totalCopies: 2, availableCopies: 2, shelfLocation: "K3" }
];
console.log(books);

books.push({ bookCode: "B04", title: "ReactJS", category: "IT", price: 150000, totalCopies: 4, availableCopies: 4, shelfLocation: "K4" });
console.log(books);

for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === "B01") {
        if (books[i].availableCopies > 0) {
            books[i].availableCopies--;
            if (books[i].availableCopies === 0) {
                books[i].status = "HẾT SÁCH TRÊN KỆ";
            }
        }
    }
}
console.log(books);

for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === "B03") {
        books.splice(i, 1);
    }
}
console.log(books);

let totalBooks = 0;
let totalValue = 0;
for (let i = 0; i < books.length; i++) {
    totalBooks += books[i].totalCopies;
    totalValue += (books[i].totalCopies * books[i].price);
}

console.log("Tổng số lượng sách:", totalBooks);
console.log("Tổng giá trị tài sản kho:", totalValue);
console.table(books);