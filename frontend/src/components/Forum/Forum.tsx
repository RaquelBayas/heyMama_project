import { ReactNode } from "react"
import Menu from "../Menu"
import Search from "../Search"

function Forum({ children }: { children: ReactNode }) {


    // if (path=forumhome) {
    //     const firstSection = document.querySelector('section:first-child')
    //     const h1 = createElement(h1)
    //     h1.InnerText=`¡BIENVENIDA, ${name}!`
    //     firstSection.prepend(h1)
    // }

    return (
        <div className='w-screen h-screen bg-background grid overflow-hidden grid-cols-[100px,1fr]'>

            <Menu />
            <div className="grid w-full grid-rows-[5em_1fr]">

                <div className='flex flex-col justify-center mt-3 mb-3'>
                    <div className='flex justify-evenly'><Search /></div>
                    <div className='w-full mt-2 mb-2 border-b border-secondary'></div>
                </div>

                <main className="flex gap-4 font-Montserrat justify-around">

                    <section className="flex flex-col gap-6 flex-shrink-0">
                        {children}
                    </section>

                    <section className="flex-grow-0 mt-16">
                        <article className="bg-white w-[300px] h-[400px]"></article>
                    </section>

                </main>
            </div>
        </div>
    )
}

export default Forum