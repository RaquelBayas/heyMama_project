import Menu from '../Menu';
import Chat from './Chat';

function ChatPage() {
  return (
    <div className="w-screen h-screen bg-background grid grid-cols-[100px,1fr] overflow-x-hidden">
      <Menu />
      <div className="grid w-screen grid-rows-[5em_1fr]">

        <main className="flex gap-4 font-Montserrat justify-center ml-[3.5rem] mb-8">
          
            <Chat/>
          
        </main>
      </div>
    </div>
  );
}

export default ChatPage;