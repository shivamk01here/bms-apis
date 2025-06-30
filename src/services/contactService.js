const { saveContact } = require('../Models/ContactModel');
const transporter = require('../config/mailer');

exports.handleContactForm = async (formData) => {
  try {
    console.log("🚀 Saving contact to DB...");
    await saveContact(formData);
    console.log("✅ Contact saved.");

    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'sk.yahoo23@gmail.com, rishabhsagar173@gmail.com, ajeets1998@gmail.com',
      subject: `New Contact Form from ${formData.name}`,
      html: `
        <h3>New Submission</h3>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Budget:</strong> ${formData.budget}</p>
        <p><strong>Message:</strong><br>${formData.message}</p>
      `
    };

    console.log("📤 Sending email...");
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully.");

  } catch (err) {
    console.error("❌ Error in handleContactForm:", err); 
    throw new Error("Failed to process contact form. See logs.");
  }
};
