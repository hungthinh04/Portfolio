require('dotenv').config();

module.exports = {
    // Cấu hình email
    email: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER, // Email của bạn
            pass: process.env.EMAIL_PASS  // Mật khẩu ứng dụng từ Google
        }
    }
}; 