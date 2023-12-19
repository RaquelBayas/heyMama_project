import { useState, useRef } from 'react';
import Menu from './Menu';
import Search from './Search';

function Breathing() {

    const [breathing, setBreathing] = useState('Respira...');
    const [isIntervalActive, setIsIntervalActive] = useState(false);
    const breathIntervalRef = useRef<number | null>(null);
    const ball = document.querySelector('div.ball');

    function initBreath() {
        const ball = document.querySelector('div.ball');
        ball?.classList.add('circle', 'pulse');

        if (!isIntervalActive) {
            setBreathing('Inhala...');

            breathIntervalRef.current = setInterval(() => {
                setBreathing((prevBreathing) =>
                    prevBreathing === 'Inhala...' ? 'Exhala...' : 'Inhala...'
                );
            }, 4000);

            setIsIntervalActive(true);
        }
    }

    function stopBreath() {
        ball?.classList.remove('circle', 'pulse');

        clearInterval(breathIntervalRef.current!);
        setIsIntervalActive(false);
        setBreathing('Respira...');
    }

    return (
        <div className='w-screen h-screen bg-background grid grid-cols-[100px,1fr] overflow-x-hidden'>

            <div><Menu /></div>
            <div className="grid w-screen ">

                <main className="font-Montserrat justify-center ml-[3.5rem]">

                    <div className='mt-[3.5rem]'>
                        <p>Las técnicas de relajación y mindfulness son medidas eficaces para combatir
                            y reducir la ansiedad.
                    
                            
                        </p>
                        <p>Con esta herramienta podrás controlar tu respiración y quitarte el estrés y preocupaciones.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className='mt-12 text-2xl'>{breathing}</h1>
                        <div className='my-24 rounded-full w-52 h-52 bg-secondary ball'></div>
                        <button className='w-32 p-4 mb-8 rounded-md bg-secondary' onClick={initBreath}>EMPEZAR</button>
                        <button className='w-32 p-4 rounded-md bg-secondary' onClick={stopBreath}>PARAR</button>
                    </div>

                </main>
            </div>
        </div>
    );
}

export default Breathing;