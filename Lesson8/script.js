// Khai báo link API
const API_URL = "https://dummyjson.com/products";

// Lấy API
fetch(API_URL)
    // Chuyển đổi dữ liệu sang JSON
    .then((response) => response.json())
    // Xử lý dữ liệu JSON
    .then((data) => {
        // Dùng DOM lấy container
        const container = document.getElementById("product-container");

        // Hiển thị toàn bộ sản phẩm
        data.products.forEach((product) => {
            // Tạo thẻ div cho từng sản phẩm
            const card = document.createElement("div");
            card.classList.add("product-card");

            // Lấy nội dung sản phẩm
            card.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                <div class="product-info">
                    <h3>${product.title}</h3>
                    <p class="category">${product.category}</p>
                    <p class="description">${product.description}</p>
                    <div class="product-bottom">
                        <span class="price">$${product.price}</span>
                        <span class="rating">⭐ ${product.rating}</span>
                    </div>
                    <p class="stock">Còn lại: ${product.stock}</p>
                </div>
            `
            // Thêm thẻ sản phẩm vào container
            container.appendChild(card);
        })
    })