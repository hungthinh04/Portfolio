require("dotenv").config();
const express = require("express");
const cors = require("cors");
const emailRoutes = require("./routes/email.routes");

const app = express();

// Cấu hình CORS - cho phép tất cả origins trong development, có thể giới hạn trong production
const corsOptions = {
  origin: function (origin, callback) {
    // Cho phép requests không có origin (như mobile apps, curl, Postman)
    if (!origin) return callback(null, true);

    // Trong production, bạn có thể giới hạn origins cụ thể
    // Hiện tại cho phép tất cả để tránh lỗi CORS
    callback(null, true);

    // Nếu muốn giới hạn, uncomment và thêm domains của bạn:
    /*
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:5000',
      'http://127.0.0.1:3000',
      'http://127.0.0.1:5000',
      'https://portfolio-cvk9.onrender.com',
      'https://your-portfolio-domain.com'
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
    */
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  optionsSuccessStatus: 200, // Một số trình duyệt cũ cần status 200 cho OPTIONS
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/email", emailRoutes);

// Health check route - để kiểm tra server có đang chạy không
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server đang hoạt động!",
    timestamp: new Date().toISOString(),
  });
});

// Test route
app.get("/test", (req, res) => {
  res.json({ message: "Server đang hoạt động!" });
});

// Port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server đang chạy trên port ${PORT}`);
});
