import logo from './logo.svg';
import './App.css';
// import Home from './components/Home';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import APIData from './components/APIData'
// import TableData from './components/TableData';
// // import FormData from './components/FormData';
// import Crad from './components/Crad';
import Category from './components/Category'
import APIData from './components/APIData';

function App() {
  return (
    <>
    <APIData/>
    {/* <Category/> */}
      {/* <BrowserRouter>
        <Routes> */}
          {/* <Route path={'/'} element={<APIData/>} /> */}
          {/* <Route path={'/edit/:id'} element={<Crad />} />
          <Route path={'/table'} element={<TableData />} /> */}
        {/* </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
