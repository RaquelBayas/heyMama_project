import { sendQuery } from "../db/connectDB";
import { zodErrorMap } from "../helpers/zodErrorMap";
import { ContactForm } from "../schemas/User";

async function contact_form(req, res){
    
    const { success, error } = ContactForm.safeParse(req.body);

    if(!success){
        const errors = zodErrorMap(error);

        return res.status(400). send({
            ok:false,
            data:null,
            message: null,
            error: errors
        })
    };

    const { name, phone, email, message } = contactData;

    //crear tabla contact_form

    try {
        const newContactRequest = 'INSERT INTO contact_form (name, phone, email, message) VALUES (?, ?, ?, ?)';
        
        await sendQuery(newContactRequest, [name ,phone, email,message]);
        
    } catch (error) {
        
        res.status(500).send({
            ok: false,
            data: null,
            error: error.message
        })
    }
    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'Datos de contacto añadido correctamente.'
      })
}

export { contact_form };