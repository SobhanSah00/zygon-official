import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loder/Loader";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Countdown from "./components/Countdown/Countdown";
import VideoSection from "./components/VideoSection/VideoSection";
import Carousel from "./components/featureSection/Feature";
import Footer from "./components/Footer/Footer";
import StatisticsSection from "./components/NumberTicker/NoOfEvents";
import Gallary from "./components/Gallery/Gallary";
import ShirtCard from "./components/3dShirt/Shirt";
import SponsorsPage from "./components/Sponsors/Sponsors";
import StickyHeader from "./components/StickyHeader/StickyHeader";
import "animate.css";
import { AdminZygonControl } from "./components/admin/AdminZygonControl";
import { UpdateZygonPage } from "./components/admin/AdminUpdataPage";
import { ZygonPointTable } from "./components/OdcPointTableTest/PointTable";
import EventsPage from "./components/Event/EventsPage";
import WhatsNew from "./components/WhatsNew/WhatsNew";
import Team from "./components/Team/Team";
import Message from "./components/Message/Message";
import OdesseyCup from "./components/OdesseyCup/OdesseyCup";
import Navigation from "./components/Tabs/Tab2"
import AnimatedName from "./components/AnimatedName/AnimatedName";
// import EventSruti from "./components/Event /EventSruti";

const App = () => {
  const [screenLoading, setScreenLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setScreenLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      <div>
        {!screenLoading && <StickyHeader />}
        <Routes>
          <Route
            path="/"
            element={
              screenLoading ? ( // Changed from false to screenLoading
                <Loader />
              ) : (
                // <AnimatedName title={"ZYGON 2024"}></AnimatedName>
                <>
                  <Home />
                  <About />
                  <Countdown />
                  <StatisticsSection />
                  <VideoSection />
                  <Carousel />
                  <Footer></Footer>
                </>
              )
            }
          />

          <Route
            path="/Events"
            element={
              screenLoading ? ( // Changed from false to screenLoading
                <Loader />
              ) : (
                <>
                  {/* <UniversalGlitterEffect> */}
                  <EventsPage></EventsPage>
                  {/* <Navigation /> */}
                  {/* </UniversalGlitterEffect> */}
                </>
              )
            }
          />

          <Route
            path="/Message"
            element={
              screenLoading ? ( // Changed from false to screenLoading
                <Loader />
              ) : (
                <>
                  {/* <UniversalGlitterEffect> */}
                  <Message></Message>
                  {/* </UniversalGlitterEffect> */}
                </>
              )
            }
          />
          <Route
            path="/Odesseycup"
            element={
              screenLoading ? ( // Changed from false to screenLoading
                <Loader />
              ) : (
                <>
                  {/* <UniversalGlitterEffect> */}
                  <OdesseyCup></OdesseyCup>
                  {/* </UniversalGlitterEffect> */}
                </>
              )
            }
          />

          <Route
            path="/Gallary"
            element={
              screenLoading ? ( // Changed from false to screenLoading
                <Loader />
              ) : (
                <>
                  <Gallary />
                </>
              )
            }
          />

          <Route
            path="/shirt"
            element={
              screenLoading ? ( // Changed from `false` to `screenLoading`
                <Loader />
              ) : (
                <>
                  <ShirtCard />
                </>
              )
            }
          />
          <Route
            path="/sponsors"
            element={
              screenLoading ? ( // Changed from `false` to `screenLoading`
                <Loader />
              ) : (
                <>
                  <SponsorsPage />
                </>
              )
            }
          />
          <Route
            path="/Admin"
            element={
              screenLoading ? ( // Changed from `false` to `screenLoading`
                <Loader />
              ) : (
                <>
                  <AdminZygonControl />
                </>
              )
            }
          />
          <Route
            path="/update"
            element={
              screenLoading ? ( // Changed from `false` to `screenLoading`
                <Loader />
              ) : (
                <>
                  <UpdateZygonPage />
                </>
              )
            }
          />
          <Route
            path="/PointTable"
            element={
              screenLoading ? ( // Changed from `false` to `screenLoading`
                <Loader />
              ) : (
                <>
                  <ZygonPointTable />
                </>
              )
            }
          />
          <Route
            path="/Whatsnew"
            element={
              screenLoading ? ( // Changed from `false` to `screenLoading`
                <Loader />
              ) : (
                <>
                  <WhatsNew></WhatsNew>
                </>
              )
            }
          />
          <Route path="/Team" element={<Team></Team>} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
