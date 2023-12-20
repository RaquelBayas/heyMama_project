import timeAgo from '../../helpers/timeAgo.js';

function Message({ own, message }) {

    const userRaw = localStorage.getItem('user');
    const user = JSON.parse(userRaw!);


    const li = document.querySelector('li');
    if (message.sender !== user.id) li?.classList.add('self-end');

    console.log(message.text);


    return (
        <li className={`p-6 mx-6 bg-gray-900 text-white rounded-lg w-[500px] ${own ? 'self-end' : ''}`} > {message.text}
            <time className="block">{timeAgo(message.created_at)}</time>
        </ li>
    );
}

export default Message;