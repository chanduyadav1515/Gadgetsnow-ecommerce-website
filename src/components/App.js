import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux/es/exports';
import {Home,Category,Details,NavBar,Footer} from './index'
import {setAllData,setLoading} from '../action'
function App() {
  const isLoading = useSelector((state) => state.fullDataReducer.isLoading);
  const dispatch = useDispatch()
  async function getData(){
    const response = await fetch("http://localhost:3001/");
    const data = await response.json();
    dispatch(setAllData(data));
    dispatch(setLoading(false));
  }
  
  React.useEffect(()=>{
    dispatch(setLoading(true));
    getData()
  },[])
  if(isLoading)
  {
    return(<div>
      loading
    </div>)
  }
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Category />} />
        <Route path="/headphones/:id" element={<Details />} />
        <Route path="/speakers" element={<Category />} />
        <Route path="/speakers/:id" element={<Details />} />
        <Route path="/earphones" element={<Category />} />
        <Route path="/earphones/:id" element={<Details />} />
      </Routes>
       <Footer /> 
    </Router>
  );
}

export default App;
