import React, { useState } from 'react';
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
// import Home from './content/home';
import SurveyListAll from './content/survey-list-all';
import Date from './content/date';
import Export from './content/export';
import Question from './content/question';
import Login from './authentication/login';
import Register from './authentication/register';
import Logout from './authentication/logout';
import SurveyList from './content/survey-list';
import TakeSurvey from './content/take-survey';
import UpdateQMC from './content/update-question-mc';
import UpdateQSA from './content/update-question-sa';
import UpdateQTF from './content/update-question-tf';
import UpdateSuevey from './content/update-survey';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>

      {/* Client- Side Routing*/}
      <Routes>
        <Route path="/" element={<SurveyListAll/>} />
        <Route path='/date' element={<Date/>} />
        <Route path='/export' element={<Export/>} />
        <Route path='/question' element={<Question/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/survey-list' element={<SurveyList/>} />
        <Route path='/take-survey' element={<TakeSurvey/>} />
        <Route path='/update-question-mc' element={<UpdateQMC/>} />
        <Route path='/update-question-sa' element={<UpdateQSA/>} />
        <Route path='/update-question-tf' element={<UpdateQTF/>} />
        <Route path='/update-survey' element={<UpdateSuevey/>} />
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
