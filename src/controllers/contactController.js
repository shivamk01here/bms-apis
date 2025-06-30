const { handleContactForm } = require('../services/contactService');

exports.submitContact = async (req, res) => {
  try {
    await handleContactForm(req.body);
    res.status(200).json({ success: true, message: 'Form submitted successfully.' });
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ success: false, message: 'Something went wrong.' });
  }
};
