import { Link } from "react-router-dom"

interface ForumCardProps {
    img: string
    alt: string
    bg: string
    title: string
    text: string
    page: string
}

function ForumCard({ img, alt, bg, title, text, page }: ForumCardProps) {


    return (
        <Link to={page}>
            <article className="flex bg-white rounded-md gap-12 p-3 border-2 border-primary drop-shadow-md w-[42rem] mw150:w-max mw68:flex-col mw68:gap-4 mw45:text-center">
                <img src={img} alt={alt} width='125px' className={`bg-${bg}`} />
                <div className="mr-12 mt-4 mw150:m-0">
                    <h2 className="font-semibold text-2xl my-2 mh150:m-0">{title}</h2>
                    <p className="w-[18rem] mw68:w-[15rem] mw45:hidden ">{text}</p>
                </div>
            </article>
        </Link>
    )
}

export default ForumCard