import { ReactNode } from "react";
import Forum from "./ForumBase";
import ForumCard from "./ForumCard";

function ForumHome(): ReactNode {

    return (
        <Forum>
            <ForumCard img='/assets/foros.svg' alt='Una imagen de gente hablando' bg='primary' title='Foros' text='Comparte y resuelve tus dudas y pensamientos con personas como tú' page='/Forums' />
            <ForumCard img='/assets/foro-info.svg' alt='Una bombilla' bg='orange-100' title='Información' text='Encuentra información más ampliada de parte de profesionales.' page='/articles' />
        </Forum>
    );
}

export default ForumHome;