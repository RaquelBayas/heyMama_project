
import ForumBase from './ForumBase.tsx'
import ForumCard from './ForumCard.tsx'

function Forum() {

    return (
        <ForumBase>
            <ForumCard img='./src/assets/foros.svg' alt='Una imagen de gente hablando' bg='primary' title='Depresión' text='Comparte y resuelve tus dudas y pensamientos con personas como tú' page='/forum/depresion' />
            <ForumCard img='./src/assets/foros.svg' alt='Una imagen de gente hablando' bg='primary' title='Embarazo' text='Comparte y resuelve tus dudas y pensamientos con personas como tú' page='/forum/embarazo' />
            <ForumCard img='./src/assets/foros.svg' alt='Una imagen de gente hablando' bg='primary' title='Postparto' text='Comparte y resuelve tus dudas y pensamientos con personas como tú' page='/forum/postparto' />
        </ForumBase>
    )
}

export default Forum