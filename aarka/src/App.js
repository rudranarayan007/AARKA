import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import LeftMenu from './components/LeftMenu';
import CenterMenu from './components/CenterMenu';
import Firstpage from './components/Firstpage';
import Secondpage from './components/Secondpage';
import Thirdpage from './components/Thirdpage';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page26 from './Page/Page26';
import Page27 from './Page/Page27';
import Page45 from './Page/Page45';
function App() {
  return (
    <div className="App">
    
{/* <Firstpage/> */}
{/* <Secondpage/> */}
{/* <Thirdpage/> */}

{/* <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Firstpage />}> */}
          {/* <Route index element={<Firstpage />} /> */}
          {/* <Route path="/" element={<Firstpage />} />
          <Route path="/dashboard" element={<Firstpage />} />
          <Route path="/users" element={<Secondpage />} />
          <Route path="/price" element={<Thirdpage />} /> */}
        {/* </Route> */}
      {/* </Routes> */}
    {/* </BrowserRouter>  */} 


    {/* <Page26/>
    {/* <Page45/> */}
      <Page27/>


      {/* <Navigation placeholder='Search Here...'/>
      {/* <Logo/> */}
      {/* <LeftMenu/>
      <CenterMenu/> */} 
      
    </div>
  );
}

export default App;
