require("dotenv").config();

module.exports = {
  // Cấu hình email
  email: {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER, // Email của bạn
      pass: process.env.EMAIL_PASS, // Mật khẩu ứng dụng từ Google
    },
    // Thêm timeout options để tránh connection timeout
    connectionTimeout: 10000, // 10 giây để kết nối
    greetingTimeout: 10000, // 10 giây để greeting
    socketTimeout: 10000, // 10 giây cho socket
    // Thêm pool options để quản lý kết nối tốt hơn
    pool: true,
    maxConnections: 1,
    maxMessages: 3,
  },
};
