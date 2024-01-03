import { moodTypeNames } from './MoodGraphic';

type MoodRecordProps = {
    moodDate: Date | undefined;
    moodType: number;
}
function MoodRecordRow(props:MoodRecordProps) {
    const {moodDate, moodType} = props;    

    function formatDate(inputDate: Date) {
        const date = new Date(inputDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
        const year = date.getFullYear();
      
        return `${day}/${month}/${year}`;
    }
    
  return (
    <div className='p-2 m-2 border-2 border-solid rounded-md border-secondary'>
       <div className='flex justify-center text-center font-Montserrat'>
       <h1 className='text-left'>{formatDate(moodDate!)}</h1>
        <h1 className='ml-4'>{moodTypeNames[moodType]}</h1>
       </div>
    </div>
  );
}

export default MoodRecordRow;