import Menu from "./Menu"
import Search from "./Search"

function Forum() {
    return (
        <>
            <header className="bg-primary border-2 border-b-secondary min-h-min py-2">
                <Search />
            </header>
            <div className="flex bg-primary">
                <Menu />
                <main className="flex justify-center">
                    <h1>¡Bienvenida, Sara!</h1>
                    <section className="flex flex-col gap-4">
                        <article>
                            <h2>Foro</h2>
                            <p>Comparte y resuelve tus dudas y pensamientos con personas como tú</p>
                        </article>
                    </section>


                </main>
            </div>
        </>
    )
}

export default Forum