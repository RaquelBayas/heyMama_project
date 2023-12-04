import Landpage from "./Landpage";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";


function MainPage(){
    return(
        <div>
            <Navbar/>
            <Landpage/>
            <About/>
            <Contact/>
        </div>
    )
}
export default MainPage;