const nodemailer = require('nodemailer');
const config = require('../config/email.config');

// Khởi tạo transporter
const transporter = nodemailer.createTransport(config.email);

// Controller xử lý email
const emailController = {
    // Gửi email
    sendEmail: async (req, res) => {
        try {
            const { name, email, subject, message } = req.body;

            // Cấu hình email gửi đến bạn
            const mailOptions = {
                from: email,
                to: process.env.EMAIL_USER,
                subject: `[Portfolio Contact] ${subject}`,
                html: `
                    <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
                        <div style="background: linear-gradient(135deg, #64ffda 0%, #00b8d4 100%); padding: 2px;">
                            <div style="background: #ffffff; padding: 20px;">
                                <h2 style="color: #0a192f; margin-bottom: 20px; text-align: center;">🎉 Thông Tin Liên Hệ Mới</h2>
                                
                                <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                                    <p style="margin: 10px 0;"><strong style="color: #0a192f;">Họ tên:</strong> ${name}</p>
                                    <p style="margin: 10px 0;"><strong style="color: #0a192f;">Email:</strong> ${email}</p>
                                    <p style="margin: 10px 0;"><strong style="color: #0a192f;">Tiêu đề:</strong> ${subject}</p>
                                </div>

                                <div style="background: #f8f9fa; padding: 15px; border-radius: 5px;">
                                    <p style="margin: 0 0 10px 0;"><strong style="color: #0a192f;">Nội dung:</strong></p>
                                    <p style="margin: 0; line-height: 1.6;">${message}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            };

            // Gửi email đến bạn
            await transporter.sendMail(mailOptions);

            // Gửi email phản hồi tự động
            const autoReplyOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: '🌟 Cảm ơn bạn đã quan tâm đến hồ sơ của tôi',
                html: `
                    <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
                        <div style="background: linear-gradient(135deg, #64ffda 0%, #00b8d4 100%); padding: 2px;">
                            <div style="background: #ffffff; padding: 20px;">
                                <div style="text-align: center; margin-bottom: 30px;">
                                    <h2 style="color: #0a192f; margin: 0;">Kính gửi ${name},</h2>
                                </div>

                                <div style="line-height: 1.8; margin-bottom: 25px;">
                                    <p>Tôi xin chân thành cảm ơn sự quan tâm của Quý công ty đối với hồ sơ ứng tuyển của tôi. Đây thực sự là một cơ hội quý báu đối với tôi.</p>
                                    
                                    <p>Tôi rất vinh dự khi nhận được sự quan tâm từ phía Quý công ty và mong muốn có cơ hội được trao đổi chi tiết hơn về những đóng góp mà tôi có thể mang lại.</p>

                                    <p>Tôi sẽ phản hồi chi tiết trong thời gian từ 2-4 giờ tới để không làm gián đoạn quá trình tuyển dụng của Quý công ty.</p>
                                </div>

                                <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 25px;">
                                    <h3 style="color: #0a192f; margin: 0 0 15px 0;">Trong thời gian chờ đợi, mời Quý công ty tham khảo thêm:</h3>
                                    <ul style="margin: 0; padding-left: 20px;">
                                        <li style="margin-bottom: 10px;">Portfolio và các dự án của tôi trên <a href="https://github.com/nthanhtoan61" style="color: #00b8d4; text-decoration: none;">GitHub</a></li>
                                        <li style="margin-bottom: 10px;">Hoạt động cá nhân trên <a href="https://www.facebook.com/thxtoan15/" style="color: #00b8d4; text-decoration: none;">Facebook</a></li>
                                    </ul>
                                </div>

                                <div style="text-align: center; margin-top: 30px;">
                                    <p style="color: #666; font-size: 14px;">Trân trọng,</p>
                                    <p style="color: #0a192f; font-weight: bold; margin: 5px 0;">Nguyễn Thanh Toàn</p>
                                    <p style="color: #666; font-size: 14px;">Full Stack Developer</p>
                                </div>

                                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; font-style: italic;">
                                    <p style="color: #666; font-size: 12px;">Đây là email tự động, nhưng tôi sẽ phản hồi cá nhân trong thời gian sớm nhất.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            };

            await transporter.sendMail(autoReplyOptions);

            res.status(200).json({ 
                success: true, 
                message: 'Email đã được gửi thành công!' 
            });

        } catch (error) {
            console.error('Lỗi khi gửi email:', error);
            res.status(500).json({ 
                success: false, 
                message: 'Có lỗi xảy ra khi gửi email', 
                error: error.message 
            });
        }
    }
}

module.exports = emailController; 