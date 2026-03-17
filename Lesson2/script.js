// Hiển thị ra console
console.log("Hello World!");

// Thông báo (pop up)
// alert('Đây là lớp JSA33')

// Variables - Biến số
    // Dùng để lưu trữ dữ liệu
    // Có thể thay đổi giá trị trong khi lập trình

    // var: global (dùng được ở mọi nơi trong file)
var name = 'Duc Trung';
    // let: local (chỉ dùng được trong phạm vi nó được khai báo)
let age = 21;

console.log('Họ tên:', name);
console.log(`Tuổi: ${age}`);

// Constant - Hằng số
    // Dùng để lưu trữ dữ liệu
    // Không thể thay đổi giá trị trong khi lập trình
const PI = 3.14;

// Data Types - Kiểu dữ liệu
    // Primitives - Kiểu nguyên thủy
        // String: chuỗi / xâu ký tự
let address = 'Hà Nội';
        // Number: số nguyên (int), số thực (float), Infinity, NaN - not a number
let height = 1.75;
let infinityValue = Infinity;
let notANumber = NaN;
        // Boolean: logic (true/false)
let isStudent = false;
        // Null: rỗng, thường dùng để xóa/reset giá trị
let emptyValue = null;
        // Undefined: chưa xác định giá trị
let undefinedValue; // Mặc định là undefined

// Non-primitives - Kiểu phi nguyên thủy
        // Array: mảng
let numbers = [1, 2, 3, 4, 5];
        // function: hàm
function sum(a, b) {
    return a + b;
}
        // Object: đối tượng, cắp cặp key-value
let student = {
    name: 'Duc Trung',
    age: 21,
    isStudent: true,
    subjects: ['Math', 'Physics', 'Chemistry'],
    greet: function() {
        console.log('Hello, my name is', this.name);
    }
};
console.log('Name:', student.name);
console.log('Subjects:', student.subjects);
student.greet();

// Xác định và chuyển đổi kiểu dữ liệu
    // typeof: xác định kiểu dữ liệu
console.log('Type of name:', typeof address);
console.log('Type of height:', typeof height);
console.log('Type of emptyValue:', typeof emptyValue);
    // Chuyển đổi kiểu dữ liệu
let x1 = "pizza";
let x2 = "pizza";
let x3 = "pizza";
x1 = Number(x1);    // chuyển thành số
x2 = Boolean(x2);   // chuyển thành boolean
x3 = String(x3);    // chuyển thành chuỗi
console.log(typeof x1, x1);         // NaN
console.log(typeof x2, x2);         // true
console.log(typeof x3, x3);         // "pizza"

// String Methods - Phương thức chuỗi
let str = 'Minh Nhat'
    // length: độ dài chuỗi
console.log('Length:', str.length);
    // toUpperCase(): chuyển thành chữ hoa
console.log('Uppercase:', str.toUpperCase());
    // toLowerCase(): chuyển thành chữ thường
console.log('Lowercase:', str.toLowerCase());
    // charAt(index): lấy ký tự tại vị trí index
console.log('Character at index 2:', str.charAt(2));
console.log('Character at index 5:', str[5]);
    // indexOf(substring): tìm vị trí xuất hiện đầu tiên của chuỗi con substring
console.log("indexOf('Nhat'): " + str.indexOf("Nhat"));
    // slice(start, end): cắt chuỗi từ vị trí start đến end-1
console.log("slice(5, 9): " + str.slice(5, 9));    

// Câu điều kiện (3 dạng)
    // Dạng thiếu
age = 2;
if (age < 18) {
    console.log('Bạn chưa đủ 18 tuổi');
}
    // Dạng đủ
num = 12;
if (num % 2 === 0) {
    console.log(num, 'là số chẵn');
} else {
    console.log(num, 'là số lẻ');
}
        // Cách viết tắt: condition ? codeIfTrue : codeIfFalse
let result = (num % 2 === 0) ? 'số chẵn' : 'số lẻ';
console.log(num, 'là', result);

    // Dạng đa nhánh
let score = 9;
if (0 <= score && score < 5){
    console.log('Yếu');
} else if (5 <= score && score < 6.5){
    console.log('Trung bình');
} else if (6.5 <= score && score < 8){
    console.log('Khá');
} else if (8 <= score && score <= 10){
    console.log('Giỏi');
} else{
    console.log('Nhập sai dữ liệu');
}

// Vòng lặp
    // for (start; condition; increment)
for (let i = 1; i <= 5; i++){
    console.log('Lần lặp thứ:', i);
}

    // Vòng lặp while
let i = 1
while (i <= 5) {
    console.log(i);
    i++;
}


// Mảng - Array
    // Khai báo / khởi tạo (Create)
let students = ['Tú', 'Nhật', 'Huy', 'Bảo', 'Lâm', 'Hoàng'];
    // Đọc dữ liệu (Read)
console.log('Danh sách sinh viên:', students);
        // Truy cập phần tử bằng chỉ mục (index)
console.log('Phần tử đầu tiên:', students[0]);
console.log('Phần tử thứ hai:', students[1]);
console.log('Số lượng phần tử:', students.length);
        // Duyệt mảng 
            // Cách 1: cả index và value
for (let i = 0; i < students.length; i++){
    console.log(`Học viên ${i + 1}:`, students[i]);
}
            // Cách 2: chỉ value
for (let student of students){
    console.log('Học viên:', student);
}
            // Cách 3: dùng forEach
students.forEach(item => {
    console.log('Học viên:', item);
});
    // Cập nhật dữ liệu (Update)
        // thêm phần tử
students.push("Hà");        // thêm vào cuối mảng
students.unshift("Minh");   // thêm vào đầu mảng
console.log('Danh sách sinh viên:', students);
        // sửa phần tử
students[2] = 'Ngọc Trinh';
console.log('Danh sách sinh viên:', students);
    // xóa phần tử
students.splice(2, 1); // xóa phần tử tại vị trí 2 
students.pop();        // xóa phần tử cuối mảng
students.shift();     // xóa phần tử đầu mảng
console.log("Sau khi xóa:", students);
students[1] = null; // hoặc undefined
console.log('Danh sách sinh viên:', students);
    // sắp xếp
students.sort();    // sắp xếp theo thứ tự tăng dần (A-Z)
console.log("Sau khi sort A-Z:", students);
students.reverse(); // đảo ngược thứ tự
console.log("Sau khi reverse:", students);

// Hàm - function
    // Cách khai báo hàm thông thường
function sayHello() {
  console.log("Hello, world!");
}
sayHello();

    // Hàm có tham số
function greet(name) {
  console.log("Xin chào, " + name + "!");
}
greet("Trung");
greet("Tú");

    // Hàm có giá trị trả về
function add(a, b) {
  return a + b;
}
console.log("Tổng =", add(5, 3));

// Arrow Function (ES6) - lambda function
    // Cú pháp cơ bản
const divide = (a, b) => a / b;
console.log("Thương =", divide(10, 2));

    // Arrow function có nhiều câu lệnh
const printSum = (x, y) => {
  const sum = x + y;
  console.log("Tổng =", sum);
};
printSum(6, 9);

    // Arrow function không có tham số
const sayHi = () => console.log("Hi!");
sayHi();
