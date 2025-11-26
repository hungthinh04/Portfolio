require("dotenv").config();

module.exports = {
  // Cấu hình email với timeout và TLS options
  email: {
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Email của bạn
      pass: process.env.EMAIL_PASS, // Mật khẩu ứng dụng từ Google
    },
    tls: {
      // Không reject các certificate không hợp lệ (để tránh lỗi)
      rejectUnauthorized: false,
    },
    // Tăng timeout để tránh lỗi connection timeout
    connectionTimeout: 10000, // 10 giây
    greetingTimeout: 10000,
    socketTimeout: 10000,
    // Retry logic
    pool: true,
    maxConnections: 1,
    maxMessages: 3,
  },
};
