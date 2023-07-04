
import React from 'react'
import NavBar from './components/navbar/NavBar';
import {action,originals,horror,comedy} from './urls'
import "./App.css";
import Banner from './components/Banner/Banner';
import RowPost from './components/Rowpost/Rowpost';

function App() {
  return (
    <div className="App">
    
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
    </div>
  );
}

export default App;
