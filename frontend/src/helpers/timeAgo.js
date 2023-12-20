
export default function timeAgo(time) {
    const fechaActual = new Date();
    const fechaMensajeObj = new Date(time);

    const diferenciaEnMs = fechaActual - fechaMensajeObj;
    const segundosTranscurridos = Math.floor(diferenciaEnMs / 1000);
    const minutosTranscurridos = Math.floor(segundosTranscurridos / 60);
    const horasTranscurridas = Math.floor(minutosTranscurridos / 60);
    const diasTranscurridos = Math.floor(horasTranscurridas / 24);
    const mesesTranscurridos = Math.floor(diasTranscurridos / 30);
    const anosTranscurridos = Math.floor(mesesTranscurridos / 12);

    if (anosTranscurridos > 0) {
        return `hace ${anosTranscurridos} ${anosTranscurridos === 1 ? 'año' : 'años'}`;
    } else if (mesesTranscurridos > 0) {
        return `hace ${mesesTranscurridos} ${mesesTranscurridos === 1 ? 'mes' : 'meses'}`;
    } else if (diasTranscurridos > 0) {
        return `hace ${diasTranscurridos} ${diasTranscurridos === 1 ? 'día' : 'días'}`;
    } else if (horasTranscurridas > 0) {
        return `hace ${horasTranscurridas} ${horasTranscurridas === 1 ? 'hora' : 'horas'}`;
    } else if (minutosTranscurridos > 0) {
        return `hace ${minutosTranscurridos} ${minutosTranscurridos === 1 ? 'minuto' : 'minutos'}`;
    } else return;
}