import React, { useContext, useEffect, useState } from 'react';
import { FaRegFaceMehBlank , FaRegFaceTired, FaRegFaceAngry, FaRegFaceLaughBeam, FaRegFaceSadCry } from "react-icons/fa6";
import { addMood } from '../services/moodService';
import { MoodData } from '../models/MoodData';
import MoodProvider, { MoodContext, MoodContextValue } from '../context/MoodContext';

function MoodTracker() {
    const user = JSON.parse(localStorage.getItem("user")!);
    const { updateMoodData } = useContext(MoodContext) as MoodContextValue;
    const [moodState, setMoodState] = useState('');
    const [moodData, setMoodData] = useState<MoodData[]>([]); //useState('');

    function handleValueChange(event: React.ChangeEvent<HTMLInputElement>) {
        setMoodState(event.target.value);
    }

    function handleMoodSubmit(event: React.FormEvent) {
        event.preventDefault();
        //setMoodData({user_id:1, mood_type_id:parseFloat(moodState)})

        const moodData: MoodData = {
            'user_id': parseInt(user.id),
            'mood_type_id': parseFloat(moodState)
        };
        addMood(moodData).then((response) => {
            console.log(response);
            if (response.error) {
                console.log(response.error);
            }
            return response;
        });
        (document.getElementById('btnForm') as HTMLButtonElement).disabled = true;
        updateMoodData(moodData);
    }

    return (
        <div className='p-2 m-2 text-center rounded-md w-fit h-fit font-Montserrat'>
            <MoodContext.Provider value={{ moodData, updateMoodData }}>
                <MoodProvider>
                    <form onSubmit={handleMoodSubmit} className='flex-inline'>
                        <div className='m-4'>
                            <h1 className='text-xl'>¿Cómo te sientes hoy?</h1>
                        </div>
                        <div className="flex">
                            <div className="flex justify-content-center">
                                <div className="flex align-items-center">
                                    <div className='flex flex-col justify-center p-2 align-middle bg-yellow-200 rounded-l-md'>
                                        <span className='mx-auto text-4xl text-amber-500'><FaRegFaceLaughBeam /></span>
                                        <div >
                                            <input type='radio' name='Alegre' value="1" checked={moodState === '1'} onChange={handleValueChange} />
                                            <label htmlFor="f5" className="ml-1 mr-3">Alegre</label>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center p-2 align-middle bg-blue-200'>
                                        <span className='mx-auto text-4xl text-blue-800'><FaRegFaceSadCry /> </span>
                                        <div>
                                            <input type='radio' name='Triste' value="2" checked={moodState === '2'} onChange={handleValueChange} />
                                            <label htmlFor="f5" className="ml-1 mr-3">Triste</label>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center p-2 align-middle bg-purple-200'>
                                        <span className='mx-auto text-4xl text-purple-800'><FaRegFaceMehBlank  /> </span>
                                        <div>
                                            <input type='radio' name='Miedo' value="3" checked={moodState === '3'} onChange={handleValueChange} />
                                            <label htmlFor="f5" className="ml-1 mr-3">Miedo</label>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center p-2 align-middle bg-green-100'>
                                        <span className='mx-auto text-4xl text-green-600'><FaRegFaceTired /> </span>
                                        <div>
                                            <input type='radio' name='Asco' value="4" checked={moodState === '4'} onChange={handleValueChange} />
                                            <label htmlFor="f5" className="ml-1 mr-3">Asco</label>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center p-2 align-middle bg-red-200 rounded-r-md'>
                                        <span className='mx-auto text-4xl text-red-600'><FaRegFaceAngry/> </span>
                                        <div>
                                            <input type='radio' name='Ira' value="5" checked={moodState === '5'} onChange={handleValueChange} />
                                            <label htmlFor="f5" className="ml-1 mr-3">Ira</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button id='btnForm' type="submit" className='p-2 m-4 mb-2 text-xl rounded-md bg-primary disabled:opacity-25'>Registrar estado</button>
                    </form>
                </MoodProvider>
            </MoodContext.Provider>

        </div>
    );
}

export default MoodTracker;