import logo from './logo.svg';
import './App.css';
import React,{ useState,useEffect,lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,Outlet} from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import RestrauntMenu from './components/RestrauntMenu';
import UserContext from './utils.js/UserContext';
import { Provider } from "react-redux";
import Cart from './components/Cart';
import appStore from './utils.js/AppStore';



const About = lazy(() => import('./components/about'));


function App() {


  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Kaustubh Chaudhari",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName  }}>
    <div className="App">
      <header className="App-header">
        <Header/>
        <Outlet/>
      </header>
    </div>
    </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement:<Error/>
  }, 
]);

export default App;
