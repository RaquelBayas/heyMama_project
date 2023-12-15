import MoodTracker from './MoodTracker';
import MoodRecord from './MoodRecord';
import Menu from './Menu';
import Search from './Search';
import MoodGraphic from './MoodGraphic';
import MoodProvider from '../context/MoodContext';
function MoodPage() {
  
  return (
    
    <div className='grid w-screen h-screen grid-cols-[auto,1fr] overflow-hidden bg-background'>
  <div><Menu /></div>
  
  <div className="grid w-screen h-fit grid-cols-1 grid-rows-[5em,1fr]">
    <div className='flex flex-col justify-center mt-3 mb-3'>
      <div className='flex justify-evenly'><Search /></div>
      <div className='w-full mt-2 mb-2 border-b border-secondary'></div>
    </div>  
    <div className='mx-auto h-screen w-full flex flex-row ml-4 justify-evenly'>
      <MoodProvider>
      <div className='h-fit'>
        <MoodGraphic/>
        <MoodTracker />
        </div>
        <div className='h-4/5 mb-4'>
          <MoodRecord/>
        </div>   
      </MoodProvider>
    </div>  
  </div>
</div>
  );
}

export default MoodPage;