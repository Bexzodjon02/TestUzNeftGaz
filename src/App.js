import './App.css';
import { Link, Outlet , useNavigate} from "react-router-dom";
import { useEffect } from 'react';

function App() {
  
  let navigate = useNavigate()
  useEffect(()=>{
    let auth = localStorage.getItem('keyAuth')
       if (!auth) {
          navigate('/login')
       }
  },[])
  function exitSystem() {  
    localStorage.clear()
    navigate('/login')
  }
  
  return (
    <div className="App">
          <div>
        <h2>Hello World</h2>
        
        <button onClick={()=> exitSystem()} className='loginga-qaytish' to={'/'}>Tizimdan chiqish</button><br/>
        <Link to={'/examtest'} className='btn btn-success mx-3'>TESTGA KIRISH</Link>
        
    
        </div>
        <Outlet/>
    </div>
    
  );
}

export default App;
