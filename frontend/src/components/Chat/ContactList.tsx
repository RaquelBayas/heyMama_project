
function ContactList({ receiver }) {

    console.log(receiver);


    return (
        <article className="p-6 hover:bg-gray-300">{receiver.username}</article>
    );
}

export default ContactList;