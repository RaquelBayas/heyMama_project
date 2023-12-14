import Landpage from "./Landpage";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


function MainPage() {
    return (
        <div className="overflow-x-hidden overflow-y-hidden">
            <Navbar />
            <Landpage />
            <About />
            <Contact />
            <Link to="/forum">Forum</Link>
        </div>
    )
}
export default MainPage;