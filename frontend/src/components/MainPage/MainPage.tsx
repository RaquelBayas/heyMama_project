import Landpage from "./Landpage";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";


function MainPage() {
    return (
        <div className="overflow-x-hidden overflow-y-hidden">
            <Navbar />
            <Landpage />
            <div className="my-12"><About /></div>
            <div className=""><Contact /></div>
        </div>
    );
}
export default MainPage;