const getAll = require("./list")

const getContactById = async (id) => {
    const contacts = await getAll()
    const contactById = await contacts.find(item => item.id === id)
    console.log(contactById)
    return contactById;
}
module.exports = getContactById;