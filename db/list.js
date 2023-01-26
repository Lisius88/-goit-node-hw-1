const fs = require('fs/promises');
const path = require('path')

const filePath = path.join(__dirname, 'contacts.json')

const listContacts = async () => {
    const data = await fs.readFile(filePath)
    const list = JSON.parse(data)
    return list;
}
module.exports = listContacts;