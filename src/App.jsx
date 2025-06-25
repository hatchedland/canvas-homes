import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Home } from "./components/Home";  
import { Overview } from "./components/Overview";
import EnquiryForm from "./components/EnquiryForm";
import Clients from "./components/Clients";
import Founder from "./components/Founder";
import Footer from "./components/Footer";
import TermsOfUse from "./components/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy";


function App() {
  return (
    <Router>
      <div className="font-body md:text-xl bg-white">
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route 
            path="/" 
            element={
              <div>
                <Home />
                <Overview />
                <EnquiryForm />
                <Clients />
                <Founder />
              </div>
            } 
          />
          
          {/* Terms of Use Page */}
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          
          {/* Privacy Policy Page */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />


        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
