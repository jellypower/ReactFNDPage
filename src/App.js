import logo from './logo.svg';
import './App.css';

import FNDNotFoundPage from './components/FNDNotFoundPage/FNDNotFoundPage';
import FNDResultPage from './components/FNDResultPage/FNDResultPage';
import { FNDMainPage } from './components/FNDMainPage/FNDMainPage';
import {FNDRequestPage} from './components/FNDRequestPage/FNDRequestPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (

      
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<FNDMainPage/>}></Route>
          <Route exact path="/request" element={<FNDRequestPage/>}></Route>
          <Route path="/result/:id" element={<FNDResultPage/>}></Route>
          <Route path="/*" element={<FNDNotFoundPage/>}>  </Route>
        
        </Routes>

        </BrowserRouter>
      </div>
  );
}
//
//FNDResultPage

export default App;