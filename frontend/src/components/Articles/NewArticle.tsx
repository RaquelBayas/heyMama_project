import Menu from "../Menu";
import TextEditor from "./TextEditor";

function NewArticle() {
  return (
    <div className="flex flex-row w-screen h-screen overflow-hidden bg-background">
      <div className="flex-none sm:w-[100px]">
        <Menu />
      </div>
      <div className="flex flex-col w-screen overflow-hidden flex-2">
        <div className="flex items-center justify-center w-full h-screen sm:h-full">
          <TextEditor />
        </div>
      </div>
    </div>
  );
}

export default NewArticle;
