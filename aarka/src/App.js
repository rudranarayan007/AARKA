
import './App.css';
import Desktoppop from './Component/Desktoppop';
import Nav from './Component/Nav';
import Subadmin from './Page/Subadmin';
import User from './Page/User';

function App() {
  return (
    <div className="black">
     <Nav/>
     <Desktoppop/>
     {/* <Subadmin/> */}
     <div className='userdiv'> 
    {/* <User/> */}
     </div>
    </div>
  );
}

export default App;
