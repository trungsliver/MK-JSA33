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