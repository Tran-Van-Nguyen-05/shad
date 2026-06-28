// nf_block_app.js - Chan Netflix chuyen sang App
let body = $response.body;
let url = $response.url;

// Thay toan bo noi dung trang thanh browse
let newHtml = `<!DOCTYPE html>
<html>
<head>
    <title>Netflix</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body { background: #141414; color: white; font-family: Arial; text-align: center; padding-top: 100px; }
        h1 { font-size: 24px; }
        p { color: #999; margin: 20px; }
        .btn { background: #E50914; color: white; padding: 15px 40px; border: none; border-radius: 4px; font-size: 18px; text-decoration: none; display: inline-block; margin: 10px; }
        .btn-gray { background: #333; }
    </style>
</head>
<body>
    <h1>Đã mở khóa Netflix</h1>
    <p>Nhấn nút bên dưới để vào xem phim</p>
    <a href="https://www.netflix.com/browse" class="btn">Vào Netflix</a>
    <br><br>
    <a href="https://www.netflix.com/login" class="btn btn-gray">Đăng nhập</a>
    <script>
        // Xoa tat ca redirect den App
        window.location.replace = function(){};
        window.location.href = "https://www.netflix.com/browse";
        setTimeout(function(){
            window.location.href = "https://www.netflix.com/browse";
        }, 1000);
    </script>
</body>
</html>`;

$done({body: newHtml, headers: {'Content-Type': 'text/html; charset=utf-8'}});