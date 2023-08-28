import { Route, Routes } from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import Main from "./pages/Main";

import Gophergrades from "./pages/projects/Gophergrades";
import Emoji from "./pages/projects/Emoji";
import Signol from "./pages/projects/Signol";
import Schedule from "./pages/projects/Schedule";

import Valleyfair from "./pages/experience/valleyfair";
import Cigna from "./pages/experience/cigna";

import UMN from "./pages/education/UMN";
import SHS from "./pages/education/SHS";

import ReactGA from 'react-ga4';
const TRACKING_ID = "G-638SW67Q6Y"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Main />} />

        <Route path="/projects/gophergrades" element={<Gophergrades />} />
        <Route path="/projects/emoji" element={<Emoji />} />
        <Route path="/projects/signol" element={<Signol />} />
        <Route path="/projects/schedule" element={<Schedule />} />

        <Route path="/experience/valleyfair" element={<Valleyfair />} />
        <Route path="/experience/cigna" element={<Cigna />} />

        <Route path="/education/UMN" element={<UMN />} />
        <Route path="/education/SHS" element={<SHS />} />
      </Route>
    </Routes>
  );
}

export default App;
