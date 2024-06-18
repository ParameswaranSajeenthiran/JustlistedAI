// sendLinkByMail
const nodemailer = require("nodemailer");

const sendLinkByMail = async (email, token) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: process.env.MAILER_ID,
                pass: process.env.MAIL_PWD
            }
        });

        var mailOptions = {
            from: "justlisted <antonyjesu675@gmail.com>",
            to: email,
            subject: "Email Verification",
            html: `
        <div
          class="container"
          style="max-width: 90%; margin: auto; padding-top: 20px"
        >
          <h2>Welcome to the JustList.ai</h2>
          <h4>You are officially In ✔</h4>
          <p style="margin-bottom: 30px;">Please enter the Email Verification OTP to get started</p>
          <a href="${process.env.MAIL_REDIRECT}/confirmed-email?token=${token}" style="display: inline-block;
           padding: 10px 20px;
            background-color: #EE4335;
             color: #ffffff; text-decoration: none;
              border: none; 
              border-radius: 5px; 
              cursor: pointer;">VERIFY</a>
        </div>
      `
        };

        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });

        return true;
    } catch (error) {
        return false;
    }
};

module.exports = {
    sendLinkByMail
};
