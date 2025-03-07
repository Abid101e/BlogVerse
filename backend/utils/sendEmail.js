const nodemailer = require("nodemailer");

module.exports = async (email, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: Number(587),
      auth: {
        user: "mdabidhasan@iut-dhaka.edu",
        pass: "Abisan777",
      },
    });

    await transporter.sendMail({
      from: "mdabidhasan@iut-dhaka.edu",
      to: email,
      subject: subject,
      html: html,
    });
    console.log("Email Sent Successfully");
  } catch (error) {
    console.log("Email Not Sent!");
    console.log(error);
    return error;
  }
};
