import "./App.css";
import Advantages from "./components/advantages";
import { Carousel } from "./components/carousel";
import ContactUs from "./components/contactUs";
import LogoCarouselPage from "./components/partners";
import Edudesign from "./components/edudesign.jsx";
import TeachingTech from "./components/techingTech.jsx";
import Labs from "./components/labs.jsx";
import Academy from "./components/academy.jsx";
import Transfer from "./components/transfer.jsx";
import Kosmosx from "./components/kosmosx.jsx";

function App() {
    return (
        <>
            <div
                style={{
                    background:
                        "transparent linear-gradient(180deg, #d5f0f7 0%, #ffffff 100%) 0% 0% no-repeat padding-box",
                }}
                className="min-h-screen"
            >
                <Carousel className="border-b"/>
                {/* <WhoWeUs /> */}
                <Advantages/>
                <Edudesign/>
                <TeachingTech/>
                <Labs/>
                <Academy/>
                <Transfer/>
                <Kosmosx/>
                <ContactUs/>
                <LogoCarouselPage/>
            </div>
        </>
    );
}

export default App;
