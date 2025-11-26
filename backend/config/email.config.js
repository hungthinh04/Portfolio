require("dotenv").config();

// Cấu hình email với fallback options
// Render có thể block port 587, nên ta sẽ thử port 465 (SSL) nếu 587 fail
const getEmailConfig = () => {
  // Kiểm tra nếu đang chạy trên Render (production)
  const isRender =
    process.env.RENDER === "true" || process.env.NODE_ENV === "production";

  const baseConfig = {
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // Tùy chọn để xử lý timeout trên Render
    connectionTimeout: 60000, // 60 giây
    greetingTimeout: 30000, // 30 giây
    socketTimeout: 60000, // 60 giây
    // Tùy chọn pool để quản lý kết nối tốt hơn
    pool: true,
    maxConnections: 1,
    maxMessages: 3,
    // Retry options
    retry: {
      attempts: 3,
      delay: 2000,
    },
    // Tùy chọn TLS
    tls: {
      rejectUnauthorized: false,
      ciphers: "SSLv3",
    },
  };

  // Trên Render, thử dùng port 465 với SSL trước
  if (isRender) {
    return {
      ...baseConfig,
      port: 465,
      secure: true, // SSL required cho port 465
    };
  }

  // Local development dùng port 587
  return {
    ...baseConfig,
    port: 587,
    secure: false, // STARTTLS cho port 587
  };
};

module.exports = {
  email: getEmailConfig(),
};
