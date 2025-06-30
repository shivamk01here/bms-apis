const { sendModalMail } = require('../services/modalService');

exports.handleModalForm = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    await sendModalMail({ name, email, message });
    return res.json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('[Modal Form Error]', error);
    return res.status(500).json({ success: false, message: 'Something went wrong.' });
  }
};
