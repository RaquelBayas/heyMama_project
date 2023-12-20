import { sendQuery } from '../db/connectDB.js'

async function newConversation(req, res, next) {

    const { sender, receiver } = req.body
    console.log('nueva conversacion, sender ' + sender + ' receiver ' + receiver);

    try {
        console.log('insertar en la BBDD');
        await sendQuery(`INSERT INTO conversations (member, member2) VALUES (?, ?)`, [sender, receiver])

        res.send({
            ok: true,
            error: null,
            data: null,
            message: 'Conversacion creada'
        });

    } catch (error) {
        return next(new Error(error.message))
    }

}

async function getConversation(req, res, next) {

    const { userId } = req.params

    console.log('obtener conversacion, id del usuario ' + userId);

    try {
        const results = await sendQuery(`SELECT * FROM conversations WHERE member = ? OR member2 = ?`, [userId, userId])

        res.send({
            ok: true,
            error: null,
            data: results,
            message: 'conversacion obtenida'
        });
    } catch (error) {
        return next(new Error(error.message))
    }
}

async function postMessage(req, res, next) {

    const { conversationId, sender, text } = req.body
    console.log('crear un mensaje, id de la conversacion/chat ' + conversationId + ' sender ' + sender + ' text: ' + text);

    try {
        const result = await sendQuery(`INSERT INTO messages (conversation_id, sender, text) VALUES (?, ?, ?)`, [conversationId, sender, text]);
        console.log('resultado de la BBDD al crear un mensaje: ' + JSON.stringify(result));

        const messageId = result.insertId;
        console.log('id del nuevo mensaje ' + messageId);
        const [newMessage] = await sendQuery(`SELECT * FROM messages WHERE message_id = ?`, [messageId]);
        console.log('mensaje recuperado de la BBDD: ' + JSON.stringify(newMessage));

        res.send({
            ok: true,
            error: null,
            data: newMessage,
            message: 'Mensaje creado',
        });
    } catch (error) {
        return next(new Error(error.message));
    }
}

async function getMessage(req, res, next) {

    const { conversationId } = req.params

    console.log('obtener mensajes, id de la conversacion/chat, mensajes: ' + conversationId);


    try {
        const results = await sendQuery(`SELECT * FROM messages WHERE conversation_id = ?`, [conversationId])
        console.log('resultado de la BBDD: ' + results);

        res.send({
            ok: true,
            error: null,
            data: results,
            message: 'mensajes obtenidos'

        });
    } catch (error) {
        return next(new Error(error.message))
    }
}



export { newConversation, getConversation, getMessage, postMessage };