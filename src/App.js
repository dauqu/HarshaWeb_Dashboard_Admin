import { Route,Routes } from 'react-router-dom';

import axios from 'axios';
import Base from './components/Base/Base';

import App_reqs from './components/App_reqs';
import Web_reqs from './components/Web_reqs';
import Contacts from './components/Contacts';
import Quotes from './components/Quotes';
import 'react-toastify/dist/ReactToastify.css';

// axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Base/>}></Route>
        <Route path='/app-reqs' element={<App_reqs/>}></Route>
        <Route path='/web-reqs' element={<Web_reqs/>}></Route>
        <Route path='/web-reqs' element={<Web_reqs/>}></Route>
        <Route path='/quotes' element={<Quotes/>}></Route>
        <Route path='/contacts' element={<Contacts/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
