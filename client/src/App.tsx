import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Main from './layout/main/Main';
import About from './layout/about/About';
import Navigation from './components/navigation/Navigation';
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
              <Routes>
                  <Route path = "/" element = {<Main/>}></Route>
                  <Route path = "/about" element = {<About/>}></Route>
              </Routes>
        </BrowserRouter>
  );
}

export default App;
