import express from "express";

import { getConversation, newConversation, getMessage, postMessage } from '../controllers/chat.controller.js'

const chatRoutes = express.Router();

console.log('rutas del chat');

chatRoutes.post('/', newConversation);
chatRoutes.get('/:userId', getConversation);
chatRoutes.post('/msg', postMessage);
chatRoutes.get('/msg/:conversationId', getMessage);


export { chatRoutes };