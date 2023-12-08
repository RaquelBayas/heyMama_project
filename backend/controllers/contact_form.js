import {ContactForm} from "../schemas/User";

function contact_form(req, res){
    
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

    try {
        res.send({
            ok:true,
            message: 'Enviado correctamente',
            error:null,
          })
    } catch (error) {
        console.error(error);
    }
}

export default contact_form;