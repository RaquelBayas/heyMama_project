import { useState } from 'react'
import Menu from './Menu'
import Search from './Search'

function Breathing() {

    const [breathing, setBreathing] = useState('Respira...')

    const ball = document.querySelector('div.ball')

    function handleClick(e) {

        if (e.target.innerText === 'EMPEZAR') {
            ball?.classList.add('circle', 'pulse')
            setBreathing('Inhala...')

        } else {
            ball?.classList.remove('circle', 'pulse')
            setBreathing('Respira...')
        }
    }

    return (
        <div className='w-screen h-screen bg-background grid grid-cols-[100px,1fr] overflow-x-hidden'>

            <Menu />
            <div className="grid w-screen grid-rows-[5em_1fr]">

                <div className='flex flex-col justify-center mt-3 mb-3 ml-[3.5rem]'>
                    <div className='flex justify-evenly'><Search /></div>
                    <div className='w-screen mt-2 mb-2 border-b border-secondary'></div>
                </div>

                <main className="font-Montserrat justify-center ml-[3.5rem]">

                    <div className="flex flex-col justify-center items-center">
                        <h1 className='text-2xl mt-12'>{breathing}</h1>
                        <div className='w-52 h-52 rounded-full bg-secondary my-24 ball'></div>
                        <button className='bg-secondary mb-8 p-4 rounded-md w-32' onClick={(e) => handleClick(e)}>EMPEZAR</button>
                        <button className='bg-secondary p-4 rounded-md w-32' onClick={(e) => handleClick(e)}>PARAR</button>
                    </div>

                </main>
            </div>
        </div>
    )
}

export default Breathing