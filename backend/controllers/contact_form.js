import { sendQuery } from "../db/connectDB.js";
import { zodErrorMap } from "../helpers/zodErrorMap.js";
import { ContactForm } from "../schemas/User.js";

async function contact_form(req, res) {

    const { success, error } = ContactForm.safeParse(req.body);

    if (!success) {
        const errors = zodErrorMap(error);

        return res.status(400).send({
            ok: false,
            data: null,
            message: null,
            error: errors
        })
    };

    const { name, phone, email, message } = req.body;

    try {
        const newContactRequest = 'INSERT INTO contact_form (name, phone, email, message) VALUES (?, ?, ?, ?)';

        await sendQuery(newContactRequest, [name, phone, email, message]);

        res.send({
            ok: true,
            error: null,
            data: null,
            message: 'Datos de contacto añadido correctamente.'
        })

    } catch (error) {

        res.status(500).send({
            ok: false,
            data: null,
            error: error
        })
    }
}

export { contact_form };