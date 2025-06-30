const transporter = require('../config/mailer');

exports.sendModalMail = async ({ name, email, message }) => {
  const mailOptions = {
    from: `"Contact Modal" <${process.env.EMAIL_USER}>`,
    to: 'sk.yahoo23@gmail.com, rishabhsagar173@gmail.com, ajeets1998@gmail.com',
    subject: `New Modal Contact: ${name}`,
    html: `
      <h2>New Contact from Modal</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `
  };

  await transporter.sendMail(mailOptions);
};
