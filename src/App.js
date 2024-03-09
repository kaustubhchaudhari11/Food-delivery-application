import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,Outlet} from 'react-router-dom';
import { About } from './components/about';
import Contact from './components/Contact';
import Error from './components/Error';
import RestrauntMenu from './components/RestrauntMenu';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        {/*if path ='/' */}
        <Outlet/>
      </header>
    </div>
  );

}



//Router Configuration
export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>,
        errorElement:<Error/>
    
      },
      {
        path:"/about",
        element:<About/>,
        errorElement:<Error/>
    
      },  
      {
        path:"/contact",
        element:<Contact/>,
        errorElement:<Error/>
      },
      {
        path:"/restaurants/:resid",
        element:<RestrauntMenu/>,
        errorElement:<Error/>
      },  
    ],
    errorElement:<Error/>
  }, 
]);

export default App;
