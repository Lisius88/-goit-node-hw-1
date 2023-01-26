const getAll = require("./list")
const fs = require('fs/promises');
const path = require('path')
const filePath = path.join(__dirname, 'contacts.json')

const deleteContactById = async (id) => {
    const contacts = await getAll()
    const idx =  contacts.findIndex(item => item.id === id)
    if (idx === -1) {
        return null
    }
    const contactsAfterDelete = await contacts.filter((_, index) => index !== idx)
    await fs.writeFile(filePath, JSON.stringify(contactsAfterDelete))
    console.log(contacts[idx])
    return contacts[idx];
}
module.exports = deleteContactById;