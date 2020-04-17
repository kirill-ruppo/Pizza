const { transporter } = require("../config");

class Email {
  static confirm(el) {
    const mailOptions = {
      from: "qwerty@gmail.com",
      to: el.email,
      subject: "Test send email",
      html: `Тестовий email від:  ${el.message}`,
      bcc: el.email
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
  static reset(el) {
    const mailOptions = {
      from: "qwerty@gmail.com",
      to: el.email,
      subject: "Reset password",
      html: `Reset password `,
      bcc: el.email
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
  static news(el) {
    const mailOptions = {
      from: "qwerty@gmail.com",
      to: el.email,
      subject: `Новина для: ${el.name}`,
      html: `${el.news} <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg">`,
      bcc: el.email
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
}

module.exports.Email = Email;
