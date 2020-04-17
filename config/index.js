const mysql = require("mysql2");
const nodemailer = require("nodemailer");




module.exports.connection = mysql
  .createConnection({
    host: "uagn.mysql.tools",
    user: "uagn_blog",
    database: "uagn_blog",
    password: "L917_~hvCy"
  })
  .promise();


  module.exports.transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "ruppo.k@gmail.com",
      pass: "20102002"
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  