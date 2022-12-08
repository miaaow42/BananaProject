import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// import logo from './logo.svg';
import './App.css';

// Styles and Fonts
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Comment Components
import Header from './components/header';
import Footer from './components/footer';

// Content Components
import Home from './content/home';
import SurveyListAll from './content/survey-list-all';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>

      {/* Client- Side Routing*/}
      <Routes>
        <Route path="/" element={<SurveyListAll/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/survey-list-all" element={<SurveyListAll/>} />
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
