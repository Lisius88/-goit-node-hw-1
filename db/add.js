const getAll = require("./list")
const fs = require('fs/promises');
const path = require('path')
const filePath = path.join(__dirname, 'contacts.json')
const {v4} = require("uuid")

const add = async (name, email, phone) => {
    const contacts = await getAll()
    const newContact = { id: v4(), name, email, phone }
    console.log(newContact)
    contacts.push(newContact)
    await fs.writeFile(filePath, JSON.stringify(contacts))
}

module.exports = add;