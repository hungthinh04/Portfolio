const nodemailer = require("nodemailer");
const config = require("../config/email.config");

// Hàm tạo transporter với cấu hình cụ thể
const createTransporter = (port, secure) => {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: port,
    secure: secure,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: 60000,
    greetingTimeout: 30000,
    socketTimeout: 60000,
    pool: true,
    maxConnections: 1,
    maxMessages: 3,
    retry: {
      attempts: 3,
      delay: 2000,
    },
    tls: {
      rejectUnauthorized: false,
      ciphers: "SSLv3",
    },
    debug: process.env.NODE_ENV === "production",
    logger: true,
  });
};

// Khởi tạo transporter mặc định
let transporter = createTransporter(config.email.port, config.email.secure);

// Hàm gửi email với fallback
const sendEmailWithFallback = async (mailOptions) => {
  const configs = [
    { port: 465, secure: true }, // Thử SSL trước
    { port: 587, secure: false }, // Fallback về STARTTLS
  ];

  let lastError = null;

  for (const cfg of configs) {
    try {
      console.log(
        `Attempting to send email via port ${cfg.port} (secure: ${cfg.secure})...`
      );
      const tempTransporter = createTransporter(cfg.port, cfg.secure);
      await tempTransporter.sendMail(mailOptions);
      console.log(`Email sent successfully via port ${cfg.port}`);
      return; // Thành công, thoát khỏi hàm
    } catch (error) {
      console.error(`Failed to send via port ${cfg.port}:`, error.message);
      lastError = error;
      // Tiếp tục thử config tiếp theo
    }
  }

  // Nếu tất cả đều fail, throw error cuối cùng
  throw lastError;
};

// Controller xử lý email
const emailController = {
  // Gửi email
  sendEmail: async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Email sent to you (notification)
      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `[Portfolio Contact] ${subject}`,
        html: `
                    <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
                        <div style="background: linear-gradient(135deg, #64ffda 0%, #00b8d4 100%); padding: 2px;">
                            <div style="background: #ffffff; padding: 20px;">
                                <h2 style="color: #0a192f; margin-bottom: 20px; text-align: center;">🎉 New Contact Message</h2>
                                
                                <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                                    <p style="margin: 10px 0;"><strong style="color: #0a192f;">Name:</strong> ${name}</p>
                                    <p style="margin: 10px 0;"><strong style="color: #0a192f;">Email:</strong> ${email}</p>
                                    <p style="margin: 10px 0;"><strong style="color: #0a192f;">Subject:</strong> ${subject}</p>
                                </div>

                                <div style="background: #f8f9fa; padding: 15px; border-radius: 5px;">
                                    <p style="margin: 0 0 10px 0;"><strong style="color: #0a192f;">Message:</strong></p>
                                    <p style="margin: 0; line-height: 1.6;">${message}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
      };

      // Gửi email đến bạn với fallback
      await sendEmailWithFallback(mailOptions);

      // Auto-reply email to the sender
      const autoReplyOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "🌟 Thank You for Your Interest",
        html: `
                    <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
                        <div style="background: linear-gradient(135deg, #64ffda 0%, #00b8d4 100%); padding: 2px;">
                            <div style="background: #ffffff; padding: 20px;">
                                <div style="text-align: center; margin-bottom: 30px;">
                                    <h2 style="color: #0a192f; margin: 0;">Dear ${name},</h2>
                                </div>

                                <div style="line-height: 1.8; margin-bottom: 25px;">
                                    <p>Thank you for reaching out to me through my portfolio. I truly appreciate your interest and the opportunity to connect.</p>
                                    
                                    <p>I am honored to receive your message and would be delighted to discuss how I can contribute to your project or organization in more detail.</p>

                                    <p>I will respond to your message personally within 2-4 hours to ensure we can move forward without delay.</p>
                                </div>

                                <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 25px;">
                                    <h3 style="color: #0a192f; margin: 0 0 15px 0;">While you wait, feel free to explore:</h3>
                                    <ul style="margin: 0; padding-left: 20px;">
                                        <li style="margin-bottom: 10px;">My portfolio and projects on <a href="https://github.com/hungthinh04" style="color: #00b8d4; text-decoration: none;">GitHub</a></li>
                                        <li style="margin-bottom: 10px;">Connect with me on <a href="https://www.linkedin.com/in/jimmy-le-588133219/" style="color: #00b8d4; text-decoration: none;">LinkedIn</a></li>
                                    </ul>
                                </div>

                                <div style="text-align: center; margin-top: 30px;">
                                    <p style="color: #666; font-size: 14px;">Best regards,</p>
                                    <p style="color: #0a192f; font-weight: bold; margin: 5px 0;">Le Tai Hung Thinh</p>
                                    <p style="color: #666; font-size: 14px;">Software Engineer</p>
                                </div>

                                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; font-style: italic;">
                                    <p style="color: #666; font-size: 12px;">This is an automated email, but I will respond personally as soon as possible.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
      };

      await sendEmailWithFallback(autoReplyOptions);

      res.status(200).json({
        success: true,
        message: "Email sent successfully!",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      console.error("Error code:", error.code);
      console.error("Error command:", error.command);

      // Xử lý các lỗi cụ thể
      let errorMessage = "An error occurred while sending email";
      if (error.code === "ETIMEDOUT" || error.code === "ECONNREFUSED") {
        errorMessage =
          "Connection timeout. Please check your email configuration or try again later.";
      } else if (error.code === "EAUTH") {
        errorMessage =
          "Email authentication failed. Please check your email credentials.";
      }

      res.status(500).json({
        success: false,
        message: errorMessage,
        error: error.message,
        code: error.code,
      });
    }
  },
};

module.exports = emailController;
