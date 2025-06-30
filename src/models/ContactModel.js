const db = require('../config/db');

exports.saveContact = async ({name, email, phone, service, message, budget}) =>{
    const [result] = await db.query('INSERT INTO contact (name, email, phone, service, message, budget) VALUES (?, ?, ?, ?, ?, ?)', [name, email, phone, service, message, budget]);
    return result;
};