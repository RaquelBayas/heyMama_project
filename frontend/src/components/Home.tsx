import Menu from "./Menu"
import Search from "./Search"

function Home() {
  return (
    <div className='w-screen h-screen bg-background grid overflow-hidden grid-cols-[100px,1fr]'>
      <Menu/>
      <div className="grid w-full grid-rows-[5em_1fr]">
        <div className='flex flex-col justify-center mt-3 mb-3'>
         <div className='flex justify-evenly'><Search /></div>
          <div className='w-full mt-2 mb-2 border-b border-secondary'></div>
        </div>        
        
      </div>         
    </div>
  )
}

export default Home;