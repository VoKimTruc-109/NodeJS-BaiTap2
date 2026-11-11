const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <title>Thông tin sinh viên</title>
        </head>
        <body>
            <h1>THÔNG TIN SINH VIÊN</h1>
            <p>Họ và tên: Võ Kim Trúc</p>
            <p>Mã sinh viên: CDCNTT18A31</p>
            <p>Chào mừng đến với ứng dụng Node.js!</p>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});