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
import Date from './content/date';
import Export from './content/export';
import Question from './content/question';
import SignIn from './content/sign-in';
import Register from './content/register';
import SurveyList from './content/survey-list';
import TakeSurvey from './content/take-survey';


// Content Components
// import Home from './content/home';
import SurveyListAll from './content/survey-list-all';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>

      {/* Client- Side Routing*/}
      <Routes>
        <Route path="/" element={<SurveyListAll/>} />
        <Route path='/date' element={<Date/>} />
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
