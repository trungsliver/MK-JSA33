// Lấy dữ liệu từ API
fetch('https://jsonplaceholder.typicode.com/todos')
    // Chuyển đổi dữ liệu thành JSON
    .then(response => response.json())
    // Xử lý dữ liệu
    .then(data => {
        // Dùng DOM để lấy container (thẻ div chứa danh sách todos)
        const container = document.getElementById('todo-list');

        // Duyệt danh sách todo (data)
        for (let i = 0; i < 20; i++) {
            // Lấy từng todo
            const todo = data[i]; 

            // Tạo thẻ div có class='todo-item' cho từng todo
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item'); 

            // Thêm nội dung cho thẻ div
            todoItem.innerHTML = `
                <h3>${todo.title}</h3>
                <p>ID: ${todo.id}</p>
                <p>User ID: ${todo.userId}</p>
                <p>Completed: ${todo.completed}</p>
            `;

            // Thêm thẻ div vào container
            container.appendChild(todoItem);
        }
    })


fetch('https://jsonplaceholder.typicode.com/posts')
    // Chuyển đổi dữ liệu thành đối tượng JavaScript (dạng json)
    .then(response => response.json())
    // Xử lý dữ liệu sau khi chuyển đổi
    .then(data => {
        // Dùng DOM lấy container (thẻ div chứa danh sách post)
        const container = document.getElementById('post-list');

        // Duyệt danh sách post (data đã lấy về)
        for (let i=0; i<20; i++){
            const item = data[i];
            // Tạo thẻ card cho từng post
            const card = document.createElement('div');
            card.className = 'post-card';
            
            card.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.body}</p>
            `;
            
            // Thêm thẻ card vào container
            container.appendChild(card);
        }
    })