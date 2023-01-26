const contactsOperations = require("./db")
const {program} = require("commander")

const invokeAction = async ({ action, name, email, phone, id }) => {
    switch (action) {
        case "list":
            const list = await contactsOperations.list();
            console.log(list)
            break;
        case "get":
            const getContact = await contactsOperations.get(id)
            break;
        case "remove":
            const removeContact = await contactsOperations.remove(id)
            break;
        case "add":
            const addContact = await contactsOperations.add(name, email, phone)
            break;
        default: console.log("Unknown operation")
    }
}

program
    .option("-a, --action <type>", "contact operation")
    .option("-n, --name <type>", "contact name")
    .option("-e, --email <type>", "contact email")
    .option("-p, --phone <type>", "contact phone")
    .option("-i, --id <type>", "contact id")

program.parse(process.argv)

const options = program.opts()

invokeAction(options)