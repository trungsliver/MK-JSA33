// Bài 1: Form đăng ký
    // DOM - Document Object Model (lấy cac phần tử trong HTML)
    // Lấy các thẻ từ file HTML
const form = document.getElementById('signUpForm');
const message = document.getElementById('message');

    // Thêm sự kiện submit cho form (khi ấn nút đăng ký)
form.addEventListener('submit', function(event) {
    // Không reload lại trang
    event.preventDefault();

    // Lấy dữ liệu từ form
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    // Kiểm tra dữ liệu
        // Kiểm tra nhập đủ thông tin
    if (!username || !email || !password) {
        message.textContent = 'Vui lòng nhập đầy đủ thông tin!';
        message.style.color = 'red';
        return;
    }

        // Kiểm tra độ dài password
    if (password.length < 6) {
        message.textContent = 'Mật khẩu phải có ít nhất 6 ký tự!';
        message.style.color = 'red';
        return;
    }

        // Hiển thị thông báo thành công
    message.textContent = 'Đăng ký thành công!';
    message.style.color = 'green';
});

// Bài 2: Lấy data từ file js
function displayStudents() {
    // Dùng DOM lấy container
    const container = document.getElementById('studentList');

    // Duyệt danh sách students
    students.forEach(student => {
        // Tạo thẻ li cho từng student
        const li = document.createElement('li');
        li.textContent = `${student.name} - ${student.age} tuổi`;
        // Thêm thẻ li vào container
        container.appendChild(li);
    });
}
    // Gọi hàm thực hiện
displayStudents();

// Bài 3: Lấy data từ file JSON
fetch('./data.json')
    // chuyển đổi dữ liệu thành đối tượng JavaScript (JSON)
    .then(response => response.json())
    // xử lý dữ liệu sau khi đã chuyển đổi
    .then(data => {
        // Dùng DOM lấy container
        const container = document.getElementById('productList');

        // Duyệt danh sách products
        data.forEach(product => {
            // Tạo thẻ div có class "product-card" cho từng sản phẩm
            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            // Thêm dữ liệu cho card
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Giá: ${product.price} VND</p>
            `;
            // Thêm card vào container
            container.appendChild(productCard);
        });
    });