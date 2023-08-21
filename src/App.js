import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default function App(){
  const apiKey = "713afcce099b441b93dcc69d28ba76a0";

 
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
        color='#f11946'
      />
          <Routes>
            <Route exact path="/"  element={<News apiKey={apiKey} key ="general" pageSize={6}  country ="in" category="general" />} />
            <Route exact path="buisness" element={<News apiKey={apiKey} key ="buisness" pageSize={6}  country ="in" category="business" />} />
            <Route exact path="Sports" element={<News apiKey={apiKey} key ="sports" pageSize={6}  country ="in" category="sports" />} />
            <Route exact path="Science" element={<News apiKey={apiKey} key ="science" pageSize={6}  country ="in" category="science" />} />
            <Route exact path="Entertainment" element={<News apiKey={apiKey} key ="Entertainment" pageSize={6}  country ="in" category="entertainment" />} />
          </Routes>
        </Router>
      </div>
    );
  }

