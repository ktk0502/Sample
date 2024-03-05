import Signup from './Components/Signup';
import Login from './Components/Login';
// import Postlist from './Components/Postlist'
// import InfiniteScrollCards from './Components/InfiniteScrollCards';

import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import InfiniteScrollCards from './Components/InfiniteScrollCards';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path='/postlist' element={<InfiniteScrollCards/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
