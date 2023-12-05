import React, { useState } from 'react'
import { FaRegFaceSmile , FaRegFaceGrinBeam, FaRegFaceMeh, FaRegFaceAngry, FaRegFaceLaughBeam   } from "react-icons/fa6";

function MoodTracker() {

    const [moodState, setMoodState] = useState('');
    
    function handleValueChange(event:React.ChangeEvent<HTMLInputElement>) {
        setMoodState(event.target.value)
    }

    function handleMoodSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.log(moodState)
    }

  return (
    <div className='p-2 m-2 text-center bg-white rounded-md w-fit h-fit'>
        <form onSubmit={handleMoodSubmit} className='flex-inline'>
        <div>Please choose your mood</div>
            <div className="flex">
                <div className="flex justify-content-center">
                    <div className="flex align-items-center">
                        <div className='flex flex-col justify-center p-2 align-middle bg-pink-200'>
                            <span className='mx-auto text-4xl text-pink-600'><FaRegFaceLaughBeam /></span>
                            <div >
                                <input type='radio' name='Feliz'  value="Feliz" checked={moodState === 'Feliz'} onChange={handleValueChange}/>
                                <label htmlFor="f5" className="ml-1 mr-3">Feliz</label>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center p-2 align-middle bg-purple-200'>
                            <span className='mx-auto text-4xl text-purple-800'><FaRegFaceSmile  /> </span>
                            <div>
                            <input type='radio' name='Bien'  value="Bien" checked={moodState === 'Bien'} onChange={handleValueChange} />
                            <label htmlFor="f5" className="ml-1 mr-3">Bien</label>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center p-2 align-middle bg-orange-200'>
                            <span className='mx-auto text-4xl text-orange-600'><FaRegFaceMeh   /> </span>
                            <div>
                            <input type='radio' name='Regular'  value="Regular" checked={moodState === 'Regular'} onChange={handleValueChange}/>
                            <label htmlFor="f5" className="ml-1 mr-3">Regular</label>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center p-2 align-middle bg-red-200'>
                            <span className='mx-auto text-4xl text-red-600'><FaRegFaceAngry  /> </span>
                            <div>
                            <input type='radio' name='Mal'  value="Mal" checked={moodState === 'Mal'} onChange={handleValueChange}/>
                            <label htmlFor="f5" className="ml-1 mr-3">Mal</label>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center p-2 align-middle bg-blue-200'>
                            <span className='mx-auto text-4xl text-blue-800'><FaRegFaceGrinBeam /> </span>
                            <div>
                            <input type='radio' name='Triste'  value="Triste" checked={moodState === 'Triste'} onChange={handleValueChange}/>
                            <label htmlFor="f5" className="ml-1 mr-3">Triste</label>   
                            </div> 
                        </div>                                            
                    </div>
                </div>
            </div>        
        <button type="submit" className='p-2 m-4 mb-2 rounded-md bg-primary'>Registrar estado</button>
        </form>
    </div>
  )
}

export default MoodTracker