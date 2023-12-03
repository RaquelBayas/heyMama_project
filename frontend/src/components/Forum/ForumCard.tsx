
interface ForumCardProps {
    img: string
    alt: string
    bg: string
    title: string
    text: string
}

function ForumCard({ img, alt, bg, title, text }: ForumCardProps) {
    return (
        <article className="flex bg-white rounded-md p-3 border-2 border-primary w-[42rem] drop-shadow-md">
            <img src={img} alt={alt} width='125px' className={`mr-12 bg-${bg}`} />
            <div className="mr-12 mt-4">
                <h2 className="font-semibold text-2xl my-2">{title}</h2>
                <p className="w-[18rem]">{text}</p>
            </div>
        </article>
    )
}

export default ForumCard